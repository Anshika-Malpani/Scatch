import React, { useState } from 'react';
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer"

const Contact = ({ loggedIn }) => {
  const [query, setQuery] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setQuery(true);
  };

  return (
    <>
    <Navbar />
    <div className="w-full  bg-[#D3DEDC] md:pt-[2rem]">
      <div className="w-full min-h-[75vh] flex flex-col  gap-5 pb-5 md:flex-row">
        <div className="w-full  md:w-[50%] h-full flex flex-col pl-7 md:px-16 pt-2 md:pt-20 gap-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          </div>
          <div className='flex flex-col gap-4 w-[85%]'>
            <p className="text-[4vw] text-gray-600 md:text-[1.6vw] font-medium">
             Email, call, or complete the form to learn how Scatch can solve your messaging problem. 
            </p>
            <h6 className='text-[4vw] text-gray-600 md:text-[1.6vw] font-medium'>info@scatch.io</h6>
            <h6 className='text-[4vw] text-gray-600 md:text-[1.6vw] font-medium'>+91-8457561663</h6>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-full flex items-center justify-center ">
          {!query ? (
            <div className="w-[90%] md:w-[70%] h-[82%] bg-[#385154] text-white rounded-[5vw] md:rounded-[2vw] overflow-hidden contactFormDiv">
              <div className='px-5 md:px-6 pt-4 flex flex-col gap-2'>
                <h1 className='text-[7vw] font-semibold md:text-[2vw]'>Get in Touch</h1>
                <h6>You can reach us anytime </h6>
                </div>
              <form onSubmit={handleSubmit} className="contactForm">
                <div className="w-full md:h-[11vh] px-5 md:px-6 pt-4 flex flex-col md:flex-row gap-2 md:gap-5">
                  <div className="w-full md:w-[50%] h-full flex flex-col  gap-1">
                    <input
                      type="text"
                      name="firstName"
                      className="w-full h-[5vh] md:h-[7vh] rounded-lg border-[1px] px-4 border-black outline-none contactField"
                      placeholder='First Name'
                      required
                    />
                  </div>
                  <div className="w-full md:w-[50%] h-full flex flex-col gap-1">
                    <input
                      type="text"
                      name="lastName"
                      className="w-full h-[5vh] md:h-[7vh] rounded-lg border-[1px]  px-4 border-black outline-none contactField"
                      placeholder='Last Name'
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:h-[12vh] px-5 md:px-6 pt-2">
                  <div className="w-full h-full flex flex-col gap-1">
                    <input
                      type="email"
                      name="email"
                      className="w-full h-[5vh] md:h-[7vh] rounded-lg border-[1px]  px-4 border-black outline-none contactField"
                      placeholder='Email'
                      required
                    />
                  </div>
                </div>
                <div className="w-full h-[15vh] px-5 pt-2 md:px-6 md:pt-0">
                  <div className="w-full h-full flex flex-col gap-1">
                    <textarea
                      name="query"
                      cols="20"
                      rows="3"
                      className="rounded-lg w-full h-full px-4 py-2 outline-none text-black border-[1px] border-black contactField"
                      placeholder='How can we help?'
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="w-full h-[10vh] md:h-[15vh] px-5 md:px-6">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Submit"
                    className="mt-6 w-full md:w-full px-2 h-[5vh] md:h-[7vh] bg-[#43856F] rounded-lg text-white text-xl font-semibold point-cursor"
                  />
                </div>
              </form>
            </div>
          ) : (
            <div className="responseDiv">
              <h1 className="bg-[#B8D4CF] p-5 text-center text-xl font-semibold rounded-md">
                Thanks we will be in touch
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;