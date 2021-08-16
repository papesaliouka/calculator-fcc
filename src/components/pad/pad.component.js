import './pad.styles.css';

let specials=['.', '/', '=', '+', '-', 'x']

const Pad = ({char})=>{
    return(
            <button className={char ==='C' ? 'red' : specials.includes(char) && 'specials' } >{char}</button>
    );
}

export default Pad;