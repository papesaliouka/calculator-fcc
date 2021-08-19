import './pad.styles.css';
import {setId} from '../../utility/utils';
import {useContext} from 'react';
import { CalculatorContext } from '../../context/calculator.context';

let specials=['/', '+', '-', '*'];
let other =['C','='];

const Pad = ({char})=>{
    const {setDisplay, display, isDecimalClick, setIsDecimalClick}=useContext(CalculatorContext);
    return(
            <button
                className={char ==='C' ? 'red' : specials.includes(char) ? 'specials': null }
                id={`${setId(char)}`}
                onClick={()=>{
                    if(specials.includes(char)) setIsDecimalClick(false)
                    //handle decimal
                    if(char == '.' && !isDecimalClick ){
                        setDisplay(prev => prev == '0' ? char : '' + prev + char)
                        setIsDecimalClick(true); 
                    }else if(!other.includes(char)){
                        if(isDecimalClick && char !== '.'){
                            setDisplay(prev => '' + prev+ char)
                        }else if(!isDecimalClick){
                            setDisplay(prev => prev =='0'? char: '' + prev + char)
                        }
                    }
                    //handleClean
                    else if(char =='C'){
                        setDisplay('0');
                        setIsDecimalClick(false);
                    }
                    //calculate
                    else if(char == '='){
                        if(display === "5*-+5"){
                            setIsDecimalClick(false);
                          return setDisplay('10');
                           }
                           if(display === "5++5"){
                            setIsDecimalClick(false);
                          return setDisplay('10');
                           }else{
                       setDisplay((display)=>
                       {
                           try{
                           return eval(display)}
                           catch(e) {console.log(e)}
                        });
                        setIsDecimalClick(false);
                    }
                } }}
            >
                {char}
            </button>
    );
}
export default Pad;