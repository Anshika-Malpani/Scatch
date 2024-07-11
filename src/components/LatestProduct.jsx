import React from 'react'
import ProductCard from './ProductCard'

const LatestProduct = () => {
  return (
    <div className='w-full h-screen bg-[#D3DEDC] flex flex-col  overflow-hidden'>
      <div className='w-full h-[20vh] flex items-center px-[11.8vw]'>
        <h1 className='text-5xl font-bold'>Discover Our Latest Products</h1>
      </div>
      <div className='w-full h-[80vh] flex gap-10 justify-center relative flex-shrink-0 '>
        <ProductCard bagImage="bag11.png" title="Travelling Bagpack" amount="4999" />
        <ProductCard bagImage="bag2.avif" title="Office Bagpack" amount="1999" />
        <ProductCard bagImage="bag6.avif" title="Stylish Bagpack" amount="1499" />
        <button className='absolute px-5 bg-[#385154]  text-white rounded-full py-3 text-sm bottom-6 left-[44%] transition-all duration-300 ease-in-out hover:bg-[#000000da] hover:text-white hover:scale-105'> View All Our Products</button>
      </div>
    </div>
  )
}

export default LatestProduct