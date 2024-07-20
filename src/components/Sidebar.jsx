import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Sidebar = ({isOpen,closeMenu}) => {
  return (
    <>
    <div className={`sidebar  absolute w-[85%] h-screen  bg-black top-0 right-0 z-40 p-[7vw] ${isOpen ? 'flex flex-col gap-5' : 'hidden'} `}>
                    <div className='flex justify-end w-full'>
                        <button onClick={closeMenu} >
                            <FaTimes className='text-[7vw] text-white' />
                        </button>
                    </div>
                    <div className='flex-col flex gap-5 mt-[10vw]'>
                        <NavLink to="/" className=' overflow-hidden  text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium  text-white cursor-pointer transition-all duration-150 ease-in-out  border-b-[1px] border-[#dadada]'><h1 className='link'>Home</h1></NavLink>
                        <NavLink to="/product" className=' overflow-hidden  text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium text-white cursor-pointer transition-all duration-150 ease-in-out border-b-[1px] border-[#dadada]'><h1 className='link'>Product</h1></NavLink>
                        <NavLink to="/about" className=' overflow-hidden  text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium text-white cursor-pointer transition-all duration-150 ease-in-out border-b-[1px] border-[#dadada]'><h1 className='link'>About</h1></NavLink>
                        <NavLink to="/contact" className=' overflow-hidden  text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium text-white cursor-pointer transition-all duration-150 ease-in-out border-b-[1px] border-[#dadada]'><h1 className='link'>Contact</h1></NavLink>
                    </div>

                    <div className='mt-[4vw] ml-[1vw] w-[50%] overflow-hidden'><div className='link'><Button name="Log in" link="/login" theme='light' /></div></div>
                </div>
    </>
  )
}

export default Sidebar