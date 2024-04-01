'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Kenya = () => {
    return (
        <div className='flex flex-col justify-center items-center align-middle pt-16 h-screen'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-2'>
                KENYA
            </h1>

            {/* underline */}
            <div className='border border-primary w-full' />

            {/* Details */}
            <div className='pt-5 flex flex-col md:flex-row justify-center align-middle items-center'>

                {/* Left */}
                <div className='md:w-1/3 w-full pr-0 md:pr-5'>
                    <img
                        src='/kenya.jpg'
                        alt='kenya'
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Center */}
                <div>
                    <div className='md:w-1/3 w-full pr-0 md:pr-5'>
                        <h1 className='font-bold text-2xl pb-2'>
                            Recent Publications of Kenya
                        </h1>

                        <Link
                            href=''
                            className='hover:underline'
                        >
                            Kenya Publications 001
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
                            <h1 className='font-bold text-lg py-2'>
                                Administrative Contacts
                            </h1>
                            <p>
                                Name: Meshack Muga <br />
                                Telephone: +254 722237193 <br />
                                Email: meshackmuga@hotmail.com
                            </p>
                        </div>

                        <div className='flex flex-col justify-start align-middle items-start'>
                            <h1 className='font-bold text-lg py-2'>
                                Private Sector
                            </h1>

                            <p>
                                Name: Waheed Chaudhry <br />
                                Telephone: +254 722531025 <br />
                                Email: waheedc@hotmail.com
                            </p>
                        </div>

                        <div className='flex flex-col justify-start align-middle items-start'>
                            <h1 className='font-bold text-lg py-2'>
                                NGARA Executive Board
                            </h1>

                            <p>
                                Name: Dr. Ben Chikamai <br />
                                Telephone:  +254 722756483 <br />
                                Email: bnchikamai@gmail.com
                            </p>

                            <p className='pt-3'>
                                Name: Ms. Sheila Mbiru <br />
                                Telephone: +254 721527994 <br />
                                Email: sheilambiru@gmail.com
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Kenya
