import React from 'react'
import Input from './Input'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className='flex flex-col items-center px-[5vw] md:px-[3vw] w-full gap-3'>
            <h1 className='text-[4vw] md:text-[1.2vw]'>or use your email password</h1>
            <form action="" method="get" className='w-full'>
                <div className='flex flex-col gap-4'>
                    <Input placeholder="Email" icon={<MdEmail className='text-[6vw] md:text-[1.2vw]' />} field="text" />
                    <Input placeholder="Password" icon={<RiLockPasswordFill className='text-[6vw] md:text-[1.2vw]' />} field="password" />
                </div>
            </form>
            <div><h1 className='text-[3.5vw] md:text-[1.2vw] opacity-70 transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Forgot your password?</h1></div>
            <div className='w-[25vw] md:w-[12vw] h-[5vh] md:h-[7vh] bg-[#385154] rounded-md flex items-center justify-center hover:scale-105 cursor-pointer transition-all ease-in-out duration-150'>
              <h1 className='text-white text-[4vw] md:text-[1.4vw] uppercase font-semibold'>log in</h1>
              </div>
        </div>
  )
}

export default LoginForm