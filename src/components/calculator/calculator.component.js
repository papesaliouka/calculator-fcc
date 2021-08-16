import Display from '../display/display.component';
import Pads from '../pads/pads.component';
import './calculator.styles.css';


const Calculator =()=>{
    return(
        <div className='calculator'>
            <Display/>
            <Pads/>
        </div>
    );
};

export default Calculator