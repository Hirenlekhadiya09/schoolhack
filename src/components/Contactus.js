import React from 'react'
import HelloImg from '../assets/images/Frame (1).png'
const Contactus = () => {
  return (
   <div className='bg-white relative z-[2] lg:pt-[75px] py-10 lg:pb-[193px]'>
        <div className='max-w-lg lg:max-w-6xl 2xl:max-w-[1440px] mx-auto '>
            <span className='text-[16px] sm:text-[20px] lg:text-[30px] sm:leading-[41px] text-center mt-[44px] block font-Avenir'>Get in Touch</span>
            <h1 className='text-[40px] sm:text-[70px] sm:leading-[140px] lg:text-[120px] lg:leading-[164px] text-center font-bold font-Avenir'>CONTACT US</h1>
            <div className='grid px-4 lg:grid-cols-2 gap-10 lg:gap-32 mt-[60px] lg:mt-[106px] relative '>
                <div className='bg-shadow1'>

                </div>
                <div>
                    <h3 className='text-[24px] sm:text-[28px] md:text-[40px] leading-[55px] font-bold text-center lg:text-left text-[#1E1E1E] font-Avenir'>Need Help? Say Hello</h3>
                    <span  className='sm:text-[18px] md:text-[22px] block mb-[90px] leading-[40px] text-center lg:text-left text-[#1E1E1E] font-Avenir'>Send us an email and we will get back to you.</span>
                    <img src={HelloImg} />
                </div>
                <div>
                    <div className='mb-5 sm:mb-[34px] md:mb-[42px]'>
                        <span className='block text-[16px] sm:text-[20px] ml-2 leading-[27px] text-black mb-[6px] sm:mb-[13px]'>Full Name</span>
                        <input className='bg-white relative z-[2] outline-none w-full focus:outline-none rounded-[10px] text-[17px] px-3 py-3 text-black'/>
                    </div>
                    <div className='mb-5 sm:mb-[34px] md:mb-[42px]'>
                        <span className='block text-[16px] sm:text-[20px] ml-2 leading-[27px] text-black mb-[6px] sm:mb-[13px]'>Email Address</span>
                        <input className='bg-white outline-none relative z-[2] w-full focus:outline-none rounded-[10px] text-[17px] px-3 py-3 text-black'/>
                    </div>
                    <div className='mb-5 sm:mb-[34px] md:mb-[42px]'>
                        <span className='block text-[16px] sm:text-[20px] ml-2 leading-[27px] text-black mb-[6px] sm:mb-[13px]'>This Question is about</span>
                        <select className='bg-white outline-none relative z-[2] w-full focus:outline-none rounded-[10px] text-[17px] px-3 py-3 text-black'>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                    <div className='mb-5 sm:mb-[34px] md:mb-[42px]'>
                        <span className='block text-[16px] sm:text-[20px] ml-2 leading-[27px] text-black mb-[6px] sm:mb-[13px]'>Email Address</span>
                        <textarea rows={5} className='bg-white  resize-none outline-none relative z-[2] w-full focus:outline-none rounded-[10px] text-[17px] px-3 py-3 text-black'/>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Contactus