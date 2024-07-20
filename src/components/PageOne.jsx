import React, { useRef } from 'react';
import Navbar from './Navbar';
import Button from './Button';
import { RiArrowRightLine } from "@remixicon/react";
import Discount from './Discount';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PageOne = () => {
  const taglineRef = useRef();

  useGSAP(() => {
    gsap.to(taglineRef.current, {
      x: 0,
      duration: 1,
    });
    gsap.from(".heading", {
      y: 200,
      duration: 1,
      stagger: 0.2
    });
  });


  return (
    <div className='w-full h-screen bg-[#D3DEDC] select-none'>
      <Navbar />
      <div className='w-full h-[88vh]'>
        <div className='w-full h-full flex justify-center relative'>
          <div className='w-[96vw] md:w-[40vw] lg:w-[20vw] h-[73vh] md:h-[70vh] lg:h-[88vh] rounded-lg overflow-hidden absolute z-10 -bottom-[19px] md:bottom-0'>
            <img className='w-full h-full object-cover' src="hero.png" alt="Backpack" />
          </div>
          <div className='absolute w-[90vw] md:w-[50vw] lg:w-[30vw] left-[5%] md:left-[40%] lg:left-[63%] top-[25%] md:top-[20%] border-l-[2px] border-[#385154] px-3 overflow-hidden'>
            <h1 ref={taglineRef} className='hidden md:block text-[6vw] md:text-[3vw] lg:text-[1.3vw] text-[#385154] font-semibold opacity-65 tracking-tight -translate-x-[102%]'>
              Your journey begins with the right backpack. Find durable, stylish, and versatile packs that fit your lifestyle. Wherever you go, go prepared.
            </h1>
          </div>
          <div className='absolute top-[1%] md:top-[15%] overflow-hidden z-20 md:z-0'>
          <div className='overflow-hidden'>
              <h1 className='Consolas heading text-[15vw] md:text-[15vw] lg:text-[10vw]  text-[#385154] tracking-tight leading-none md:ml-2' >
                SCATCH
              </h1>
            </div>
            <div className='overflow-hidden'>
              <h1 className='Consolas heading text-[19.5vw] md:text-[30vw] lg:text-[20vw]  text-[#385154] leading-none tracking-tight' >
                BACKPACK
              </h1>
            </div>
          </div>
          <div className='absolute left-[3%] md:left-[8.4%] bottom-[14%] md:bottom-[6%] z-20 '>
            <Button name="Shop Now" icon={<RiArrowRightLine className='w-[70%] h-[70%] font-bold' />} link="/product" />
          </div>
          <div className='absolute right-[6%] md:left-[76%] bottom-[8%] md:bottom-[4%] z-20'>
            <Discount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
