import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='w-full  flex flex-col gap-4 px-[5vw] py-[3vw] bg-[#D3DEDC]  border-t-[2px] border-[#afc0bd] md:px-[20vw] md:py-[2vw]'>
        <h1 className='text-[9vw] font-semibold md:text-[2.5vw] Consolas uppercase'>About Us</h1>
        <h1 className='text-[8vw] font-semibold md:text-[2.5vw] '>Welcome to the Scatch Community</h1>
        <div className='flex flex-col gap-8 md:gap-5'>
          <p className='text-[4.2vw] md:text-[1.4vw] text-justify tracking-tight'>As a small, slightly overworked but highly enthusiastic team of dreamers and doers, we are DELIGHTED that you chose us!</p>
          <p className='text-[4.2vw] md:text-[1.4vw] text-justify tracking-tight'>When it comes to bags, we know that there are a multitude of choices in the market. But we wish to assure you that after your experience with us, the next time you're looking for something reliable, sturdy and stylish - you will still think of us. </p>
          <p className='text-[4.2vw] md:text-[1.4vw] text-justify tracking-tight'>All our bags are thoughtfully designed and carefully crafted in India by the local communities of Coimbatore, Calicut and Bangalore. We are dedicated to truly understanding the customer experience and incorporating the insights we gather into our design. This is why we urge you to follow us on our Social Media pages, leave reviews, engage with us and help us create better products.
          </p>
          <p className='text-[4.2vw] md:text-[1.4vw] text-justify tracking-tight'>Wait! Before you crumple and throw away this paper and start using our bags, please take a minute and read the next few steps. </p>
        </div>
      </div>
    </>
  )
}

export default About