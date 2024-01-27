import React from 'react'
import { Discode, PlayIcon } from '../assets/icons/AllIcon'
import DiscodeImage from '../assets/images/discodeImage.png'
const Benefits = () => {
    return (
        <div className='grid lg:grid-cols-2'>
            <div className='py-[40px] sm:pt-[127px] px-4 xl:px-[100px] 2xl:px-[40px]  blog-left relative sm:pb-[175px]'>
                <div className='max-w-[639px] mx-auto relative z-[2]'>
                    <h3 className='text-[40px] text-[#F7FBFE] leading-[47px] font-[900] mb-[30px] sm:mb-[52px]'>Surprising <br /> Benefits for All</h3>
                    <p className='text-[18px] text-[#F7FBFE] leading-[27px] font-normal '>School Hack's ability to answer general queries quickly and easily saves students valuable time that they can use to focus on other aspects of their studies.</p>
                    <ul className='list-disc list-inside mt-[30px] sm:mt-[33px]'>
                        <li className='text-[#F7FBFE] mb-[20px] sm:mb-[28px]'>
                            School Hack covers every curriculum on earth from secondary school level up to university this includes college express
                        </li>
                        <li className='text-[#F7FBFE]'>
                            Helps students with essay writing. The app's paraphrase feature makes it easy for students to improve their writing and avoid plagiarism.
                        </li>
                    </ul>
                    <a href='https://discord.com/invite/rvTsuhaeZa' target='blank'>

                    <button  className=' sm:text-[25px] gap-3 mt-[40px] sm:mt-[85px] flex items-center bg-[#5865F2] rounded-full px-5 md:px-[40px] text-white font-semibold leading-[50px] sm:leading-[77px]'><Discode className="w-[28px] sm:w-[40px]"/> Connect Discord</button>
                    </a>
                </div>
            </div>
            <div className='discode-right min-h-[500px]  flex items-center justify-center'>
               
            </div>
        </div>
    )
}

export default Benefits