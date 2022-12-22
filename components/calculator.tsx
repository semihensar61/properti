
import React, { useState } from 'react'; // we need this to make JSX compile
import { romanNumCalculator } from '../helpers/calculator';


export const Claculator = ()  => {
    const [result, setResult] = useState("Your Result Will Be Displayed Here") 

    const handleChange = (event: any) : void  => {
            setResult(romanNumCalculator(event.target.value))
    }

    return (
        <>
        <div className='flex flex-col  w-full '>
            <input type="text" pattern='\d*' maxLength={4} className='text-black w-[30%] self-center'  onChange={handleChange}/>
            <label className='mt-5 text-3xl'>{result}</label>
        </div>
        </>
    )
}