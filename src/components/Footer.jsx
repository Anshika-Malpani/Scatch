import React from 'react'
import ContactLink from './ContactLink'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#000000ea]  flex flex-col gap-4 items-center justify-center'>
                <div className='flex items-center justify-center pt-[5vw] px-[3vw] gap-3 md:pt-[3vw]'>
                    <ContactLink icon={<FaFacebook className='text-[8vw] md:text-[2.5vw]' />} />
                    <ContactLink icon={<FaInstagram className='text-[7vw]  md:text-[2vw]' />} />
                    <ContactLink icon={<RiTwitterXFill className='text-[6vw]  md:text-[2vw]' />} />
                    <ContactLink icon={<FaGooglePlus className='text-[8vw]  md:text-[2.5vw]' />} />
                    <ContactLink icon={<FaYoutube className='text-[8vw]  md:text-[2.5vw]' />} />
                </div>
                <div className='flex flex-col items-center py-[2vw] md:py-[1vw] md:flex-row md:gap-4'>
                    <NavLink to="/" className='text-[6.5vw] md:text-[1.4vw] opacity-85  text-white cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Home</NavLink>
                    <NavLink to="/product" className='text-[6.5vw] md:text-[1.4vw] opacity-85  text-white cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Product</NavLink>
                    <NavLink to="/about" className='text-[6.5vw] md:text-[1.4vw]  opacity-85 text-white cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>About</NavLink>
                    <NavLink to="/contact" className='text-[6.5vw] md:text-[1.4vw] opacity-85  text-white cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Contact</NavLink>
                </div>
                <div className='w-full bg-black py-[5vw] md:py-[2vw] '><h1 className='text-white text-center text-[5vw] md:text-[1.4vw]'>Copyright ©2024 All rights reserved.</h1></div>
            </div>
        </>
    )
}

export default Footer