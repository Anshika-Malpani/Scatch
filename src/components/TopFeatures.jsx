import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Marquee from './Marquee'
import Cards from './Cards'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);

const TopFeatures = () => {
    const marqueeRef = useRef(null);
    const headingRef = useRef(null);
    const subHeadingRef = useRef(null);

    // useEffect(() => {
    //     const marqueeElements = marqueeRef.current.children;
    
    //     const animateMarquee = () => {
    //         const isMobile = window.innerWidth <= 768;
    //         gsap.to(marqueeElements, {
    //             xPercent: -100,
    //             repeat: -1,
    //             duration: isMobile ? 10 : 10,
    //             ease: "power1.inOut",
    //             overwrite: true,
    //         });
    //     };
    
    //     animateMarquee();
    // }, []);
    

    useGSAP(()=>{
        gsap.from(headingRef.current, {
            opacity: 0,
            y: -50,
            duration: 2,
            delay:0.5,
            ease: "power3.out",
            scrollTrigger:{
                trigger: ".scroller",
                start: "top center",
                end: "bottom center",
            }
        });
        gsap.from(subHeadingRef.current, {
            opacity: 0,
            y: -50,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
                trigger: ".scroller",
                start: "top center",
                end: "bottom center",
            }
        });
    })

    

    
    return (
        <div className='w-full min-h-full bg-[#D3DEDC] '>
            <div className='marquee-container'>
            <div ref={marqueeRef} className='marquee w-full h-[15vh] md:h-[20vh] flex overflow-x-auto'>
                <Marquee />
                <Marquee />
                <Marquee />
            </div>
            </div>
            <div className='w-full px-[4vw] flex flex-col gap-4 lg:h-[80vh] lg:gap-0 scroller'>
                <div className='w-full h-[30%] pt-10 md:pt-16 flex flex-col items-center justify-center gap-2'>
                    <h1 ref={headingRef} className='text-[8.3vw] md:text-5xl font-[1000] text-center'>Our Awesome Features</h1>
                    <p ref={subHeadingRef} className='text-center px-4 md:px-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, quae.</p>
                </div>
                <div className='card-container w-full h-[70%] flex flex-wrap items-center justify-center gap-4 md:gap-[5vw]'>
                    <Cards  feature="Smart Zippers" theme="light" icon="zipper.png" />
                    <Cards  feature="Water Resistant" theme="dark" icon="water-resistant.png" />
                    <Cards  feature="Anti Theft Lock" theme="light" icon="lock.png" />
                </div>
            </div>
        </div>
    )
}

export default TopFeatures