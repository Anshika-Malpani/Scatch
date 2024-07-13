import React from 'react'

const Marquee = () => {
  return (
    <div className=' h-full bg-black flex items-center justify-evenly flex-shrink-0 overflow-x-auto whitespace-nowrap gap-4' >
        <div className='ml-2 px-4 py-2 md:px-6 md:py-3 uppercase rounded-full h-[12vw] md:h-[4vw] bg-[#353535] text-white flex items-center justify-center'>
            <h1 className='text-[5vw] md:text-[1.6vw] Consolas opacity-80'>Eco-friendly materials</h1>
        </div>
        <div className='px-4 py-2 md:px-6 md:py-3 uppercase rounded-full h-[12vw] md:h-[4vw] bg-[#353535] text-white flex items-center justify-center'>
            <h1 className='text-[5vw] md:text-[1.6vw] Consolas opacity-80'>mutli-pocket</h1>
        </div>
        <div className='px-4 py-2 md:px-6 md:py-3 uppercase rounded-full h-[12vw] md:h-[4vw] bg-[#353535] text-white  flex items-center justify-center'>
            <h1 className='text-[5vw] md:text-[1.8vw] Consolas opacity-80'>premium leather</h1>
        </div>
        <div className='px-4 py-2 md:px-6 md:py-3 uppercase rounded-full h-[12vw] md:h-[4vw] bg-[#353535] text-white flex items-center justify-center'>
            <h1 className='text-[5vw] md:text-[1.6vw] Consolas opacity-80'>light weight</h1>
        </div>
        <div className='mr-2 px-4 py-2 md:px-6 md:py-3 uppercase rounded-full h-[12vw] md:h-[4vw] bg-[#353535] text-white flex items-center justify-center'>
            <h1 className='text-[5vw] md:text-[1.6vw] Consolas opacity-80'>ergonomic design</h1>
        </div>
    </div>
  )
}

export default Marquee