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
    duration: string
    category: string
    pdf: string
    abstract: string
    content: string
    datepublication: string
}

const JournalList = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [journalData, setJournalData] = useState<Props[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Journals")
                let queryRef = query(collectionRef)

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setJournalData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    console.log(journalData)

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className='flex flex-col justify-center align-middle items-center w-full pb-10'>
            {journalData.map((publicationItem, index) => (
                <div 
                key={index}
                className='py-5'
                >
                    {/* Title */}
                    <Link 
                    className='font-bold text-lg md:text-xl'
                    href={publicationItem?.pdf}
                    >
                        {publicationItem?.title}
                    </Link>

                    {/* Top Details */}
                    <div className='flex flex-row flex-wrap justify-around align-middle items-center w-full font-semibold text-sm md:text-base'>
                        {/* author */}
                        <h3 className='text-primary font-bold'>
                            {publicationItem?.author}
                        </h3>

                        <h3 className=''>
                            Published: {formatDate(publicationItem?.datepublication)}
                        </h3>
                    </div>

                    {/* Abstract */}
                    <div className='w-full flex flex-row justify-between items-start align-middle'>
                        <div className='w-3/4'>
                            <p>
                                {publicationItem?.abstract}
                            </p>
                        </div>
                    </div>

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

export default JournalList
