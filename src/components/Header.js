import React, { useState } from 'react'
import Logo from '../assets/icons/Logo'
import { MenuIcon } from '../assets/icons/AllIcon'

const Header = () => {
    const [menuopne, setMenuOpen] = useState(false)
    console.log("🚀 ~ file: Header.js:7 ~ Header ~ menuopne:", menuopne)
    return (
        <div className='max-w-6xl 2xl:max-w-[1440px] relative z-[3] flex items-center justify-between py-10 mx-auto px-4'>
            <div className=''>

                <Logo />
            </div>
            <div className='flex md:hidden'>
                <button onClick={() => setMenuOpen(!menuopne)} className='outline-none'>
                    <MenuIcon className="text-white fill-white w-[30px] " />
                </button>
            </div>
            <div className='hidden md:flex lg:w-full  gap-5 lg:gap-0 items-center lg:justify-between lg:max-w-[489px]'>
                <div className='flex gap-[30px] lg:gap-[84px]'>
                    <a href='/' className='text-white cursor-pointer hover:text-[#41A5EE] text-[16px] sm:text-[20px] xl:text-[23px] tracking-wide font-[800] leading-[31px] font-Avenir'>
                        Home
                    </a>
                    <a target='blank' href="mailto:info@schoolhack.ai" className='text-white cursor-pointer hover:text-[#41A5EE] text-[16px] sm:text-[20px] xl:text-[23px] tracking-wide font-[400] leading-[31px] font-Avenir'>
                        Contact Us
                    </a>
                </div>
                <button className='text-[#1E1E1E] outline-none focus:outline-none px-4 py-1.5 sm:px-[28px] md:py-4 font-Avenir bg-white text-[14px] md:text-[20px] font-[800] leading-[27px] rounded-full'>
                    Try for Free
                </button>
            </div>

            <div className={`${menuopne ? "h-full" : "h-[0]"} ease-in duration-300 transition flex md:hidden overflow-hidden flex-col bg-black w-full absolute top-[140px] left-0 right-0  gap-5 lg:gap-0 items-center lg:justify-between lg:max-w-[489px]`}>
                <div className='flex flex-col gap-[10px] lg:gap-[84px]'>
                    <a href='#' className='text-white cursor-pointer hover:text-[#41A5EE] text-[16px] sm:text-[20px] xl:text-[23px] tracking-wide font-[800] leading-[31px] font-Avenir'>
                        Home
                    </a>
                    <a href="#" className='text-white cursor-pointer hover:text-[#41A5EE] text-[16px] sm:text-[20px] xl:text-[23px] tracking-wide font-[400] leading-[31px] font-Avenir'>
                        Contact Us
                    </a>
                </div>
                <button className='text-[#1E1E1E] outline-none focus:outline-none px-4 py-1.5 sm:px-[28px] md:py-4 font-Avenir bg-white text-[14px] md:text-[20px] font-[800] leading-[27px] rounded-full'>
                    Try for Free
                </button>
            </div>
        </div>
    )
}

export default Header