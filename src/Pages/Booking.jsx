import React from 'react';
import { useParams } from 'react-router-dom';
import Block from '../Component/Block/Block';
import "./Booking.css";
import { useNavigate } from 'react-router-dom'

import { AiFillHeart } from 'react-icons/ai';

function Booking() {

    const obj = [
        {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        },
        {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        },    {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        },
        {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        },
        {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        },
        {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        },    {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        },
        {
            id: 1,
            slot: 1,
        },
        {
            id: 2,
            slot: 2,
        },
        {
            id: 3,
            slot: 3,
        },
        {
            id: 11,
            slot: 11,
        },
        {
            id: 22,
            slot: 12,
        },
        {
            id: 33,
            slot: 13,
        }
    ]

    let { locationId } = useParams();
    const history = useNavigate();
    var day = ['MON', 'TUE', 'WED', 'THRUS', 'FRI', 'SAT', 'SUN']
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var dy = day[today.getDay() - 1]
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    return (
        <div>
            <div className='flex justify-between px-10 py-3 bg-slate-300 rounded-lg'>
                <div>
                    <h1 className='text-3xl my-1 underline'>{locationId}</h1>
                    <div className='flex items-center gap-1'>
                        <AiFillHeart />
                        <p className='font-bold text-sm'>59%</p>
                    </div>
                </div>

                <div>
                    <p className='underline tracking-widest'>Owner</p>

                    <div className='flex gap-2'>
                        <div className='p-1'>
                            <img className='w-10 rounded-full' src="https://images.news18.com/ibnlive/uploads/2022/09/rishabh-pant-flaunts-the-new-team-india-jersey.jpg" />
                            <p className='text-sm'>Mukesh Bhat</p>
                        </div>

                        <div className='p-1'>
                            <img className='w-10 rounded-full' src="https://images.news18.com/ibnlive/uploads/2022/09/rishabh-pant-flaunts-the-new-team-india-jersey.jpg" />
                            <p className='text-sm'>Munesh Bhat</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-5 m-2'>
                <div className='bg-red-500 rounded-lg p-2 text-xs h-16'>
                    <h1 >{dy}</h1>
                    <h1 className='font-bold text-sm'> {dd}</h1>
                    <h1>{mm}</h1>
                </div>

                <div className='bg-red-500 rounded-lg p-2 text-xs h-16'>
                    <h1 >{dy}</h1>
                    <h1 className='font-bold text-sm'> {dd}</h1>
                    <h1>{mm}</h1>
                </div>

                <div className='bg-red-500 rounded-lg p-2 text-xs h-16'>
                    <h1 >{dy}</h1>
                    <h1 className='font-bold text-sm'> {dd}</h1>
                    <h1>{mm}</h1>
                </div>
            </div>

            <h1 className='text-center text-4xl underline m-5'>SLOT AVAILABLE</h1>

            <div className='flex gap-2 justify-center  flex-wrap'>
                {
                    obj.map((area) =>
                        <Block key={area.id} loc={locationId} slot={area.slot} />
                    )

                }
            </div>
        </div>
    )
}

export default Booking