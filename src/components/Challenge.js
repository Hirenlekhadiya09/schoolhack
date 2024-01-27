import React from 'react'
import ChallengeImage from '../assets/images/challenge.png'
import { FBIcon, InIcon, TwitterIcon } from '../assets/icons/AllIcon'
import AppStore from "../assets/icons/appstore.png"
import PlayStore from "../assets/icons/playstore.png"
const Challenge = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className='px-4 '>

            <div className='max-w-3xl lg:max-w-6xl 2xl:max-w-[1491px] mt-[20px] md:mt-[133px] relative bg-shadow mx-auto border rounded-[40px] lg:rounded-[80px] p-[20px] md:p-[44px] gap-[28px] sm:gap-[40px] lg:gap-[60px] grid grid-cols-1 lg:grid-cols-2'>

                <div className='z-[2]'>
                    <img src={ChallengeImage} />
                </div>
                <div className='flex flex-col justify-center z-[2]'>
                    <h2 className='text-[30px] sm:text-[40px] xl:text-[60px] mb-[24px] md:mb-[52px] xl:mb-[70px] leading-[38px] sm:leading-[50px] xl:leading-[77px] uppercase text-white font-bold'>Ready to <br /> challenge <br /> yourself?</h2>
                    <div className='md:flex justify-between'>

                        <div>
                            <span className='block text-white mb-[14px] text-[14px] sm:text-[22px] font-bold  sm:leading-[27px] '>GET STARTED NOW</span>
                            <span className='font-normal block text-white sm:leading-[27px] text-[14px] sm:text-[22px]'>Download for both IOS and Android</span>
                            <div className='flex items-center mt-[35px] gap-6 '>
                                <button onClick={() => openInNewTab('https://apps.apple.com/app/apple-store/id1667172863')} className='focus:outline-none hover:bg-black transition-all duration-300 rounded-lg max-w-[232px] flex max-h-[84px] w-full h-full'>
                                    <img src={AppStore} className='w-full' />
                                    {/* <AppStore className="hover:bg-black fill-none  transition-all duration-300 rounded-lg"/> */}
                                </button>


                                <button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.meets.schoolhack&pli=1')} className='focus:outline-none hover:bg-black transition-all duration-300 rounded-lg max-w-[232px] flex max-h-[84px] w-full h-full'>
                                    <img src={PlayStore} className='w-full' />
                                    {/* <GooglePlay className="hover:bg-black fill-none  transition-all duration-300 rounded-lg"/> */}
                                </button>
                                {/* <button onClick={() => openInNewTab('https://apps.apple.com/app/apple-store/id1667172863')} className='focus:outline-none max-w-[232px] flex max-h-[84px] w-full h-full'>
                                    <AppStore className="hover:bg-black fill-none  transition-all duration-300 rounded-lg" />
                                </button>
                                <button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.meets.schoolhack&pli=1')} className='focus:outline-none max-w-[232px] max-h-[84px] w-full h-full'>
                                    <GooglePlay className="hover:bg-black fill-none  transition-all duration-300 rounded-lg" />
                                </button> */}
                            </div>
                        </div>
                        <div className='flex md:flex-col mt-6  md:mt-0 md:translate-y-10 max-w-[400px] md:max-w-auto justify-between md:justify-start 2xl:justify-end md:gap-[28px]'>
                            <a href='https://www.linkedin.com/company/school-hack-ai' target='blank'>
                                <InIcon />
                            </a>
                            <a href='' target='blank'>

                                <TwitterIcon />
                            </a>
                            <a target='blank' href='https://www.facebook.com/people/SchoolHack-AI/pfbid0vKy2wrNxcy8dPAVRwh7fCtQz6JH64bPFoBWTYxD6KVsVwWUynM5LC5ZcRXgZjQwTl/'>

                                <FBIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenge