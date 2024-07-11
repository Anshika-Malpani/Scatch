import React from 'react'

const ProductCard = ({bagImage,title,amount}) => {
  return (
    <div className="card w-[23vw] h-[65vh] border-[2.5px] border-[#9694949d] rounded-xl pb-[1vw] bg-[#D3DEDC] flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105 hover:border-none">
        <div className='w-full h-[67%]  flex items-center justify-center'>
            <div className='w-[80%] h-[80%] bg-slate-200 rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={bagImage} alt="" />
            </div>
        </div>
        <div className='w-full  flex items-center justify-center -mt-[1vw] '>
            <div className='w-[80%] flex items-center justify-between '>
            <h1 className='font-bold  text-[1.3vw]'>{title}</h1>
            <h1 className='font-bold  text-[1.3vw]'>₹{amount}</h1>
            </div>
        </div>

        <div className='w-full  flex items-center justify-center mt-[0.5vw] '>
            <div className='w-[80%] flex items-center '>
            <p className='text-[1vw] tracking-tighter opacity-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, sint mollitia. Quia repellendus quo </p>
            </div>
        </div>

        <div className='w-full  flex items-center justify-center mt-[0.5vw]'>
            <div className='w-[80%] flex items-center justify-between '>
            <h1 className='font-bold  text-[0.9vw]'>View Products Details</h1>
            <button className='orderBtn px-[1vw] rounded-full bg-[#000000da] text-white py-[0.7vw] text-sm tracking-tight font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard