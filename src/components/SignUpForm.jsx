import Input  from './Input'
import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUpForm = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 w-full gap-2'>
            <h1 className='text-[4vw] md:text-[1.2vw]'>or use your email for registration </h1>
            <form action="" method="get" className='w-full'>
                <div className='flex flex-col gap-4'>
                    <Input placeholder="Username" icon={<FaUser className='text-[6vw] md:text-[1.2vw]'/>} field="text" />
                    <Input placeholder="Email" icon={<MdEmail className='text-[6vw] md:text-[1.2vw]' />} field="text" />
                    <Input placeholder="Password" icon={<RiLockPasswordFill className='text-[6vw] md:text-[1.2vw]' />} field="password" />
                </div>
            </form>
            <div className='w-[25vw] md:w-[12vw] h-[5vh] md:h-[7vh] bg-[#385154] rounded-md flex items-center justify-center hover:scale-105 cursor-pointer transition-all ease-in-out duration-150 mt-1'>
                <h1 className='text-white text-[4vw] md:text-[1.4vw] uppercase font-semibold'>sign up</h1>
            </div>
        </div>
  )
}

export default SignUpForm