import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { RiAddFill } from "@remixicon/react";
import { RiSubtractFill } from "@remixicon/react";
import { RiShoppingCart2Line } from "@remixicon/react";
import { RiShoppingBagLine } from "@remixicon/react";
import BuyButton from '../components/BuyButton';
import productData from "../assets/productData.json"
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const ProductDets = () => {
    const params = useParams()
    const [quantity, setQuantity] = useState(1)

    const handleQunatityAdd = () => {
        setQuantity(quantity + 1)
    }
    const handleQunatitySubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Navbar />
            {
                productData.map((currentElem) => {
                    if (currentElem.id == params.id) {
                        return (
                            <div key={currentElem.id} className='w-full bg-[#D3DEDC] min-h-screen flex flex-col lg:flex-row text-[#262b45] select-none'>
                                <div className='w-full lg:w-[50%] h-full px-4 pb-4 lg:px-16 lg:py-[2vw]'>
                                    <div style={{ backgroundColor: currentElem.bgColor }} className='w-full h-[60vh] lg:h-[80vh] flex items-center justify-center rounded-md'>
                                        <img src={`/${currentElem.image}`} alt="" className='w-full lg:w-[80%] h-full lg:h-[80%] object-contain' />
                                    </div>
                                </div>

                                <div className='w-full lg:w-[50%] px-4 pb-4 lg:pr-16 lg:py-[2vw] flex flex-col gap-2'>
                                    <h1 className='text-[5vw] lg:text-[2vw] font-semibold'>{`${currentElem.title} "Bagpack ${params.id}"`}</h1>
                                    <div className='flex flex-col gap-1'>
                                        {currentElem.discount && (
                                            <div className='flex gap-2 items-center '>
                                                <h1 className='opacity-70 line-through text-[4vw] lg:text-[1.5vw]'>M.R.P. ₹{currentElem.originalPrice}</h1>
                                                <div style={{ backgroundColor: currentElem.textColor }} className='p-[2vw] lg:p-[1vw] w-[12vw]  lg:w-[3.5vw] h-[4vh] lg:h-[3.5vh] bg-slate-300 rounded-full flex items-center justify-center'>
                                                    <h6 className='text-[3vw] lg:text-[1.1vw] text-white'>-{currentElem.discount}</h6>
                                                </div>
                                            </div>
                                        )}
                                        <div className='flex items-center gap-1 border-b-[1px] border-[#9694949d]'>
                                            <h1 className='text-[4vw] lg:text-[1.5vw] font-semibold '>₹ {`${currentElem.price}`}</h1>
                                            <span className='text-xs opacity-70 font-semibold'>Inclusive of all taxes</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <h3 className='font-semibold'>Product Information</h3>
                                        <p className='text-[3vw] lg:text-[1.1vw] opacity-90'>{currentElem.description}.</p>
                                    </div>
                                    <div className='flex rounded-md border-[1px] border-[#9694949d] w-[20vw] lg:w-[5vw] h-[5vh] items-center mt-1'>
                                        <RiSubtractFill onClick={handleQunatitySubtract} className='w-[50%] h-[50%] font-bold cursor-pointer hover:scale-110' />
                                        <h1 className='font-semibold select-none'>{quantity}</h1>
                                        <RiAddFill onClick={handleQunatityAdd} className='w-[50%] h-[50%] font-bold cursor-pointer hover:scale-110' />
                                    </div>
                                    <div className='flex gap-[5vw] lg:gap-[2vw] mt-1'>
                                        <BuyButton name="Add To Cart" icon={<RiShoppingCart2Line className='w-[80%] h-[80%] font-bold ' />} theme="light" />
                                        <BuyButton name="Buy Now" icon={<RiShoppingBagLine className='w-[80%] h-[80%] font-bold text-white' />} theme="dark" />
                                    </div>
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h3 className='font-semibold capitalize select-none'>Material Care</h3>
                                        <p className='text-[3vw] lg:text-[1.1vw] opacity-90'>Consider a monthly routine of a quick wipe-down or brushing. If you used water to wash your fabric pack, hang your pack to dry completely before putting it into action again. use cool water with a soft damp cloth to wipe down the interior and exterior of your pack, Never use bleach or harsh detergents on your bag. And remember to avoid any suede or leather trim on your pack as these areas could discolor if they get wet.</p>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h3 className='font-semibold capitalize'>Manufactured And Marketed By</h3>
                                        <p className='text-[3vw] lg:text-[1.1vw] opacity-90'>VIP Industries Limited, DGP House, 88C, Old Prabhadevi Road, Prabhadevi, Mumbai 400025. India</p>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h3 className='font-semibold capitalize'>Return Policy</h3>
                                        <p className='text-[3vw] lg:text-[1.1vw] opacity-90'>1. We're here for you: Report any damaged shipment within 24 hours via email: talk2me@scatch.co.in, and we'll swiftly assist you.</p>
                                        <p className='text-[3vw] lg:text-[1.1vw] opacity-90'>2. Hassle-free returns: Enjoy a 3-day return window, just ensure your item is in top shape with original packaging and receipt.</p>
                                        <p className='text-[3vw] lg:text-[1.1vw] opacity-90'>3. Reach out anytime at 022-41724444: Initiate returns through 'My Order' or contact us through 'My Order' or contact us via email or phone for guidance.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }

        </>
    )
}

export default ProductDets