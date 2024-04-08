import Link from 'next/link'
import React from 'react'

interface Props {
    title: string
    author: string
    eventdate: string
    abstract: string
}

const EventsDetails = ({ title, author, eventdate, abstract }: Props) => {
    return (
        <div className='flex flex-col justify-center items-center px-3 py-5 w-full md:w-1/3'>
            {/* Title */}
            <Link
                href=''
                className='text-lg font-bold hover:underline text-primary pb-1'
            >
                {title}
            </Link>

            <div className='flex flex-row justify-around items-center align-middle w-full pb-3'>
                <h6 className='text-sm'>
                    By <span className='font-bold text-primary'>{author}</span>
                </h6>

                <h6 className='text-sm'>
                    {eventdate}
                </h6>
            </div>

            <p>
                {abstract}
                <Link
                    href=''
                    className='text-primary hover:underline'
                >
                    Read More</Link>
            </p>
        </div>
    )
}

export default EventsDetails
