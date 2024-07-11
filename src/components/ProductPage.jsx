import React, { useState } from 'react';
import Filter from './Filter';
import ProductPageCards from './ProductPageCards';
import Footer from './Footer';

const ProductPage = () => {
  const [filterData, setFilterData] = useState({}); 

  const handleFilterChange = (data) => {
    setFilterData(data); 
  };

  return (
    <><div className='w-full min-h-screen bg-[#D3DEDC] flex flex-col md:flex-row gap-5 p-[6vw] md:px-[0vw] lg:pl-[4vw] py-[2vw] border-t-[2px] border-[#afc0bd]'>
    <div className='w-full md:w-[25%] lg:w-[15%] flex h-auto md:h-screen flex-col items-start'>
      <Filter onFilterChange={handleFilterChange} />
    </div>
    <div className='w-full md:w-[75%] lg:w-[85%] flex gap-4 flex-wrap '>
      <ProductPageCards filterData={filterData} /> 
    </div>
  </div>
    <Footer/>
    </>
  );
};

export default ProductPage;