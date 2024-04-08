'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { buttonVariants } from './ui/button'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Props {
    title: string
    author: string
    pdf: string
    abstract: string
    content: string
    eventdate: string
}

const EventsList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [eventData, setEventData] = useState<Props[]>([])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Events")
                let queryRef = query(collectionRef)

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setEventData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className='flex flex-col justify-center align-middle items-center w-full'>
            {eventData.map((eventItem, index) => (
                <div key={index}>
                    {/* Title */}
                    <h1 className='font-bold text-lg md:text-xl'>
                        {eventItem?.title}
                    </h1>

                    {/* Top Details */}
                    <div className='flex flex-row flex-wrap justify-around align-middle items-center w-full font-semibold italic text-sm md:text-base cursor-pointer'>
                        {/* author */}
                        <h3 className='hover:underline hover:bold'>
                            {eventItem?.author}
                        </h3>

                        <h3 className='hover:underline hover:bold'>
                            {formatDate(eventItem?.eventdate)}
                        </h3>
                    </div>

                    {/* Abstract */}
                    <div className='w-full flex flex-row justify-between items-start align-middle'>
                        <div className='w-3/4'>
                            <p>
                                {eventItem?.abstract}
                            </p>
                        </div>

                        {/* Icon */}
                        <div className='w-1/4 pl-1 md:pl-5'>
                            <ArrowDown
                                onClick={handleClick}
                                className='cursor-pointer text-ring hover:text-primary'
                            />
                        </div>
                    </div>

                    {isOpen && (
                        <div className='w-full'>
                            <p>
                                {eventItem?.content}
                            </p>

                        </div>
                    )}

                    {/* Links */}
                    <div className='flex flex-row justify-between align-middle items-center w-full pt-8'>
                        <div className='w-full'>
                            <Link
                                href=''
                                className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                            >
                                Update
                            </Link>
                        </div>

                        <div className='w-full'>
                            <Link
                                href=''
                                className={`${buttonVariants({ variant: "destructive" })} `}
                            >
                                Delete
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventsList
