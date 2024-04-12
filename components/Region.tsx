'use client'
import { buttonVariants } from '@/components/ui/button'
import { db } from '@/lib/firebase'
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface country {
    countryname: string,
    email: string,
    cname: string,
    phone: string,
    publications: { abstract: string; pdf: string }[];
}

interface Props {
    title: string
    pdf: string
    datepublication: string
    country: string
    abstract: string
    author: string
}

const Region = ({ countryname, email, cname, phone, publications }: country) => {
    const upperCountryname = countryname.toUpperCase()
    const lowerCountryname = countryname.toLowerCase()

    return (
        <div className='flex flex-col pt-20 md:pt-10 h-full pb-10 md:pb-5 px-5 md:justify-center md:align-middle md:items-center w-full'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-2'>
                {upperCountryname}
            </h1>

            {/* underline */}
            <div className='border border-primary w-full' />

            <div className='pt-5 flex flex-col justify-center align-middle items-start w-full'>
                <h1 className='font-bold text-2xl pb-2 pt-5'>
                    Recent Publications
                </h1>

                {publications.length > 0 && (
                    <div className='w-full'>
                        {publications.map((publication, index) => (
                            <div
                                key={index}
                                className='w-full pr-0 md:pr-5 flex flex-col justify-center items-center align-middle'>
                                <Link
                                    href={publication.pdf}
                                    className='hover:underline pb-3 '
                                >
                                    {publication.abstract}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Button
            <div className='flex justify-start w-full py-3'>
                <Link
                    href=''
                    className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                >
                    View More
                </Link>
            </div> */}

            {/* underline */}
            <div className='border border-primary w-full' />

            {/* Details */}
            <div className='pt-5 flex flex-col md:flex-row-reverse justify-around align-middle items-center'>

                {/* Left */}
                <div className='md:w-1/3 w-full px-0 md:px-5'>
                    <img
                        src={`/${lowerCountryname}.jpg`}
                        alt={lowerCountryname}
                        className="w-full h-full object-cover pb-3 md:pb-0"
                    />
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
                        {/* Name */}
                        <h3>
                            <span className='font-bold'>Name:</span> {cname}
                        </h3>

                        {/* Phone */}
                        <h3>
                            <span className='font-bold'>Phone Number: </span> {phone}
                        </h3>

                        {/* Email */}
                        <h3>
                            <span className='font-bold'>Email: </span> {email}
                        </h3>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Region
