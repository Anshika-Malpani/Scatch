import React, { useState } from 'react'
import Button from './Button'
import { RiLoginBoxFill } from "@remixicon/react";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(true);
        gsap.from('.sidebar', {
            x: 70,
            duration: 0.5,
            ease: 'power2.out'
        })
    };



    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='w-full h-[10vh] md:h-[12vh] flex items-center justify-between bg-[#D3DEDC] p-4 md:p-0 relative'>
                <div className='w-[50%] md:w-[20%] h-full flex items-center pl-4 md:pl-16 gap-1'>
                    <img className='h-[70%] md:h-[48%] object-contain' src="/logo.png" alt="logo.png" />
                    <h1 className='font-extrabold text-[7vw] md:text-[2.5vw] tracking-tighter leading-4 Consolasf'>SCATCH</h1>
                </div>

                <div className={`flex-col hidden md:flex-row md:flex w-full md:w-[60%] h-full items-center justify-center gap-8 pl-[4vw] `}>
                    <NavLink to="/" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Home</NavLink>
                    <NavLink to="/product" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Product</NavLink>
                    <NavLink to="/about" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>About</NavLink>
                    <NavLink to="/contact" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Contact</NavLink>
                </div>
                <div className='w-[50%] md:w-[20%] h-full flex items-center justify-end pr-4 md:pr-16'>
                    <IoCartOutline className='text-[8vw] md:text-[2.8vw]' />
                    <div className={`w-full h-full md:flex items-center justify-center ${isOpen ? 'flex' : 'hidden'}`}>
                        <Button name="Log in" link="/login" />
                    </div>
                </div>
                <div className='md:hidden flex items-center pr-4'>
                    <button onClick={toggleMenu}>
                        <FaBars className='text-[7vw]' />
                    </button>
                </div>
                <div className={`sidebar  absolute w-[85%] h-screen  bg-black top-0 right-0 z-20 p-[7vw] ${isOpen ? 'flex flex-col gap-5' : 'hidden'} `}>
                    <div className='flex justify-end w-full'>
                        <button onClick={closeMenu} >
                            <FaTimes className='text-[7vw] text-white' />
                        </button>
                    </div>
                    <div className='flex-col flex gap-5 mt-[10vw]'>
                        <NavLink to="/" className='links text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium  text-white cursor-pointer transition-all duration-150 ease-in-out  border-b-[1px] border-[#dadada]'>Home</NavLink>
                        <NavLink to="/product" className='links text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium text-white cursor-pointer transition-all duration-150 ease-in-out border-b-[1px] border-[#dadada]'>Product</NavLink>
                        <NavLink to="/about" className='links text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium text-white cursor-pointer transition-all duration-150 ease-in-out border-b-[1px] border-[#dadada]'>About</NavLink>
                        <NavLink to="/contact" className='links text-[8vw] p-2 md:text-[1.4vw] opacity-70 font-medium text-white cursor-pointer transition-all duration-150 ease-in-out border-b-[1px] border-[#dadada]'>Contact</NavLink>
                    </div>

                    <div className='mt-[4vw] ml-[1vw] w-[50%]'><Button name="Log in" link="/login" theme='light' /></div>
                </div>
            </div>
        </>
    )
}

export default Navbar