'use client'

import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'

interface Props {
    title: string
    author: string
    pdf: string
    abstract: string
    datepublication: string
}

const PublicationCard = ({ title, pdf, datepublication, author, abstract }: Props) => {
    return (
        <div className='flex flex-col align-middle items-start p-3'>
            {/* Top */}
            <div className='flex flex-col justify-center align-middle items-start p-3'>
                {/* Title */}
                <h1 className='pb-1'>
                    <Link
                        className='hover:underline text-ring font-bold'
                        href={pdf}
                    >
                        {title}
                    </Link>
                </h1> 

                <h4 className='font-semibold pb-1'>
                    <span className='text-lg text-accent font-bold'>{author}</span>
                </h4>

                <h4 className='font-semibold pb-1'>
                    Published: {datepublication}  <span className='text-lg text-accent font-bold'>{author}</span>
                </h4>
            </div>

            {/* Bottom */}
            <p className='text-justify pl-7'>
                {abstract}
            </p>
        </div>
    )
}

export default PublicationCard
