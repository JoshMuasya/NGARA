'use client'

import { ArrowDown, DeleteIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Props {
    title: string
    author: string
    views: string
    category: string
    image: string
    abstract: string
    content: string
    datepublication: string
    link: string
    id: string
}

interface Comments {
    id: string
    comment: string
    username: string
    date: Date
    blogLink: string
}

const BlogsList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [blogData, setBlogData] = useState<Props[]>([])
    const [comments, setComments] = useState<Comments[]>([])

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
                        console.log(dataFromDoc.link)
                        data.push({ ...dataFromDoc })
                    })

                    setBlogData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        const fetchComments = async () => {
            try {
                const commentRef = collection(db, "Comments");
                const commentQuery = query(commentRef, orderBy('date', 'desc'));
                const commentSnapshot = await getDocs(commentQuery);
                const commentsData = commentSnapshot.docs
                    .map((doc) => doc.data() as Comments)
                    .filter((comment) => comment.blogLink); // Filter comments with blogLink
                setComments(commentsData);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        }

        fetchData()
        fetchComments()
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const handleDeleteBlog = async (blogId: string) => {
        console.log(blogId)
        try {
            const blogQuery = query(collection(db, "Blogs"), where("id", "==", blogId))

            await getDocs(blogQuery)
                .then((querySnapshot) => {
                    if (querySnapshot.size === 1) {
                        const blogRef = querySnapshot.docs[0].ref;
                        console.log("Blog found:", blogRef); // Log after successful query

                        return deleteDoc(blogRef);
                    } else {
                        console.log("Blog not found with the provided ID:", blogId);
                    }
                })
                .then(() => {
                    // Update UI after successful deletion
                    setBlogData(blogData.filter((blog) => blog.id !== blogId));
                })
                .catch((error) => {
                    console.error("Error deleting blog", error);
                });
        } catch (error) {
            console.error("Error deleting blog", error)
        }
    }

    const handleDeleteComments = async (commentId: string) => {
        try {
            const commentQuery = query(collection(db, "Comments"), where("id", "==", commentId))

            await getDocs(commentQuery)
                .then((querySnapshot) => {
                    if (querySnapshot.size === 1) {
                        const commentRef = querySnapshot.docs[0].ref;
                        console.log("Comment found:", commentRef); // Log after successful query

                        return deleteDoc(commentRef);
                    } else {
                        console.log("Blog not found with the provided ID:", commentId);
                    }
                })
                .then(() => {
                    // Update UI after successful deletion
                    setComments(comments.filter((comment) => comment.id !== commentId));
                })
                .catch((error) => {
                    console.error("Error deleting comment", error);
                });
        } catch (error) {
            console.error("Error deleting comment", error)
        }
    }

    return (
        <div className='flex flex-col justify-center align-middle items-center w-full'>
            {blogData.map((blogItem, index) => (
                <div key={index} className='py-5'>
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
                            {blogItem?.views} views
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

                    <h2 className='font-bold text-lg md:text-xl pt-5 pb-3'>Comments</h2>
                    {comments.map((comment, index) => (
                        comment.blogLink === blogItem.link && (
                            <div key={index}>
                                <p>{comment.username}: {comment.comment}</p>

                                {/* Delete Button */}
                                <Button
                                    variant={'destructive'}
                                    className='ml-2' // Add margin for spacing
                                    onClick={() => handleDeleteComments(comment.id)}

                                >
                                    <DeleteIcon />
                                </Button>
                            </div>
                        )
                    ))}

                    {/* Links */}
                    <div className='w-full pt-8'>
                        <Button
                            variant={'destructive'}
                            onClick={() => handleDeleteBlog(blogItem.id)}
                        >
                            Delete
                        </Button>
                    </div>

                    {/* <div className='flex flex-row justify-between align-middle items-center w-full pt-8'>
                        <div className='w-full'>
                            <Link
                                href=''
                                className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                            >
                                Update
                            </Link>
                        </div>

                        
                    </div> */}
                </div>
            ))}
        </div>
    )
}

export default BlogsList
