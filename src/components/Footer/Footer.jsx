import React from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase'>react.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dolor quos. Amet sint distinctio, impedit, necessitatibus consequuntur nihil reprehenderit enim voluptate placeat dolor id soluta?</p>
                <div className='flex justify-start gap-2 w-[40%] my-2'>
                    <FaFacebook size={30} />
                    <FaInstagram size={30} />
                    <FaTwitter size={30} />
                    <FaGithub size={30} />
                    <FaDribbble size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <div className='w-20'>
                    <h5 className='text-gray-500 capitalize font-bold'>solutions</h5>
                    <ul>
                        <li className='capitalize py-2 text-sm cursor-pointer'>analitics</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>marketing</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>commerce</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>insights</li>
                    </ul>
                </div>
                <div className='w-20'>
                    <h5 className='font-bold text-gray-500 capitalize'>support</h5>
                    <ul>
                        <li className='capitalize py-2 text-sm cursor-pointer'>pricing</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>documentaion</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>guides</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>API status</li>
                    </ul>
                </div>
                <div className='w-20'>
                    <h5 className='font-bold text-gray-500 capitalize'>company</h5>
                    <ul>
                        <li className='capitalize py-2 text-sm cursor-pointer'>about</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>blog</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>jobs</li>
                        <li className='capitalize py-2 text-sm cursor-pointer'>careers</li>
                    </ul>
                </div>
                <div className='w-20'>
                    <h5 className='font-bold text-gray-500 capitalize'>legal</h5>
                    <ul>
                        <li className='capitalize py-2 text-sm cursor-pointer md:text-md'>claim</li>
                        <li className='capitalize py-2 text-sm cursor-pointer md:text-md'>policy</li>
                        <li className='capitalize py-2 text-sm cursor-pointer md:text-md'>terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer