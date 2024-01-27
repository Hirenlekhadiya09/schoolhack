import React from 'react'
import Images from "../assets/images/student.png"
import { Logo } from '../assets/icons/AllIcon'


const Student = () => {
    return (
        <div>
            <img src={Images} />
            <div className='bg-white pb-4'>

                <div className='md:max-w-xl lg:max-w-5xl 2xl:max-w-[1440px] px-4 md:px-0 md:translate-y-[-130px] lg:mt-[-105px] mx-auto bg-white'>
                    <div className='flex justify-center translate-y-[-50px]'>

                        <Logo />
                    </div>
                    <div className='max-w-[866px]  md:text-center mx-auto'> 


                        <h3 className='font-bold leading-[36px] sm:leading-[48px] md:text-center mb-[10px] md:mb-[42px] uppercase text-black text-[28px] sm:text-[40px]'>Made for Students of All Ages</h3>
                        <p className='sm:text-[18px] leading-[27px] font-normal '>
                            Write an essay on any topic and email it in any file format, making it easy to edit and share work. The app can email essays in any file format, making it easy to edit and share work.
                        </p>
                        <h2 className='text-[28px] sm:text-[48px] mt-[30px] md:mt-[82px] text-border max-w-[672px] mx-auto font-[900] leading-[47px] font-Avenir'>
                            Save time on your assignment and papers
                        </h2>
                    </div> 
                    <h2 className='font-[900] mt-[51px] font-Avenir max-w-[810px] text-border leading-[36px] sm:leading-[47px] mx-auto md:text-center text-[28px] sm:text-[40px]'>Produce original work without the risk of plagiarism</h2>
                    <h2 className='font-[900] mt-[51px] text-border leading-[36px] sm:leading-[47px] max-w-[1036px] mx-auto md:text-center text-[28px] sm:text-[48px] font-Avenir'>Paraprase any text to produce content that best fit your needs</h2>
                </div>
            </div>
        </div>
    )
}

export default Student