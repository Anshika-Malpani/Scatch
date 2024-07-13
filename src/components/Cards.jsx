import { RiArrowRightUpLine } from "@remixicon/react";
import React from 'react';

const Cards = ({ feature, theme, icon }) => {
    return (
        <div style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }}  className={theme === 'dark' ? 'w-[95%] md:w-[23vw] px-5 py-5 border-[1.5px] border-[#7e7e7e9d] rounded-2xl bg-[#000000da] text-white transition-all ease-in-out duration-150 hover:scale-105' : 'w-[95%] md:w-[23vw] px-5 py-5 border-[1.5px] border-[#7e7e7e9d] rounded-2xl bg-[#D3DEDC] transition-all ease-in-out duration-150 hover:scale-105 '}>
            <div className='w-full h-[18vh] md:h-[20vh]'>
                <div className='w-full h-[10vh] relative'>
                    <div className={theme === 'dark' ? 'w-[20vw] md:w-[4.5vw] h-[20vw] md:h-[4.5vw] rounded-full bg-[#D3DEDC] absolute z-10 flex items-center justify-center' : 'w-[20vw] md:w-[4.5vw] h-[20vw] md:h-[4.5vw] rounded-full bg-[black] absolute z-10 flex items-center justify-center'}>
                        <img src={icon} alt="" className={theme === 'dark' ? 'w-[50%] h-[50%] object-cover' : 'w-[50%] h-[50%] object-cover invert'} />
                    </div>
                    <div className='w-[20vw] md:w-[4.5vw] h-[20vw] md:h-[4.5vw] rounded-full border-[1.5px] border-[#7e7e7e9d] absolute top-0 right-[68%] md:right-[72%]'></div>
                </div>
                <div className='w-full h-[40%] flex items-center justify-evenly border-b-[1.5px] border-[#7e7e7e9d]'>
                    <div className='w-[70%] h-full flex items-center'>
                        <h1 className='text-2xl md:text-xl font-semibold'>{feature}</h1>
                    </div>
                    <div className='w-[30%] h-full relative'>
                        <div className={theme === 'dark' ? 'w-[7vw] md:w-[2.2vw] h-[7vw] md:h-[2.2vw] rounded-full border-[1.5px] border-[#D3DEDC] bg-[#D3DEDC] absolute top-[22%] right-[8%] z-10 flex items-center justify-center' : 'w-[7vw] md:w-[2.2vw] h-[7vw] md:h-[2.2vw] rounded-full border-[1.5px] border-black bg-[#D3DEDC] absolute top-[22%] right-[8%] z-10 flex items-center justify-center'}>
                            <div className='w-[100%] h-[100%] font-bold flex items-center justify-center'>{<RiArrowRightUpLine className="w-[80%] text-black" />}</div>
                        </div>
                        <div className='w-[7vw] md:w-[2.2vw] h-[7vw] md:h-[2.2vw] rounded-full border-[1.5px] border-[#7e7e7e9d] absolute top-[22%] right-[15%]'></div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <p className='text-xs md:text-sm opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus architecto doloribus sapiente.</p>
            </div>
        </div>
    );
};

export default Cards;