
import React, { useState } from 'react'; // we need this to make JSX compile
import { romanNumCalculator } from '../helpers/calculator';


export const Claculator = ()  => {
    const [result, setResult] = useState("Your Result Will Be Displayed Here") 
    const [inputValue, setValue] = useState() 

    const handleChange = (event: any) : void  => {
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value))); // check if the input is between 0 an 1000
        setValue(value);

        setResult(romanNumCalculator(value))
    }

    return (
        <>
        <div className='flex flex-col w-full h-[5rem]'>
            <input className='text-black w-[30%] self-center'  
                value={inputValue} 
                onChange={handleChange}
                type="number"
                min="0"
                max="1000"
                data-testid="input"/>
            <label className='mt-5 text-3xl' data-testid="result">{result}</label>
        </div>
        </>
    )
}