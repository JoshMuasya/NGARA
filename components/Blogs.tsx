'use client'

import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Props {
    title: string
    author: string
    duration: string
    category: string
    image: string
    abstract: string
    content: string
    datepublication: string
    link: string
}

const Blogs = () => {
    const [blogData, setBlogData] = useState<Props[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Blogs")
                let queryRef = query(collectionRef, orderBy("datepublication", "desc"), limit(3))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setBlogData(data)
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
        <div className='py-10 w-full'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-5'>
                Stay Informed with Our Blog
            </h1>

            {/* Subtitle */}
            <h6 className='text-center text-sm'>
                Get the latest news and updates from our blog
            </h6>

            {/* Details */}
            <div className='pb-5 w-full flex flex-row flex-wrap justify-around items-center align-middle'>
                {blogData.map((blogItem, index) => (
                    <Card className="md:w-[350px] w-[250px] border-none" key={index}>
                        <CardContent className="w-full h-full p-3 md:p-5 flex flex-col justify-start items-start align-middle">
                            {/* Image */}
                            <div>
                                <img
                                    src={blogItem?.image}
                                    alt={blogItem?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Category */}
                            <div className='py-3 flex flex-row justify-between w-full'>
                                <p className='text-xs'>
                                    {blogItem?.category}
                                </p>

                                <p className='text-xs'>
                                    {blogItem?.duration} Read
                                </p>
                            </div>

                            {/* Title */}
                            <div className='pb-1'>
                                <h2 className='text-lg font-bold'>
                                    {blogItem?.title}
                                </h2>
                            </div>

                            {/* Abstract */}
                            <div className='pb-3'>
                                <p>
                                    {blogItem?.abstract}
                                </p>
                            </div>

                            {/* Link */}
                            <div className='flex flex-row justify-center align-middle items-center w-full text-sm hover:italic'>
                                <Link
                                href={`/blogs/${blogItem?.link}`}
                                    className='flex flex-row justify-center align-middle items-center'
                                >
                                    Read More <ArrowRight className='w-5 h-5' />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Button */}
            <div className='flex justify-center w-full'>
                <Link
                    href='/blogs'
                    className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                >
                    View More
                </Link>
            </div>
        </div>
    )
}

export default Blogs
