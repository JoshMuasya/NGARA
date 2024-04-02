'use client'

import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'

interface Publication {
    title: string
    link: string
}

const PublicationCard = ({ title, link }: Publication) => {
    return (
        <div>
            {/* Details */}
            <div className='pb-5 px-3'>
                <ul className="">
                    <li className='hover:italic hover:font-bold'>
                        <Link
                        href={link}
                        className='underline underline-offset-4'
                        >
                            {title}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PublicationCard
