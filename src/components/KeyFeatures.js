import React, { useEffect } from 'react'
import LeftSide from '../assets/images/main-screen.png'
import Feature2 from '../assets/images/feature2.png'
import Feature3 from '../assets/images/phone3.png'
import Feature4 from '../assets/images/phone4.png'
import Toy3 from '../assets/images/phone3right.png'
import Toy4 from '../assets/images/phone 4 right.png'
import Toy from '../assets/images/toy-image.png'
import Folder from '../assets/images/folder.png'
import { Parallax } from 'react-scroll-parallax'
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const KeyFeatures = () => {


    const handleScroll = (e) => {
        e.preventDefault();
        const delta = e.deltaY;
        const currentPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const newScrollPosition =
            currentPosition + (delta > 0 ? windowHeight : -windowHeight);
        window.scrollTo({ top: newScrollPosition, behavior: "smooth" });
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => {
            document.querySelectorAll(".slick-slide").forEach((slide) => {
                slide.classList.remove("slide-enter", "slide-enter-active", "slide-exit", "slide-exit-active");
            });
            document.querySelector(`[data-index="${newIndex}"]`).classList.add("slide-enter");
            setTimeout(() => {
                document.querySelector(`[data-index="${newIndex}"]`).classList.add("slide-enter-active");
            }, 10);
            document.querySelector(`[data-index="${oldIndex}"]`).classList.add("slide-exit");
        },
        afterChange: (index) => {
            document.querySelector(`[data-index="${index}"]`).classList.remove("slide-enter", "slide-enter-active", "slide-exit", "slide-exit-active");
        }
    };


    const slider = useRef(null);

    function scroll(e) {
        if (slider === null)
            return 0;

        e.wheelDelta > 0 ? (
            slider.current.slickNext()
        ) : (
            slider.current.slickPrev()
        );

    };

    useEffect(() => {
        window.addEventListener("wheel", scroll, true);
        return () => {
            window.removeEventListener("wheel", scroll, true);
        };
    }, []);
    return (
        <div className='pt-[100px] px-4  md:pt-[264px] '>
            <div className='max-w-6xl 2xl:max-w-[1440px] mx-auto'>

                <div className='max-w-[1067px]'>

                    <h2 className='text-[40px] leading-[41px] mb-10 font-[900] uppercase text-white'>Key Features</h2>
                    <p className='text-[20px] leading-[34px] font-normal text-white'>
                        School Hack is packed with innovative features like Ask Anything, AI DocuChat, Smart Media, AI note recorder and more.
                    </p>
                </div>
                <Slider {...settings} ref={slider}>
                    <div data-index="0">
                        <div className='sm:gap-20 lg:sm:gap-20 lg:gap-4 md:grid md:grid-cols-3 mt-[50px] md:h-[90vh] 2xl:h-screen'>

                            <div className='features mx-auto max-w-[300px] lg:max-w-[100%] relative'>
                                <img src={LeftSide} className='z-[2] relative w-full' />
                            </div>
                            <div className='col-span-2 flex flex-row lg:items-center lg:justify-end gap-5 mt-3 md:mt-0 sm:gap-[40px] 2xl:gap-[83px]'>
                                <img src={Toy} className='mx-auto sm:ml-0 lg:mr-0' />
                                <div>
                                    <h2 className='text-white uppercase text-[32px] md:text-[50px] md:leading-[66px] font-bold' >
                                        Ask <br /> Anything
                                    </h2>
                                    <p className='text-white text-[16px] md:text-[20px] md:leading-[34px] md:max-w-[480px] 2xl:max-w-[540px] font-normal'>This is the entry feature of the School hack App. The feature allows students to answer any general queries they would like to ask and get results in seconds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="1">

                        <div className=' sm:gap-20 lg:gap-4 md:grid md:grid-cols-3 mt-[50px] md:h-[90vh] 2xl:h-screen'>

                            <div className='features mx-auto max-w-[300px] lg:max-w-[100%] relative'>
                                <img src={Feature2} className='z-[2] relative w-full' />
                            </div>
                            <div className='col-span-2 flex flex-row lg:items-center lg:justify-end gap-5 mt-3 md:mt-0 sm:gap-[40px] 2xl:gap-[83px]'>
                                <img src={Folder} className='mx-auto sm:ml-0 lg:mr-0' />
                                <div>
                                    <h2 className='text-white uppercase text-[32px] md:text-[50px] md:leading-[66px] font-bold' >
                                        Smart <br /> Docs
                                    </h2>
                                    <p className='text-white text-[16px] md:text-[20px] md:leading-[34px] md:max-w-[480px] 2xl:max-w-[540px] font-normal'>The Docuchat feature allows users to chat with uploaded documents . Users are able to upload PDF, DOCX, EPUB and TXT files. The document manager of the feature allows users to keep their files and organize them into folders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="2">

                        <div className=' sm:gap-20 lg:gap-4 md:grid md:grid-cols-3 mt-[50px] md:h-[90vh] 2xl:h-screen'>

                            <div className='features mx-auto max-w-[300px] lg:max-w-[100%] relative'>
                                <img src={Feature3} className='z-[2] relative w-full' />
                            </div>
                            <div className='col-span-2 flex flex-row lg:items-center lg:justify-end gap-5 mt-3 md:mt-0 sm:gap-[40px] 2xl:gap-[83px]'>
                                <img src={Toy3} className='mx-auto sm:ml-0 lg:mr-0' />
                                <div>
                                    <h2 className='text-white uppercase text-[32px] md:text-[50px] md:leading-[66px] font-bold' >
                                        feeds <br /> 
                                    </h2>
                                    <p className='text-white text-[16px] md:text-[20px] md:leading-[34px] md:max-w-[480px] 2xl:max-w-[540px] font-normal'>Get connected to the School Hack community on your feed. Find out what others are using School Hack for and also share your activities with others.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="3">

                        <div className=' sm:gap-20 lg:gap-4 md:grid md:grid-cols-3 mt-[50px] md:h-[90vh] 2xl:h-screen'>

                            <div className='features mx-auto max-w-[300px] lg:max-w-[100%] relative'>
                                <img src={Feature4} className='z-[2] relative w-full' />
                            </div>
                            <div className='col-span-2 flex flex-row lg:items-center lg:justify-end gap-5 mt-3 md:mt-0 sm:gap-[40px] 2xl:gap-[83px]'>
                                <img src={Toy4} className='mx-auto sm:ml-0 lg:mr-0' />
                                <div>
                                    <h2 className='text-white uppercase text-[32px] md:text-[50px] md:leading-[66px] font-bold' >
                                        smart <br /> media
                                    </h2>
                                    <p className='text-white text-[16px] md:text-[20px] md:leading-[34px] md:max-w-[480px] 2xl:max-w-[540px] font-normal'>This feature allows students to summarize a full video's content by sharing it's link or uploading a video.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div data-index="2">
        <h3>Slide 3</h3>
        <p>Vestibulum id ligula porta felis euismod semper.</p>
      </div> */}
                </Slider>
                {/* <div onWheel={handleScroll} className='sm:flex section gap-4 lg:grid md:grid-cols-3 mt-[91px] h-[90vh] 2xl:h-screen'>

                    <div className='features mx-auto max-w-[300px] lg:max-w-[100%] relative'>
                        <img src={LeftSide} className='z-[2] relative w-full' />
                    </div>
                    <div className='col-span-2 flex flex-row lg:items-center lg:justify-end gap-5 mt-3 md:mt-0 sm:gap-[40px] 2xl:gap-[83px]'>
                        <img src={Toy} className='mx-auto sm:ml-0 lg:mr-0' />
                        <div>
                            <h2 className='text-white uppercase text-[32px] md:text-[50px] md:leading-[66px] font-bold' >
                                Ask <br /> Anything
                            </h2>
                            <p className='text-white text-[16px] md:text-[20px] md:leading-[34px] md:max-w-[480px] 2xl:max-w-[540px] font-normal'>This is the entry feature of the School hack App. The feature allows students to answer any general queries they would like to ask and get results in seconds.</p>
                        </div>
                    </div>
                </div>
                <div onWheel={handleScroll} className='sm:flex section gap-4 lg:grid md:grid-cols-3 mt-[91px] md:h-screen'>

                    <div className='features mx-auto max-w-[300px] lg:max-w-[100%] relative'>
                        <img src={Feature2} className='z-[2] relative w-full' />
                    </div>
                    <div className='col-span-2 flex flex-row lg:items-center lg:justify-end gap-5 mt-3 md:mt-0 sm:gap-[40px] 2xl:gap-[83px]'>
                        <img src={Folder} className='mx-auto sm:ml-0 lg:mr-0' />
                        <div>
                            <h2 className='text-white uppercase text-[32px] md:text-[50px] md:leading-[66px] font-bold' >
                                Smart <br /> Docs
                            </h2>
                            <p className='text-white text-[16px] md:text-[20px] md:leading-[34px] md:max-w-[480px] 2xl:max-w-[540px] font-normal'>orem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century.</p>
                        </div>
                    </div>
                </div> */}



            </div>
        </div>
    )
}

export default KeyFeatures