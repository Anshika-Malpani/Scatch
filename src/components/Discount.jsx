import React from 'react'

const Discount = () => {
  return (
    <>
    <div className='h-[10vw] md:h-[5vw] rounded-full bg-white flex items-center py-5 pl-3  gap-2'>
        <div className='w-[7.6vw] md:w-[3.8vw] h-[7.6vw] md:h-[3.8vw] bg-[#F57F50] rounded-full flex items-center justify-center p-1'>
            <img className='w-[80%] h-[80%] object-contain' src="backpack.png" alt="" />
        </div>
        <div className='flex flex-col gap-1'>
            <h1 className='leading-none font-black text-[3vw] md:text-[1.5vw] text-[#385154]'>Save Upto 25%</h1>
            <h1 className='leading-none text-xs md:text-sm'>On Backpack</h1>
        </div>
    </div>
    </>
  )
}

export default Discount