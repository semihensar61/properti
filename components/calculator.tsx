
import React, { useState, useRef, KeyboardEventHandler, ChangeEvent } from 'react'; // we need this to make JSX compile
import { romanNumCalculator } from '../helpers/calculator';


export const Claculator = ()  => {
    const [result, setResult] = useState("Your Result Will Be Displayed Here") 
    const inputRef = useRef<HTMLInputElement>(null);
    const handleKeyPress = (event: any) : void  => {
        console.log(event.key)
        if (event.key === ".") {
            // to prevent to enter input unless  integer 
            event.preventDefault();
        } else {
            setResult(romanNumCalculator(inputRef))
        }
    }

    return (
        <>
        <div className='flex flex-col  w-full '>
            <input type="number" min="0" step="1" ref={inputRef} className='text-black w-[30%] self-center' onKeyDown={handleKeyPress}/>
            <label className='mt-5 text-3xl'>{result}</label>
        </div>
        </>
    )
}