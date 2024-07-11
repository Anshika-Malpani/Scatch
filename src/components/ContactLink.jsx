import React from 'react'

const ContactLink = ({icon}) => {
  return (
    <>
    <div className='w-[11vw] h-[11vw] rounded-full bg-white flex items-center justify-center md:w-[3.5vw] md:h-[3.5vw]'>
        {icon}
    </div>
    </>
  )
}

export default ContactLink