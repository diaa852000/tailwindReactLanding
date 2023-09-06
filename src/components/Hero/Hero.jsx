import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2'>growing with data analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl capitalize font-bold md:py-6'>grow with data.</h1>
            <div className='flex justify-center items-center gap-2 md:pl-4'>
                <p className='capitalize md:text-4xl sm:text-3xl text-xl font-bold py-4'>fast, flexible financing for</p>
                <Typed className='md:text-4xl sm:text-3xl text-xl font-bold' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='capitalize md:text-2xl text-xl font-bold text-gray-500 '>monitor your data analytics to increase renveue for BTB, BTC & SASS platforms.</p>
            <button className='bg-[#00df9a] hover:bg-[#00fd9aef] transition-all duration-200 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black capitalize'>get started</button>
        </div>
    </div>
  )
}

export default Hero