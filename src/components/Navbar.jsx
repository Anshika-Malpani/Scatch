import React, { useEffect, useState } from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import gsap from 'gsap';
import Sidebar from './Sidebar';
import { MdLocalShipping } from "react-icons/md";
import { RiAddFill } from "@remixicon/react";
import { RiSubtractFill } from "@remixicon/react";
import { RiDeleteBinLine } from "react-icons/ri";
import productData from '../assets/productData';
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = ({addToCartId}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [cartItems, setCartItems] = useState([]);


    const handleQuantityAdd = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setQuantity(quantity + 1);
    }

    const handleQuantitySubtract = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const toggleMenu = () => {
        setIsOpen(true);
        let t1 = gsap.timeline();
        t1.from('.sidebar', {
            x: 70,
            duration: 0.2,
            ease: 'power2.out'
        })
        t1.from('.link', {
            y: 60,
            duration: 0.5,
            stagger: 0.2
        })
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleCartToggle = (event) => {
        event.stopPropagation(); 
        setIsCartOpen(prev => !prev); 
        gsap.fromTo(".cart",
            { opacity: isCartOpen ? 1 : 0, maxHeight: isCartOpen ? "82vh" : "0%"}, 
            {
                maxHeight: isCartOpen ? "0%" : "82vh",
                duration: 0.5,
                opacity: isCartOpen ? 0 : 1
            }
        );
    }

   useEffect(()=>{
    productData.map((currentElem)=>{
        if(currentElem.id === addToCartId){
            setCartItems([...cartItems, currentElem]); 
        }
    })
    },[addToCartId])
  

    return (
        <>
            <div className='w-full h-[10vh] md:h-[12vh] flex items-center justify-between bg-[#D3DEDC] p-4 md:p-0 relative'>
                <div className='w-[50%] md:w-[20%] h-full flex items-center pl-4 md:pl-16 gap-1'>
                    <img className='h-[70%] md:h-[48%] object-contain' src="/logo.png" alt="logo.png" />
                    <h1 className='font-extrabold text-[7vw] md:text-[2.5vw] tracking-tighter leading-4 Consolasf'>SCATCH</h1>
                </div>

                <div className={`flex-col hidden md:flex-row md:flex w-full md:w-[60%] h-full items-center justify-center gap-8 pl-[4vw] `}>
                    <NavLink to="/" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Home</NavLink>
                    <NavLink to="/product" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Product</NavLink>
                    <NavLink to="/about" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>About</NavLink>
                    <NavLink to="/contact" className='text-[3vw] md:text-[1.4vw] opacity-70 font-semibold text-[#385154] cursor-pointer transition-all duration-150 ease-in-out hover:border-b-[2px] border-[#385154]'>Contact</NavLink>
                </div>
                <div className='w-[50%] md:w-[20%] h-full flex items-center justify-end pr-4 md:pr-16 relative'>
                    <MdOutlineShoppingBag className='text-[8vw] md:text-[2.8vw] cursor-pointer' onClick={handleCartToggle} />
                    {cartItems.length > 0 && <div className='absolute bg-red-700 w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] rounded-full right-[10%] top-[17%] md:right-[87%] md:top-[26%] flex items-center justify-center'><h1 className='text-white text-xs rounded-full mb-[0.2vw]'>{cartItems.length}</h1></div>}
                    <div className={`w-full h-full md:flex items-center justify-center ${isOpen ? 'flex' : 'hidden'}`}>
                        <Button name="Log in" link="/login" />
                    </div>
                </div>
                <div className='md:hidden flex items-center pr-4 '>
                    <button onClick={toggleMenu}>
                        <FaBars className='text-[7vw]' />
                    </button>
                </div>
                <Sidebar isOpen={isOpen} closeMenu={closeMenu} />
            </div>

            <div style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }} className={`overflow-hidden cart select-none absolute w-[80%] max-h-[85vh] md:w-[22%]  bg-white z-30 right-[2%] top-[8%] md:right-[7%] md:top-[10%] rounded-xl overflow-y-auto flex flex-col  gap-2 opacity-0`}>
                {cartItems.length > 0 && <div className='px-6 pt-3 flex justify-between items-center' >
                    <h1 className='text-xl font-bold '>My Cart <span className='text-lg font-normal'>({cartItems.length})</span></h1>
                </div>}
                <div className='w-full flex flex-col gap-4 items-center '>
                {cartItems.length > 0 ? (
                        <div className='w-[85%] md:w-[90%] border-[1px] border-[#dadada] rounded-xl px-5 pb-4'>
                        {cartItems.map((currentElem)=>{
                            return(
                            <div key={currentElem.id} className='w-full flex gap-4 border-b-[1px] border-[#dadada] py-4 md:py-2 '>
                            <div style={{ backgroundColor: currentElem.bgColor }} className='w-[30%] h-full  rounded-lg'>
                                <div className='w-full h-full '><img className='w-full h-full object-contain aspect-[2/2]' src={`/${currentElem.image}`} alt="" /></div>
                            </div>
                            <div className='w-[70%] flex flex-col gap-1 '>
                                <h1 className='uppercase text-lg font-bold md:text-base'>{currentElem.title}</h1>
                                <div><span className='text-base text-gray-500 md:text-sm'>Size:</span><span className='text-base font-semibold md:text-sm'> Large</span></div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-[#F2F8F7] py-1 px-2 rounded-lg flex gap-2 items-center'>
                                        <MdLocalShipping className='text-[#56a8a7] font-bold' />
                                        <h1 className='text-[#84c4c3] font-bold text-sm md:text-xs tracking-tight'>Free Shipping</h1></div>
                                </div>
                                <div className='flex flex-col md:items-center md:flex-row justify-between  w-full gap-2'>
                                    <div className='flex rounded-md border-[1px] border-[#9694949d] w-[20vw] lg:w-[5vw] h-[4vh] items-center mt-1 no-select'>
                                        <RiSubtractFill onClick={handleQuantitySubtract} className='w-[50%] h-[50%] font-bold cursor-pointer hover:scale-110' />
                                        <h1 className='font-semibold'>{quantity}</h1>
                                        <RiAddFill onClick={handleQuantityAdd} className='w-[50%] h-[50%] font-bold cursor-pointer hover:scale-110' />
                                    </div>
                                    <div className='flex '><h1 className='text-xl font-semibold ml-1 md:text-base select-none'>₹ {currentElem.price}</h1></div>
                                </div>
                                <div className='flex justify-end'><RiDeleteBinLine className=' text-gray-400' /></div>
                            </div>
                        </div>)
                        })}

                    </div>
                    ) : <div className='flex flex-col items-center justify-center py-4 h-full'>
                        <MdOutlineShoppingBag className='text-[8vw] md:text-[3.8vw] text-gray-500'  />
                        <h1 className=' text-xl  md:text-lg text-gray-500'>No Products in the Cart</h1>
                        </div>}
                </div>

                {cartItems.length>0 ?(<div className='w-full flex  justify-center pb-4'><h1 className='text-xl md:text-lg font-[600] text-blue-500 cursor-pointer select-none '>View All Products</h1></div>):null}
            </div>
        </>
    )
}

export default Navbar;
