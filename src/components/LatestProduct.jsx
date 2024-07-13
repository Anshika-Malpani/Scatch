import React from 'react'
import ProductCard from './ProductCard'

const LatestProduct = () => {
  return (
    <div className='w-full min-h-full bg-[#D3DEDC] flex flex-col pb-[25vw] md:pb-5'>
      <div className='w-full h-[18vh] md:h-[20vh] flex items-center px-[7vw] md:px-[11.8vw]'>
        <h1 className='text-[9vw]  md:text-5xl font-[1000]'>Discover Our Latest Products</h1>
      </div>
      <div className='w-full md:h-[80vh] flex flex-col gap-10 justify-center items-center relative flex-shrink-0 md:flex-row md:items-baseline '>
        <ProductCard bagImage="bag11.png" title="Travelling Bagpack" amount="4999" />
        <ProductCard bagImage="bag2.avif" title="Office Bagpack" amount="1999" />
        <ProductCard bagImage="bag6.avif" title="Stylish Bagpack" amount="1499" />
        <button style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }}  className='absolute px-5 bg-[#385154]  text-white rounded-full py-3 text-sm md:bottom-6 left-[25%] -bottom-[5%] md:left-[44%] transition-all duration-300 ease-in-out hover:bg-[#000000da] hover:text-white hover:scale-105'> View All Our Products</button>
      </div>
    </div>
  )
}

export default LatestProduct