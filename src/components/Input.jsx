import React from 'react'


const Input = ({placeholder,icon,field}) => {
    return (
        <>
            <div class="w-full h-[6vh] rounded-md px-2 bg-gray-200 flex items-center gap-2 ">
                <input type={field} name="username" class=" outline-none w-full h-full bg-inherit px-2 text-[5vw] md:text-[1.3vw]" placeholder={placeholder} required  ></input>
                {icon}
            </div>
        </>
    )
}

export default Input