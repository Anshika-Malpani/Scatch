import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full h-full bg-black flex items-center  justify-evenly flex-shrink-0' >
        <div className='px-6 py-3 uppercase rounded-full h-[4vw] border-[1px] border-[#7e7e7e9d] text-white flex items-center justify-center'><h1 className='text-[1.6vw] Consolas opacity-80'>Eco-friendly materials</h1></div>
        <div className='px-6 py-3 uppercase rounded-full h-[4vw]  bg-[#353535] text-white flex items-center justify-center'><h1 className='text-[1.6vw] Consolas opacity-80'>mutli-pocket</h1></div>
        <div className='px-6 py-3 uppercase rounded-full h-[4vw] border-[1px] border-[#7e7e7e9d] text-white flex items-center justify-center'><h1 className='text-[1.8vw] Consolas opacity-80'>premium leather</h1></div>
        <div className='px-6 py-3 uppercase rounded-full h-[4vw]  bg-[#353535] text-white flex items-center justify-center'><h1 className='text-[1.6vw] Consolas opacity-80'>light weight</h1></div>
        <div className='px-6 py-3 uppercase rounded-full h-[4vw] border-[1px] border-[#7e7e7e9d] text-white flex items-center justify-center'><h1 className='text-[1.6vw] Consolas opacity-80'>ergonomic design</h1></div>
    </div>
  )
}

export default Marquee