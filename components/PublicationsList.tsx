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
    duration: string
    category: string
    pdf: string
    abstract: string
    content: string
    datepublication: string
    id: string
}

const PublicationsList = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [publicationData, setPublicationData] = useState<Props[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Publications")
                let queryRef = query(collectionRef)

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setPublicationData(data)
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

    const handleDeletePublication = async (publicationId: string) => {
        console.log(publicationId)
        try {
            const publicationQuery = query(collection(db, "Publication"), where("id", "==", publicationId))

            await getDocs(publicationQuery)
                .then((querySnapshot) => {
                    if (querySnapshot.size === 1) {
                        const publicationRef = querySnapshot.docs[0].ref;
                        console.log("publication found:", publicationRef); // Log after successful query

                        return deleteDoc(publicationRef);
                    } else {
                        console.log("publication not found with the provided ID:", publicationId);
                    }
                })
                .then(() => {
                    // Update UI after successful deletion
                    setPublicationData(publicationData.filter((item) => item.id !== publicationId));
                })
                .catch((error) => {
                    console.error("Error deleting publication", error);
                });
        } catch (error) {
            console.error("Error deleting publication", error)
        }
    }

    return (
        <div className='flex flex-col justify-center align-middle items-center w-full pb-10'>
            {publicationData.map((publicationItem, index) => (
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
                    <div className='w-full pt-8'>
                        <Button
                            variant={'destructive'}
                            onClick={() => handleDeletePublication(publicationItem.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PublicationsList
