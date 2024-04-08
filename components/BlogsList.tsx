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
    image: string
    abstract: string
    content: string
    datepublication: string
}

const BlogsList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [blogData, setBlogData] = useState<Props[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Blogs")
                let queryRef = query(collectionRef)

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

    console.log(blogData)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className='flex flex-col justify-center align-middle items-center w-full'>
            {blogData.map((blogItem, index) => (
                <div key={index}>
                    {/* Title */}
                    <h1 className='font-bold text-lg md:text-xl'>
                        {blogItem?.title}
                    </h1>

                    {/* Top Details */}
                    <div className='flex flex-row flex-wrap justify-around align-middle items-center w-full font-semibold italic text-sm md:text-base cursor-pointer'>
                        {/* author */}
                        <h3 className='hover:underline hover:bold'>
                            {blogItem?.author}
                        </h3>

                        <h3 className='hover:underline hover:bold'>
                            {blogItem?.duration}
                        </h3>

                        <h3 className='hover:underline hover:bold'>
                            {blogItem?.category}
                        </h3>

                        <h3 className='hover:underline hover:bold'>
                            {formatDate(blogItem?.datepublication)}
                        </h3>
                    </div>

                    {/* Image */}
                    <div className='w-full flex flex-col justify-center items-center align-middle'>
                        <img src={blogItem?.image} alt={blogItem?.title}
                            style={{ width: '300px', height: '250px' }}
                        />
                    </div>

                    {/* Abstract */}
                    <div className='w-full flex flex-row justify-between items-start align-middle'>
                        <div className='w-3/4'>
                            <p>
                                {blogItem?.abstract}
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
                                {blogItem?.content}
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

export default BlogsList
