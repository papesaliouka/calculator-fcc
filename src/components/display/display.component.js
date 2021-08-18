import './display.styles.css';
import { useContext } from 'react';
import {CalculatorContext} from '../../context/calculator.context';


const Display = ()=>{
    const {display, preview} =useContext(CalculatorContext);
    return(
        <div className='display'  >
            <p id='preview'>{preview}</p>
            <p id='display'>{display}</p>
        </div>
    );
};

export default Display;