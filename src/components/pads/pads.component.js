import Pad from '../pad/pad.component';
import './pads.styles.css';


let newArr =[7,8,9,'/',6,5,4,'x',3,2,1,'+','C','.',0,'=']

const Pads = ()=>{
    return(
        <div className='pads'>
            {newArr.map((elem)=> <Pad char={elem}/>)}
        </div>
    );
}

export default Pads;