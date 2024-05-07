'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Props {
    title: string
    author: string
    pdf: string
    abstract: string
    content: string
    eventdate: string
    id: string
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

    const handleDeleteEvent = async (eventId: string) => {
        console.log(eventId)
        try {
            const eventQuery = query(collection(db, "Events"), where("id", "==", eventId))

            await getDocs(eventQuery)
                .then((querySnapshot) => {
                    if (querySnapshot.size === 1) {
                        const eventRef = querySnapshot.docs[0].ref;
                        console.log("event found:", eventRef); // Log after successful query

                        return deleteDoc(eventRef);
                    } else {
                        console.log("event not found with the provided ID:", eventId);
                    }
                })
                .then(() => {
                    // Update UI after successful deletion
                    setEventData(eventData.filter((item) => item.id !== eventId));
                })
                .catch((error) => {
                    console.error("Error deleting event", error);
                });
        } catch (error) {
            console.error("Error deleting event", error)
        }
    }

    return (
        <div className='flex flex-col justify-center align-middle items-center w-full'>
            {eventData.map((eventItem, index) => (
                <div key={index} className='py-5'>
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
                    <div className='w-full pt-8'>
                        <Button
                            variant={'destructive'}
                            onClick={() => handleDeleteEvent(eventItem?.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventsList
