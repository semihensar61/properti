
import React from 'react'; // we need this to make JSX compile



export const Claculator = ()  => {
  return (
    <>
      <div className='flex flex-col w-[30%]  self-center'>
        <input type="number" className='text-black'/>
        <label className='mt-5 text-3xl'>Result Label</label>
      </div>
    </>
  )
}