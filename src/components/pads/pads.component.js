import Pad from '../pad/pad.component';
import './pads.styles.css';


let newArr =['C','/','x',7,8,9,'-',6,5,4,'+',3,2,1,'=',0,'.']

const Pads = ()=>{
    return(
        <div className='pads'>
            {newArr.map((elem)=> <Pad char={elem}/>)}
        </div>
    );
}

export default Pads;