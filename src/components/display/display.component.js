import './display.styles.css';
import { useContext } from 'react';
import {CalculatorContext} from '../../context/calculator.context';


const Display = ()=>{
    const {display} =useContext(CalculatorContext);
    return(
        <div className='display' id='display' >
            {display}
        </div>
    );
};

export default Display;