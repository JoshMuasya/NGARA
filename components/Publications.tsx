'use client'

import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Publications {
    title: string
    pdf: string
    datepublication: string
    country: string
    abstract: string
    author: string
}

interface Journal {
    title: string
    pdf: string
    datepublication: string
    author: string
    abstract: string
}

const Publications = () => {
    const [recentPublications, setRecentPublications] = useState<Publications[]>([])
    const [recentJournals, setRecentJournals] = useState<Journal[]>([])
    const [countryPublications, setCountryPublications] = useState<Publications[]>([])

    useEffect(() => {
        const fetchPublication = async () => {
            try {
                const collectionRef = collection(db, "Publications")
                let queryRef = query(collectionRef, orderBy('datepublication', 'desc'), limit(5))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Publications[] = []
                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Publications
                        data.push({ ...dataFromDoc })
                    })

                    setRecentPublications(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        const fetchJournal = async () => {
            try {
                const collectionRef = collection(db, "Journals")
                let queryRef = query(collectionRef, orderBy('datepublication', 'desc'), limit(5))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Journal[] = []
                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Journal
                        data.push({ ...dataFromDoc })
                    })

                    setRecentJournals(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        const fetchCountry = async () => {
            try {
                const collectionRef = collection(db, "Publications")
                let queryRef = query(collectionRef, orderBy('datepublication', 'desc'), limit(5))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Publications[] = []
                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Publications
                        if (dataFromDoc.country && dataFromDoc.country.trim() !== "") {
                            // Check if country exists and is not an empty string after trimming
                            data.push({ ...dataFromDoc });
                        }
                    })

                    setCountryPublications(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchCountry()
        fetchJournal()
        fetchPublication()
    }, [])

    return (
        <div className='py-5 w-full back-pic px-5'>
            <Card className='w-full rounded-xl flex flex-col justify-center align-middle items-center'>
                <CardContent>
                    {/* Title */}
                    <h1 className='text-primary font-bold text-xl md:text-3xl text-center pb-5 pt-3'>
                        RECENT PUBLICATIONS BY NGARA
                    </h1>

                    {/* Subtitle */}
                    <h6 className='text-center text-sm'>
                        Stay updated with our latest publications
                    </h6>
                </CardContent>
            </Card>

            {/* Details */}
            <div className='pb-5 flex flex-row flex-wrap justify-around items-start align-middle w-full pt-5'>
                <Card className="w-4/5 border-none">
                    <CardContent className="w-full h-full pt-2 flex flex-col justify-start items-start align-middle">
                        {/* Title */}
                        <Link
                            href='/publications'
                            className='text-primary font-bold text-lg md:text-2xl text-center'>
                            Recent Publications
                        </Link >

                        {/* List */}
                        {recentPublications.map((publication, index) => (
                            <div
                                key={index}
                                className='flex flex-col justify-center align-middle items-center py-2'>
                                {/* Title */}
                                <Link
                                    href={publication?.pdf}
                                    className='font-bold text-primary text-base hover:underline'
                                >
                                    {publication?.title}
                                </Link>

                                {/* Author */}
                                <h3
                                    className='text-sm'
                                >
                                    {publication?.author}
                                </h3>

                                {/* Abstract */}
                                <p>
                                    {publication?.abstract}
                                </p>

                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Publications
