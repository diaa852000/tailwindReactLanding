import React from 'react'
import laptop from '../../assets/vecteezy_laptop-with-data-analytics-and-pie-cart_.jpg';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase font-bold text-[#00df9a]'>data analytics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 capitalize'>manage data analytics centrally</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eius quidem hic rerum, earum quae necessitatibus nisi, similique natus, 
                        consectetur neque quaerat tenetur alias quo inventore sapiente dolore eveniet? Pariatur?
                    </p>
                    <button className='bg-black hover:bg-[rgba(0,0,0,0.87)] transition-all duration-200 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white capitalize'>get started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics