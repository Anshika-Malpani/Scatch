import React, { useEffect, useRef } from 'react'
import ProductCard from './ProductCard'
import { NavLink } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const LatestProduct = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, 
      { opacity: 0, x: -80 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 2, 
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%', 
          end: 'bottom 10%', 
         
        }
      }
    );
  }, []);

  return (
    <div className='w-full min-h-full bg-[#D3DEDC] flex flex-col pb-[25vw] md:pb-5'>
      <div  className='w-full h-[20vh] md:h-[20vh] flex items-center px-[7vw]  md:px-[11.8vw]'>
        <h1 ref={headingRef} className='text-[9vw]  md:text-5xl font-[1000]'>Discover Our Latest Products</h1>
      </div>
      <div className='w-full md:h-[80vh] flex flex-col gap-10 justify-center items-center relative flex-shrink-0 md:flex-row md:items-baseline '>
        <ProductCard bagImage="bag11.png" title="Travelling Bagpack" amount="4999" />
        <ProductCard bagImage="bag2.avif" title="Office Bagpack" amount="1999" />
        <ProductCard bagImage="bag6.avif" title="Stylish Bagpack" amount="1499" />
        <NavLink to="/product" style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }}  className='absolute px-5 bg-[#385154]  text-white rounded-full py-3 text-sm md:bottom-6 left-[26%] -bottom-[5%] md:left-[44%] transition-all duration-300 ease-in-out hover:bg-[#000000da] hover:text-white hover:scale-105'> View All Our Products</NavLink>
      </div>
    </div>
  )
}

export default LatestProduct