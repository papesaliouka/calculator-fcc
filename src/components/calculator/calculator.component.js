import { CalculatorContextProvider } from '../../context/calculator.context';
import Display from '../display/display.component';
import Pads from '../pads/pads.component';
import './calculator.styles.css';

const Calculator =()=>{
    return(
        <div className='calculator'>
            <CalculatorContextProvider>
                <Display/>
                <Pads/>
            </CalculatorContextProvider>
        </div>
    );
};

export default Calculator