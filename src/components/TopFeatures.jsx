import React from 'react'
import Marquee from './Marquee'
import Cards from './Cards'

const TopFeatures = () => {
    return (
        <div className='w-full min-h-full bg-[#D3DEDC]'>
            <div className='w-full h-[20vh] flex overflow-x-auto'>
                <Marquee />
            </div>
            <div className='w-full px-[4vw] flex flex-col gap-4 lg:h-[80vh] lg:gap-0'>
                <div className='w-full h-[30%] pt-16 flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Our Awesome Features</h1>
                    <p className='text-center px-4 md:px-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, quae.</p>
                </div>
                <div className='w-full h-[70%] flex flex-wrap items-center justify-center gap-4 md:gap-[5vw]'>
                    <Cards feature="Smart Zippers" theme="light" icon="zipper.png" />
                    <Cards feature="Water Resistant" theme="dark" icon="water-resistant.png"/>
                    <Cards feature="Anti Theft Lock" theme="light" icon="lock.png"/>
                </div>
            </div>
        </div>
    )
}

export default TopFeatures