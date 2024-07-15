import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [priceRange, setPriceRange] = useState('');
    const [newCollection, setNewCollection] = useState(false);
    const [allProduct, setAllProduct] = useState(true);
    const [discount, setDiscount] = useState(false);
    const [popular, setPopular] = useState(false);

    const handlePriceRangeChange = (e) => {
        setPriceRange(e.target.value);
        onFilterChange({ priceRange: e.target.value }); 
    };

    const handleNewCollection = (e) => {
        setNewCollection(true);
        setDiscount(false)
        setPopular(false)
        setAllProduct(false)
        onFilterChange({ newCollection: true }); 
    };

    const handleAllProducts = (e) => {
        setAllProduct(true);
        setNewCollection(false);
        setDiscount(false)
        setPopular(false)
        onFilterChange({ allProduct: true }); 
    };

    const handleDiscount = (e) => {
        setDiscount(true)
        setAllProduct(false);
        setNewCollection(false);
        setPopular(false)
        onFilterChange({ discount: true }); 
    };

    const handlePopular = (e) => {
        setPopular(true)
        setDiscount(false)
        setAllProduct(false);
        setNewCollection(false);
        onFilterChange({ popular: true }); 
    };

    return (
        <>
            <h1 className='text-lg font-bold uppercase '>Filter By</h1>
            <div className="flex flex-col mt-4">
                <h1 className={newCollection ? "block w-fit mb-2 font-semibold cursor-pointer" : "block w-fit mb-2 hover:font-semibold cursor-pointer"} onClick={handleNewCollection} >New Collection</h1>
                <h1 className={allProduct ? "block w-fit mb-2 font-semibold cursor-pointer" : "block w-fit mb-2 hover:font-semibold cursor-pointer"} onClick={handleAllProducts} >All Products</h1>
                <h1 className={discount ? "block w-fit mb-2 font-semibold cursor-pointer" : "block w-fit mb-2 hover:font-semibold cursor-pointer"} onClick={handleDiscount}  >Discounted Products</h1>
                <h1 className={popular ? "block w-fit mb-2 font-semibold cursor-pointer" : "block w-fit mb-2 hover:font-semibold cursor-pointer"} onClick={handlePopular} >Popular Products</h1>
            </div>
            <div className="flex flex-col mt-4 ">
               <h1 className='text-base md:text-lg lg:text-xl font-semibold'>Price</h1>
               <div className='flex gap-2 items-center mt-2 md:mt-3 lg:mt-4'>
                   <input 
                       type="radio"  
                       name="priceRange" 
                       value="bellow1500" 
                       checked={priceRange === 'bellow1500'} 
                       onChange={handlePriceRangeChange} 
                   />
                   <h6>Below ₹1500</h6>
               </div>
               <div className='flex gap-2 items-center mt-2 md:mt-3 lg:mt-4'>
                   <input 
                       type="radio"  
                       name="priceRange" 
                       value="1500-2500" 
                       checked={priceRange === '1500-2500'} 
                       onChange={handlePriceRangeChange} 
                   />
                   <h6>₹1500-₹2500</h6>
               </div>
               <div className='flex gap-2 items-center mt-2 md:mt-3 lg:mt-4'>
                   <input 
                       type="radio"  
                       name="priceRange" 
                       value="2000-3000" 
                       checked={priceRange === '2000-3000'} 
                       onChange={handlePriceRangeChange} 
                   />
                   <h6>₹2000-₹3000</h6>
               </div>
               <div className='flex gap-2 items-center mt-2 md:mt-3 lg:mt-4'>
                   <input 
                       type="radio"  
                       name="priceRange" 
                       value="3000-4000" 
                       checked={priceRange === '3000-4000'} 
                       onChange={handlePriceRangeChange} 
                   />
                   <h6>₹3000-₹4000</h6>
               </div>
            </div>
        </>
    );
};

export default Filter;