import './pad.styles.css';
import {setId} from '../../utility/utils'

let specials=['.', '/', '=', '+', '-', 'x']

const Pad = ({char})=>{
    return(
            <button className={char ==='C' ? 'red' : specials.includes(char) && 'specials' } id={`${setId(char)}`} >{char}</button>
    );
}

export default Pad;