import React, { useEffect, useState } from 'react'
import { RiAddFill } from "@remixicon/react";
import { filterProducts } from '../filterData/filterProducts.js';
import { NavLink } from 'react-router-dom';

const ProductPageCards = ({ filterData }) => {
    const [product, setProduct] = useState([]);
    const [newCollection, setNewCollection] = useState(filterData.newCollection);
    const [allProduct, setAllProduct] = useState(filterData.allProduct);
    const [discount, setDiscount] = useState(filterData.discount);
    const [popular, setPopular] = useState(filterData.popular);
    const [priceRange, setPriceRange] = useState('');

    useEffect(() => {
        setNewCollection(filterData.newCollection);
    }, [filterData.newCollection]);

    useEffect(() => {
        setPriceRange(filterData.priceRange);
    }, [filterData.priceRange]);

    useEffect(() => {
        setAllProduct(filterData.allProduct);
    }, [filterData.allProduct]);

    useEffect(() => {
        setDiscount(filterData.discount);
    }, [filterData.discount]);

    useEffect(() => {
        setPopular(filterData.popular);
    }, [filterData.popular]);

    useEffect(() => {
        fetchProduct();
    }, [newCollection, discount, popular, allProduct,priceRange]);

    const fetchProduct = () => {
        const data = filterProducts({ newCollection, discount, popular, priceRange });
        setProduct(data);
    };

    return (
        <>
            {
                product.map((currentElem) => {
                    return (
                        <NavLink to={`/productDets/${currentElem.id}`} key={currentElem.id} className='w-full sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] h-[45vh] rounded-md overflow-hidden transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 '>
                            <div style={{ backgroundColor: currentElem.bgColor }} className='w-full h-[70%] flex items-center justify-center relative'>
                                <img className='w-full h-[90%] object-contain aspect-[3/2]' src={currentElem.image} alt="" />
                            </div>
                            <div style={{ backgroundColor: currentElem.panelColor, color: currentElem.textColor }} className='w-full h-[30%] flex justify-between items-center p-4 sm:p-4'>
                                <div>
                                    <h3 className='font-black text-[6vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw]'>{currentElem.title}</h3>
                                    <div className='flex items-center gap-2 sm:gap-4'>
                                        <h4 className='font-black text-[5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw]'>₹{currentElem.price}</h4>
                                        {currentElem.discount && <div style={{ backgroundColor: currentElem.textColor }} className='p-[2vw] sm:p-[1vw] w-[12vw] sm:w-[3.5vw] h-[4vh] sm:h-[3.5vh] bg-slate-300 rounded-full flex items-center justify-center'><h6 className='text-[4vw] sm:text-[1.1vw] text-white'>-{currentElem.discount}</h6></div>}
                                    </div>
                                </div>
                                <div className='w-[12vw] sm:w-[2.9vw] h-[12vw] sm:h-[2.9vw] flex items-center justify-center rounded-full bg-white transition-all ease-in-out duration-150 hover:scale-110'>
                                    <RiAddFill  />
                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </>
    )
}

export default ProductPageCards