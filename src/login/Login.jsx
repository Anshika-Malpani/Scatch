import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navbar from "../components/Navbar"
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';

const Login = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const handleSignUpPage = () => {
        gsap.to(".login", { display: "none", duration: 0 });
        if (isMobile) {
            gsap.to(".left", { y: "150%", duration: 0.2 });
            gsap.to(".right", { y: "-68%", duration: 0.2 });
            gsap.to(".loginLeft", { y: "122%", duration: 0.2 });
            gsap.to(".loginRight", { y: "-82%", duration: 0.2 });
        } else {
            gsap.to(".left", { x: "100%", duration: 0.2 });
            gsap.to(".right", { x: "-100%", duration: 0.2 });
            gsap.to(".loginLeft", { x: "122%", duration: 0.2 });
            gsap.to(".loginRight", { x: "-82%", duration: 0.2 });
        }
        gsap.to(".signup", { display: "block", duration: 0 });
    }

    const handleLoginPage = () => {
        gsap.to(".signup", { display: "none", duration: 0 });
        if (isMobile) {
            gsap.to(".loginLeft", { y: 0, duration: 0.2 });
            gsap.to(".loginRight", { y: "0%", duration: 0.2 });
            gsap.to(".left", { y: "0%", duration: 0.2 });
            gsap.to(".right", { y: "0%", duration: 0.2 });
        } else {
            gsap.to(".loginLeft", { x: 0, duration: 0.2 });
            gsap.to(".loginRight", { x: "0%", duration: 0.2 });
            gsap.to(".left", { x: "0%", duration: 0.2 });
            gsap.to(".right", { x: "100%", duration: 0.2 });
        }
        gsap.to(".login", { display: "block", duration: 0 });
    }

    return (
        <>
            <Navbar />
            <div className='bg-[#D3DEDC] w-full h-[90vh] md:h-[88vh] flex flex-col items-center -mt-[5.5vw] justify-center md:-mt-[1.5vw]'>
                <div className='w-[90%] md:w-[62%] h-[90%] md:h-[85%] rounded-[3vw] overflow-hidden relative' style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }}>

                    <div className='w-full h-full bg-white absolute z-10 login'>

                        <div className='flex w-full h-full flex-col md:flex-row'>
                            <div className='loginLeft w-full md:w-[50%] h-full bg-[#385154] relative flex items-center justify-center rounded-b-[10vw] overflow-hidden md:rounded-r-[10vw] md:rounded'>
                                <div className='w-full h-full flex flex-col items-center justify-center gap-5 px-[3vw]'>
                                    <h1 className='text-[6vw] md:text-[2.5vw] text-white font-semibold'>Create Account</h1>
                                    <h4 className='text-[4vw] md:text-[1.4vw] text-white text-center'>Register with your personal details to use all the site features</h4>
                                    <div onClick={handleSignUpPage} className='w-[25vw] md:w-[10vw] h-[5vh] md:h-[7vh] border-[1px] border-white rounded-md flex items-center justify-center hover:scale-105 cursor-pointer transition-all ease-in-out duration-150'><h1 className='text-white text-[4vw] md:text-[1.4vw] uppercase font-semibold'>Sign up</h1></div>
                                </div>
                            </div>

                            <div className='w-full md:w-[50%] h-full flex flex-col gap-4 relative loginRight py-[4vw] items-center'>

                                <div className='flex items-center justify-center'> <h1 className='text-[6vw] md:text-[2.5vw] font-semibold tracking-tight'>Welcome Back!</h1></div>

                                <div className='flex gap-3'>
                                    <div className='w-[8vw] md:w-[2.8vw] h-[8vw] md:h-[2.8vw] rounded-md border-[1px] border-[#ccc] flex items-center justify-center'><FaGoogle /></div>
                                    <div className='w-[8vw] md:w-[2.8vw] h-[8vw] md:h-[2.8vw] rounded-md border-[1px] border-[#ccc] flex items-center justify-center'><FaFacebookF /></div>
                                </div>
                                <LoginForm />

                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full flex bg-white absolute signup hidden'>
                        <div className='w-full h-full flex flex-col md:flex-row'>
                            <div className='left w-full md:w-[50%] h-full bg-[#385154] relative flex items-center justify-center rounded-t-[10vw] md:rounded-l-[10vw] md:rounded overflow-hidden'>
                                <div className='w-full h-full flex flex-col items-center justify-center gap-5 px-[3vw]'>
                                    <h1 className='text-[6vw] md:text-[2.5vw] text-white font-semibold'>Welcome Back!</h1>
                                    <h4 className='text-[4vw] md:text-[1.4vw] text-white text-center'>Enter your personal details to use all the site features</h4>
                                    <div onClick={handleLoginPage} className='w-[25vw] md:w-[10vw] h-[5vh] md:h-[7vh] border-[1px] border-white rounded-md flex items-center justify-center hover:scale-105 cursor-pointer transition-all ease-in-out duration-150'><h1 className='text-white text-[3vw] md:text-[1.4vw] uppercase font-semibold'>log in</h1></div>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] h-full flex flex-col gap-4 relative right py-[4vw] items-center'>
                                <div className='flex items-center justify-center'> <h1 className='text-[6vw] md:text-[2.5vw] font-semibold tracking-tight'>Create an Account</h1></div>

                                <div className='flex gap-3'>
                                    <div className='w-[8vw] md:w-[2.8vw] h-[8vw] md:h-[2.8vw] rounded-md border-[1px] border-[#ccc] flex items-center justify-center'><FaGoogle /></div>
                                    <div className='w-[8vw] md:w-[2.8vw] h-[8vw] md:h-[2.8vw] rounded-md border-[1px] border-[#ccc] flex items-center justify-center'><FaFacebookF /></div>
                                </div>
                                <SignUpForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login