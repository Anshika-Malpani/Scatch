import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ bagImage, title, amount }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { opacity: 0, y: 80 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 2, 
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%', 
          end: 'bottom 10%', 
          markers:true
        }
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="card w-[87%] h-[57vh] md:w-[40vw] lg:w-[23vw]  md:h-[65vh]  border-[2.5px] border-[#9694949d] rounded-xl pb-4 md:pb-[1vw] bg-[#D3DEDC] flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105 hover:border-none">
      <div className='w-full h-[32vh] md:h-[40vh]  flex items-center justify-center'>
        <div className='w-[90%] h-[90%] md:w-[80%] md:h-[80%] bg-slate-200 rounded-xl overflow-hidden'>
          <img className='w-full h-full object-cover' src={bagImage} alt="" />
        </div>
      </div>
      <div className='w-full flex items-center justify-center mt-4 md:mt-0'>
        <div className='w-[90%] md:w-[80%] flex items-center justify-between '>
          <h1 className='font-bold text-[6vw] md:text-[1.3vw]'>{title}</h1>
          <h1 className='font-bold text-[6vw] md:text-[1.3vw]'>₹{amount}</h1>
        </div>
      </div>
      <div className='w-full flex items-center justify-center mt-2 md:mt-[0.5vw]'>
        <div className='w-[90%] md:w-[80%] flex items-center'>
          <p className='text-sm md:text-[1vw] tracking-tighter opacity-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, sint mollitia. Quia repellendus quo</p>
        </div>
      </div>
      <div className='w-full flex items-center justify-center mt-2 md:mt-[0.5vw]'>
        <div className='w-[90%] md:w-[80%] flex items-center justify-between '>
          <h1 className='font-bold  md:text-[0.9vw]'>View Products Details</h1>
          <button style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }}  className='orderBtn px-4 md:px-[1vw] rounded-full bg-[#000000da] text-white py-2 md:py-[0.7vw] text-sm md:text-sm tracking-tight font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
