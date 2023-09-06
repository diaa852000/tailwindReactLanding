import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase'>react.</h1>
      <ul className='hidden lg:flex uppercase'>
        <li className='cursor-pointer hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold p-4'>home</li>
        <li className='cursor-pointer hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold p-4'>company</li>
        <li className='cursor-pointer hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold p-4'>resources</li>
        <li className='cursor-pointer hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold p-4'>about</li>
        <li className='cursor-pointer hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold p-4'>contact</li>
      </ul>
      <div onClick={handleNav} className='cursor-pointer block lg:hidden'>
        { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
      </div>
      
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 transition-all' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase m-4'>react.</h1>
        <ul className='uppercase p-4'>
          <li className=' hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600'>home</li>
          <li className=' hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600'>company</li>
          <li className=' hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600'>resources</li>
          <li className=' hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4 border-b border-gray-600'>about</li>
          <li className=' hover:text-[#00df9a] transition-all duration-200 ease-in-out font-semibold cursor-pointer px-1 py-4'>contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar