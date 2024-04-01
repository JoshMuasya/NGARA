'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Tanzania = () => {
    return (
        <div className='flex flex-col justify-center items-center align-middle pt-16 h-screen'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-2'>
                TANZANIA
            </h1>

            {/* underline */}
            <div className='border border-primary w-full' />

            {/* Details */}
            <div className='pt-5 flex flex-col md:flex-row justify-center align-middle items-center'>

                {/* Left */}
                <div className='md:w-1/3 w-full pr-0 md:pr-5'>
                    <img
                        src='/tanzania.jpg'
                        alt='tanzania'
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Center */}
                <div>
                    <div className='md:w-1/3 w-full pr-0 md:pr-5'>
                        <h1 className='font-bold text-2xl pb-2'>
                            Recent Publications of Tanzania
                        </h1>

                        <Link
                            href=''
                            className='hover:underline'
                        >
                            Tanzania Publications 001
                        </Link>

                        {/* Button */}
                        <div className='flex justify-start w-full'>
                            <Link
                                href=''
                                className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                            >
                                View More
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className='md:w-1/3 w-full'>
                    {/* Title */}
                    <h1 className='font-bold text-2xl pb-2'>
                        Country Contacts
                    </h1>

                    {/* Underline */}
                    <div className='border border-black' />

                    {/* Contacts */}
                    <div className='flex flex-col justify-center align-middle items-start'>
                        <div className='flex flex-col justify-start align-middle items-start'>
                            
                            <p>
                                Name: Chelestino Peter Balama (PhD) <br />

                                Principal Research Scientist <br />

                                Tanzania Forestry Research Institute | P.O. Box 1854, Morogoro, Tanzania <br />

                                Office: +255-23-293 5174| Mobile: +255-767 404873/ 784404873 <br />

                                E-mail: chelestino.balama@tafori.or.tz  | balamapc@yahoo.co.uk
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tanzania
