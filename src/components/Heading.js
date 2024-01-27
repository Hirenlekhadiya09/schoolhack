import React from 'react'
import { Date,  Hamburger, Paraphrase, Typing } from '../assets/icons/AllIcon'
import LeftSide from '../assets/images/leftside.png'
import Center from '../assets/images/main-screen.png'
import RightSide from '../assets/images/rightside.png'
import ToyImage from '../assets/images/toy-image.png'
import { useNavigate } from 'react-router-dom'
import AppStore from "../assets/icons/appstore.png"
import PlayStore from "../assets/icons/playstore.png"

const detail = [
    {
        icons: <Hamburger />,
        title: "Write an essay",
        dis: "With 3 easy steps our chat gpt3 powered API can write you an essay on any subject in seconds which you can use for reference",

    },
    {
        icons: <Paraphrase />,
        title: "Paraphrase",
        dis: "The app's powerful paraphrase API allows students to quickly and easily rephrase their writing, making it more unique and original. ",

    },
    {
        icons: <Typing />,
        title: "Ask any question",
        dis: "School Hack can answer any general query you would like to ask your teacher giving you results in seconds.",

    },
    {
        icons: <Date />,
        title: "Plagiarism tool  ",
        dis: "School Hack's powerful plagiarism tool allows users to check for plagiarized content in their material.",

    },
]
const Heading = () => {

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
    const navigate = useNavigate()
    return (
        <div className='max-w-[1582px] mx-auto z-[2] relative'>
            <div className='sm:min-h-[calc(100vh_-_210px)]  min-h-[calc(100vh_-_245px)] flex items-center justify-center'>
                <div className='px-4'>
                    <h1 className='font-[900] max-w-[1100px] mx-auto mb-[28px] sm:mb-[39px] text-center font-Avenir md:leading-[62px] lg:leading-[81px] text-[28px] sm:text-[32px] md:text-[44px] lg:text-[54px] uppercase text-white'>Made for students of all ages and levels of education</h1>
                    <span className='text-[14px] md:text-[21px] block text-center sm:leading-[27px] font-normal text-white'>A powerful and innovative app that makes essay writing easy with a click of a button. </span>
                    <div className='flex items-center justify-center gap-6 my-20'>

                        <button onClick={() => openInNewTab('https://apps.apple.com/app/apple-store/id1667172863')}  className='focus:outline-none hover:bg-black transition-all duration-300 rounded-lg max-w-[232px] flex max-h-[84px] w-full h-full'>
                           <img src={AppStore} className='w-full'/>
                            {/* <AppStore className="hover:bg-black fill-none  transition-all duration-300 rounded-lg"/> */}
                        </button>
                      

                        <button onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.meets.schoolhack&pli=1')}  className='focus:outline-none hover:bg-black transition-all duration-300 rounded-lg max-w-[232px] flex max-h-[84px] w-full h-full'>
                        <img src={PlayStore} className='w-full'/>
                            {/* <GooglePlay className="hover:bg-black fill-none  transition-all duration-300 rounded-lg"/> */}
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-6xl px-4 mx-auto 2xl:max-w-full mobile-app z-[2] relative justify-center items-center md:items-end '>

                <img src={ToyImage} alt="toy-image max-w-[28%] md:max-w-[90%] mx-auto" />
                <div className='grid grid-cols-3 items-end  max-w-[1222px]  my-14 md:my-0'>
                    <img src={LeftSide} className='translate-x-[40px] md:translate-x-[98px] max-w-[90%]' alt="mobile-screen" />
                    <img src={Center} className='z-[2]' alt="mobile-screen" />
                    <img src={RightSide} className='translate-x-[-40px] md:translate-x-[-98px] max-w-[90%]' alt="mobile-screen" />
                </div>
                <img src={ToyImage} alt="toy-image" className='toy-image max-w-[90%] mx-auto' />
            </div>
            <div className='max-w-6xl 2xl:max-w-full mx-auto  grid sm:grid-cols-2 px-4 xl:grid-cols-4 gap-[33px] py-[60px] md:pb-[131px] md:pt-[181px]'>
                {
                    detail.map((item, index) => {
                        return (
                            <div className='whiteborder'>

                            <div key={index} className='moduleborder rounded-[30px] flex flex-col items-center text-white text-center px-4 2xl:px-[27px] py-[32px]   2xl:py-[55px]'>
                                {item.icons}
                                <h4 className='text-[18px] mt-[27px] mb-4 2xl:mb-[23px] text-white  leading-[22px] font-bold text-center  uppercase'>{item.title}</h4>
                                <span className='text-[12px] 2xl:text-[16px] leading-[20px] 2xl:leading-[27px] text-white  font-normal'>{item.dis}</span>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Heading