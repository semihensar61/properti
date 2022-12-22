
import React, { useState } from 'react'; // we need this to make JSX compile
import { romanNumCalculator } from '../helpers/calculator';


export const Claculator = ()  => {
    const [result, setResult] = useState("Your Result Will Be Displayed Here") 

    const handleChange = (value: string) : void  => {
            setResult(romanNumCalculator(value))
    }

    return (
        <>
        <div className='flex flex-col w-full h-[5rem]'>
            <input type="text" pattern='\d*' maxLength={4} className='text-black w-[30%] self-center'  onChange={(e) => handleChange(e.target.value)} data-testid="input"/>
            <label className='mt-5 text-3xl' data-testid="result">{result}</label>
        </div>
        </>
    )
}