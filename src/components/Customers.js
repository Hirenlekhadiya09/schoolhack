import React from 'react'
import { StarIcon } from '../assets/icons/AllIcon'
import Img1 from '../assets/images/Ellipse 1 (1).png'
import Img2 from '../assets/images/Ellipse 2 (1).png'
import Img3 from '../assets/images/Ellipse 3 (1).png'
import Img4 from '../assets/images/Ellipse 4 (1).png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const reviews = [
    {
        id: 1,
        title: "Ashley Wilson",
        rating: 3,
        img: Img1,
        content: ` I've been using School Hack for a few weeks now and it's like having my own personal study assistant. The Ask anything feature is so helpful and it's made a huge difference in my study habits. 5 stars!`,
    },
    {
        id: 2,
        title: "Joshua Perez",
        rating: 3,
        img: Img2,
        content: " As a college student, I need all the help I can get staying on top of my coursework. School Hack is like having my own personal tutor, the Write Essay feature is so helpful and it's helped me stay organized and stay on top of my assignments.",
    },
    {
        id: 3,
        title: "Emily Nguyen",
        rating: 3,
        img: Img3,
        content: "As a college student, I need all the help I can get staying on top of my coursework. School Hack is like having my own personal tutor, the Write Essay feature is so helpful and it's helped me stay organized and stay on top of my assignments.",
    },
    {
        id: 4,
        title: "Mark Thompson",
        rating: 3,
        img: Img4,
        content: "School Hack is a game changer for me. It's like having a personal assistant that helps me stay organized and on top of my work. Highly recommend!",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const options = {
    stagePadding: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    autoHeight: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            margin: 25,
        },
        400: {
            items: 1,
            margin: 25,
        },
        600: {
            items: 2,
            margin: 25,
        },
        991: {
            items: 2,
            margin: 25,
        },
        1000: {
            items: 3,
            margin: 20,
            // stagePadding: 10,
        },
        1400: {
            items: 4,
            margin: 30,
            // stagePadding: 10,
        }
    },
};


const Customers = () => {
    return (
        <div className='mt-[80px] md:mt-0 lg:mt-[380px]'>
            <div className='max-w-6xl 2xl:max-w-[1440px] px-4  md:flex md:gap-3 items-center mx-auto'>
                <div>
                    <h2 className=' text-[32px] sm:text-[40px] md:leading-[47px] font-[900] text-white'>

                        200k+ <br /> Customers Love <br /> School Hack
                    </h2>
                </div>
                <div className='flex flex-1 justify-center'>
                    <p className='text-[16] md:text-[22px] leading-[27px] justify-center flex text-white mx-auto max-w-[721px] '>The ultimate students companion. Built with all the tools you need to be on top of your assignments</p>
                </div>
            </div>

            <div className='mt-[40px] px-4 md:mt-[127px] max-w-6xl 2xl:max-w-[1440px]  mx-auto'>
                <OwlCarousel className='owl-theme ' {...options} >
                    {
                        reviews.map((item, index) => {
                            return (
                                <div className='whiteborder h-full'>

                                <div key={item.id} className='moduleborder h-full rounded-[30px] flex flex-col items-center text-white text-center px-4 sm:px-[27px] py-[32px] sm:py-[25px]'>
                                    <div className='2xl:w-[76px] 2xl:h-[76px] w-[60px] h-[60px] rounded-full '>
                                        <img src={item.img} alt={item.img} />
                                    </div>
                                    <h4 className='2xl:text-[18px] text-[14px] mt-[17px] mb-[7px] text-white  leading-[22px] font-bold text-center  uppercase'>{item.title}</h4>
                                    <div className="flex items-center mb-[10px] 2xl:mb-[18px] gap-[5px]">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    item.rating > rating ? 'fill-[#FF9953]' : 'fill-[#D9D9D9]',
                                                    '2xl:h-5 2xl:w-5 w-4 h-4 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <span className='text-[12px] 2xl:text-[16px] 2xl:leading-[27px] text-white  font-normal'>{item.content}</span>
                                </div>
                                </div>

                            )
                        })

                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Customers