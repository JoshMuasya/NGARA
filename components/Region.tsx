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
    publications: { abstract: string; pdf: string; title: string }[];
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

            <div className='pt-5 flex flex-col md:flex-row justify-between align-middle items-start w-full gap-5'>
                <div className="flex flex-col md:flex-row w-full items-stretch">
                    {/* Recent Publications */}
                    <div className="md:w-1/2 w-full">
                        <h1 className="font-bold text-2xl pb-2 pt-5">Recent Publications</h1>

                        {publications.length > 0 ? (
                            <ul className="list-disc pl-6">
                                {publications.map((publication, index) => (
                                    <li key={index} className="mb-4">
                                        <Link
                                            href={publication.pdf}
                                            className="hover:underline text-ring font-bold"
                                        >
                                            {publication.title}
                                        </Link>
                                        <p className="pt-1">{publication.abstract}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="italic text-muted-foreground pt-3">Coming soon...</p>
                        )}
                    </div>

                    {/* Vertical Separator */}
                    <div className="hidden md:block w-px bg-primary mx-5" />

                    {/* Country Contacts */}
                    <div className="md:w-1/2 w-full">
                        <h1 className="font-bold text-2xl pb-2 pt-5">Country Contacts</h1>
                        <div className="border border-black w-full mb-4" />
                        <div className="flex flex-col justify-center align-middle items-start">
                            <img
                                src={`/${lowerCountryname}.jpg`}
                                alt={lowerCountryname}
                                className="w-full h-full object-cover pb-3"
                            />
                            <div className="flex flex-col justify-center align-middle items-start">
                                <h3><span className="font-bold">Name:</span> {cname}</h3>
                                <h3><span className="font-bold">Phone Number:</span> {phone}</h3>
                                <h3><span className="font-bold">Email:</span> {email}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Region
