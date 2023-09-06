import React from 'react'
import single from '../../assets/single.png'
import partnership from '../../assets/partnership.png'
import group from '../../assets/group.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-md flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-500'>
            <img className='w-14 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
            <h2 className='capitalize font-bold text-2xl text-center py-8'>single user</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
              <p className='capitalize border-b mx-8 mt-6 py-3'>500 GB Storage</p>
              <p className='capitalize border-b mx-8 py-3'>1 user allowed</p>
              <p className='capitalize border-b mx-8 py-3'>send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] hover:bg-[#00df9afd] transition-all w-[200px] duration-200 rounded-md font-medium my-6 mx-auto py-3 text-white capitalize'>start trail</button>
        </div>
        <div className='w-full shadow-md flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-500 bg-gray-100'>
            <img className='w-14 mx-auto mt-[-3rem] bg-transparent' src={partnership} alt="/" />
            <h2 className='capitalize font-bold text-2xl text-center py-8'>partnership</h2>
            <p className='text-center text-4xl font-bold'>$199</p>
            <div className='text-center font-medium'>
              <p className='capitalize border-b mx-8 mt-6 py-3'>1 TB Storage</p>
              <p className='capitalize border-b mx-8 py-3'>3 user allowed</p>
              <p className='capitalize border-b mx-8 py-3'>send up to 10 GB</p>
            </div>
            <button className='bg-[#00df9a] hover:bg-[#00df9afd] transition-all w-[200px] duration-200 rounded-md font-medium my-6 mx-auto py-3 text-white capitalize'>start trail</button>
        </div>
        <div className='w-full shadow-md flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
            <img className='w-14 mx-auto mt-[-3rem] bg-white' src={group} alt="/" />
            <h2 className='capitalize font-bold text-2xl text-center py-8'>group account</h2>
            <p className='text-center text-4xl font-bold'>$299</p>
            <div className='text-center font-medium'>
              <p className='capitalize border-b mx-8 mt-6 py-3'>5 TB Storage</p>
              <p className='capitalize border-b mx-8 py-3'>10 user allowed</p>
              <p className='capitalize border-b mx-8 py-3'>send up to 20 GB</p>
            </div>
            <button className='bg-[#00df9a] hover:bg-[#00df9afd] transition-all w-[200px] duration-200 rounded-md font-medium my-6 mx-auto py-3 text-white capitalize'>start trail</button>
        </div>
      </div>
    </div>
  )
}

export default Cards