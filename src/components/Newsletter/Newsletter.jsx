import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white p-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 md:mt-7 lg:mb-4'>
            <h1 className='capitalize font-bold md:text-4xl sm:text-3xl text-2xl py-2'>want tips & tricks to optimize your flow?</h1>
            <p className='px-2'>sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flec-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black outline-0' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] hover:bg-[#00fd9ada] transition-all duration-200 w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white capitalize ml-4'>notify me</button>
                </div>
                <p>we care about the protection of your data. read our <span className='text-[#00df9a]'>privacy policy</span></p>
            </div>
        </div>
    </div>
)
}

export default Newsletter