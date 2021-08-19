import {createContext, useState, useEffect} from 'react';

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({children})=>{
    const [display, setDisplay] = useState('0');
    const [isDecimalClick, setIsDecimalClick] = useState(false);
    useEffect(()=>console.log(display),[display])
    return(
        <CalculatorContext.Provider
            value={{
                display,
                setDisplay,
                isDecimalClick,
                setIsDecimalClick
            }}
         >
            {children}
        </CalculatorContext.Provider>
    );
}