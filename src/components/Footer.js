import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate, useRouteError } from 'react-router-dom'

const Footer = () => {


    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    const navigate = useNavigate()
    return (
        <div className='px-4 flex relative z-[2] flex-col-reverse lg:flex-row gap-0 sm:gap-3 lg:gap-0 items-center max-w-6xl 2xl:max-w-[1300px] pt-3 pb-5 md:pt-[87px] md:pb-[74px] mx-auto lg:justify-between'>
            <div>
                <span className='text-[10px] sm:text-[18px] leading-[18px] sm:leading-[27px] text-white'>

                    © 2023 School Hack. All Rights Reserved
                </span>
            </div>
            <div>
                <ul className='flex space-x-2 sm:space-x-[30px] xl:space-x-[68px]'>
                    <li>
                        <a onClick={() => navigate('/')} className='text-[12px] sm:text-[22px] leading-[18px] sm:leading-[27px] text-white'>
                            Home
                        </a>
                    </li>
                    <li className='cursor-pointer'> 
                    <a onClick={() => navigate('/privacyPolicy')} className='text-[12px] sm:text-[22px] leading-[18px] sm:leading-[27px] text-white'>
                            Privacy Policy
                       </a>
                    </li>
                    <li className='cursor-pointer'>
                        <a onClick={() => navigate('/terms-condition')} className='text-[12px] sm:text-[22px] leading-[18px] sm:leading-[27px] text-white'>
                            Terms & Condition
                        </a>
                    </li>
                    <li className='cursor-pointer'>
                        <a onClick={() => navigate('/contectus')} className='text-[12px] sm:text-[22px] leading-[18px] sm:leading-[27px] text-white'>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer