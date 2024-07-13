import React from 'react';
import { RiHeartFill } from "@remixicon/react";
import { NavLink } from 'react-router-dom';

const Button = ({ name, icon ,link,theme}) => {
  return (
    <>
      <NavLink to={link} style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }} className={`py-5 px-6 h-[6vh] md:h-[5vh] rounded-3xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 ease-in-out bg-[#385154] ${theme == 'light' ? 'bg-white' : 'md:bg-black'}  hover:scale-105`}>
        <button className={`${theme == 'light' ? 'text-black' : 'text-white'}  font-semibold text-[5.5vw] sm:text-[4vw] md:text-[2vw] lg:text-[1.3vw]`}>
          {name}
        </button>
        {icon && <span className='w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[2vw] md:h-[2vw] lg:w-[1.2vw] lg:h-[1.2vw] bg-[#F57F50] rounded-full flex items-center justify-center text-white mt-[0.1rem]'>{icon}</span>}
      </NavLink>
    </>
  );
};

export default Button;