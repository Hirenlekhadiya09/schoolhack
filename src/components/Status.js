import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from '../Slice/estimateCountSlice';

const Status = () => {

    const dispatch = useDispatch()
    const count = useSelector((state) => state?.counter.count);  

    useEffect(() => {
        axios.get(
            "https://gateway.schoolhack.ai/user/auth/estimated/counts"
        ).then((response) => {
            dispatch(incrementByAmount(response.data))
            return response.data;
        }).catch((ex) => {
            console.log(ex)
        })
    }, [])

    return (
        <div className='bg-white py-[117px] '>
            <div className='max-w-6xl 2xl:max-w-[1439px] mx-auto grid  sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0  sm:divide-x'>
                <div className='flex py-5 lg:py-0 flex-col justify-center items-center'>
                    <CountUp duration="1" className="number text-[#1E1E1E] text-[50px] mb-3 font-bold leading-[61px]" end={count?.users} enableScrollSpy />
                    <span className="text-[#1E1E1E] text-[22px] leading-[27px] font-normal uppercase">Users</span>
                </div>
                <div className='flex py-5 lg:py-0 flex-col justify-center items-center'>
                    <CountUp duration="1" className="number text-[#1E1E1E] text-[50px] mb-3 font-bold leading-[61px]" end={count?.prompts} enableScrollSpy />
                    <span className="text-[#1E1E1E] text-[22px] leading-[27px] font-normal uppercase">Queries made</span>
                </div>
                <div className='flex py-5 lg:py-0 flex-col justify-center items-center'>
                    <CountUp duration="1" className="number text-[#1E1E1E] text-[50px] mb-3 font-bold leading-[61px]" end={1} enableScrollSpy />
                    <span className="text-[#1E1E1E] text-[22px] leading-[27px] font-normal uppercase">Education app</span>
                </div>
            </div>
        </div>
    )
}

export default Status