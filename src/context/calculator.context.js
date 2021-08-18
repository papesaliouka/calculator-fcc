import {createContext, useState} from 'react';

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({children})=>{
    const [display, setDisplay] = useState('0');
    const [preview, setPreview] = useState('');
    return(
        <CalculatorContext.Provider
            value={{
                display,
                setDisplay,
                preview,
                setPreview
            }}
         >
            {children}
        </CalculatorContext.Provider>
    );
}