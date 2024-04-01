'use client'

import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'

interface Publication {
    category: string
    title: string
    content: string
    author: string
    link: string
    date: string
    duration: string
}

const PublicationCard = ({ category, title, content, author, link, date, duration }: Publication) => {
    return (
        <div>
            {/* Details */}
            <div className='pb-5 px-3'>
                <Card className="md:w-[350px] w-[250px] border-none">
                    <CardContent className="w-full h-full p-3 md:p-5 flex flex-col justify-start items-start align-middle">
                        {/* Image */}
                        <div>
                            <img
                                src="/gum.jpg"
                                alt="Gum Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Category */}
                        <div className='py-3'>
                            <p className='text-xs'>
                                {category}
                            </p>
                        </div>

                        {/* Title */}
                        <div className='pb-1'>
                            <h2 className='text-lg font-bold'>
                                {title}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className='pb-3'>
                            <p>
                                {content}
                            </p>
                        </div>

                        {/* Writer */}
                        <div className='flex flex-row justify-center align-middle items-center w-full'>
                            {/* Left */}
                            <div>
                                <PartnerCircle />
                            </div>

                            {/* Right */}
                            <div className='flex flex-col justify-start align-middle items-start w-full'>
                                {/* Author */}
                                <div className='font-bold'>
                                    {author}
                                </div>

                                {/* Date Time */}
                                <div className='flex flex-row justify-start align-middle items-center w-full'>
                                    {/* Date */}
                                    <div className='pr-3'>
                                        {date}
                                    </div>

                                    {/* Time of Read */}
                                    <div>
                                        {duration}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                        href={link}
                        className='pt-5'
                        >
                            Read More
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default PublicationCard
