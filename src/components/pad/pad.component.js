import './pad.styles.css';
import {setId} from '../../utility/utils';
import {useContext} from 'react';
import { CalculatorContext } from '../../context/calculator.context';

let specials=['/', '+', '-', 'x'];
let other =['C','='];


const calculate = (num1,num2, sym)=>{
    if(sym =='+') return Number(num1)+Number(num2);
    if(sym == '-') return Number(num1)-Number(num2);
    if(sym == 'x') return Number(num1)*Number(num2);
    if(sym == '/') {
        let result= (Number(num1)/Number(num2)).toPrecision(4);
        result = '' + result
        if(result.endsWith('00')){
            return (Number(num1)/Number(num2))
        }else{
            return (Number(num1)/Number(num2)).toPrecision(4);
        }
    }
}

const Pad = ({char})=>{
    const {setPreview, setDisplay, preview}=useContext(CalculatorContext);
    return(
            <button
                className={char ==='C' ? 'red' : specials.includes(char) ? 'specials': null }
                id={`${setId(char)}`}
                onClick={()=>{
                    //handle preview
                    setPreview(prev=> {
                        if(!other.includes(char)){
                            return prev == null ? char : '' + prev + char 
                        }
                        return null
                    });
                    //handle display
                    if(specials.includes(char)){
                        setDisplay('0');
                    }else if(!other.includes(char)){
                    setDisplay(prev=> prev =='0' ? char : '' + prev + char );
                    }
                    //handleClean
                    else if(char =='C'){
                        setDisplay(0);
                        setPreview(null);
                    }
                    //calculate
                    else if(char == '='){
                        //sanitize input
                        const dontMatchNumbers = new RegExp('[^0-9.0-9]');
                        let dontMatchSpecials = new RegExp('[0-9]');
                        const value = preview.split(dontMatchNumbers);
                       const symbol = preview.split(dontMatchSpecials).filter(sym=> sym !=="").filter(sym=> sym !==".");
                       //calculate
                       let valCount=0;
                       let symCount=0;
                       let result=0;
                       while(valCount< value.length && symCount<symbol.length){
                         if(result==0){
                            result = calculate(value[valCount], value[valCount+1], symbol[symCount]);
                            valCount+=2;
                            symCount++;
                         }else if(result>0 && valCount< value.length && symCount<symbol.length){
                            result= calculate(result,value[valCount], symbol[symCount])
                            symCount++;
                            valCount++;
                         }
                       }
                       //show the result
                       setPreview(result);
                       setDisplay(result);
                    }
                } }
            >
                {char}
            </button>
    );
}

export default Pad;
