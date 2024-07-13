import React from 'react'

const BuyButton = ({ name, icon, theme }) => {
    return (
        <>
            <div className={theme == 'dark' ? 'select-none w-full sm:w-[40vw] md:w-[30vw] lg:w-[17vw] py-5 px-6 h-[5vh] rounded-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 ease-in-out bg-black hover:scale-105' : 'select-none w-full sm:w-[40vw] md:w-[30vw] lg:w-[17vw] py-5 px-6 h-[5vh] rounded-md flex items-center justify-center gap-2 cursor-pointer transition-all text-black duration-150 border-[1px] border-black ease-in-out hover:scale-105'}>
                <button className={theme == 'dark' ? 'text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.3vw] text-white font-semibold' : 'text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.3vw] text-black font-semibold'}>
                    {name}
                </button>
                {icon && <span className='font-semibold flex items-center justify-center mt-[0.1rem]'>{icon}</span>}
            </div>
        </>
    )
}

export default BuyButton