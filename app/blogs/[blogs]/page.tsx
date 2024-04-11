'use client'

import { Button } from '@/components/ui/button'
import { db } from '@/lib/firebase'
import { userlogin } from '@/lib/userlogin'
import { collection, query, getDocs, addDoc, orderBy } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
    comment: z
        .string({
            required_error: "Please enter a comment",
        })
})

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

interface Comment {
    comment: string
    username: string
    date: string
    blogLink: string
}

interface Comments {
    comment: string
    username: string
    date: Date
    blogLink: string
}

interface LoginResult {
    username: string;
}

const MoreBlog = ({ params }: { params: { blogs: string } }) => {
    const [blogData, setBlogData] = useState<Props[]>([])
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [username, setUsername] = useState('')
    const [comments, setComments] = useState<Comment[]>([])
    const [commentUpdate, setCommentUpdate] = useState<Comments[]>([])

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
                        if (dataFromDoc.link === params.blogs) {
                            data.push({ ...dataFromDoc })
                        }
                    })

                    setBlogData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const collectionRef = collection(db, "Comments")
                let queryRef = query(collectionRef, orderBy('date', 'desc'))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Comment[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Comment
                        if (dataFromDoc.blogLink === params.blogs) {
                            data.push({ ...dataFromDoc })
                        }
                    })

                    setComments(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchComment()
    }, [comments, commentUpdate])

    const handleClick = async () => {
        try {
            let loginResult: LoginResult;

            loginResult = await userlogin() as LoginResult;

            if (loginResult) {
                setIsCommentOpen(true)
                setUsername(loginResult.username)
            } else {
                console.log('Login Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            comment: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const blogLink = blogData[0]?.link
        const date = new Date()
        try {
            const commentData = { ...data, blogLink, username, date }

            const docRef = addDoc(collection(db, "Comments"), commentData)

            setCommentUpdate([commentData])

            form.reset()

            setIsCommentOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className='pt-16 flex flex-col justify-center items-center align-middle w-full pb-10 px-5'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl pb-5'>
                {blogData[0]?.title}
            </h1>

            {/* Underline */}
            <div className='border border-primary w-full' />

            {/* Top Mid */}
            <div className='flex flex-row justify-around items-center align-middle pb-5 w-full'>
                {/* Author */}
                <h1 className='text-accent text-sm'>Author: {blogData[0]?.author}</h1>

                {/* Category */}
                <h1 className='text-accent text-sm'>Category: {blogData[0]?.category}</h1>

                {/* Duration */}
                <h1 className='text-accent text-sm'>Duration: {blogData[0]?.duration}</h1>
            </div>

            {/* Image */}
            <div className='pb-5'>
                <img src={blogData[0]?.image} alt={blogData[0]?.title}
                    style={{ width: '300px', height: '200px' }}
                />
            </div>

            {/* Content */}
            <p className='pb-5 text-base'>
                {blogData[0]?.content}
            </p>

            {/* Comment */}
            <div className='flex flex-col justify-center items-center align-middle w-full'>
                <h1 className='font-bold text-lg pb-5'>Comments</h1>

                {/* Comments */}
                <div className='flex flex-col justify-center items-center align-middle w-full'>
                    {comments.map((comment) => (
                        <div className='flex flex-col justify-center items-start align-middle py-5 w-full'>
                            {/* Top */}
                            <div className='flex flex-row justify-between items-center align-middle w-1/3 pb-3'>
                                {/* Username */}
                                <h1 className='font-semibold text-sm'>
                                    {comment?.username}
                                </h1>

                                {/* Date */}
                                <h1 className='font-semibold text-sm'>
                                    {formatDate(comment?.date)}
                                </h1>
                            </div>

                            {/* Comment */}
                            <p className='text-base'>
                                {comment?.comment}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Add Comment */}
                {!isCommentOpen && (
                    <div className='flex justify-start w-full'>
                        <Button
                            className='bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary'
                            onClick={handleClick}
                        >
                            Leave a Comment
                        </Button>
                    </div>
                )}

                {/* Comments */}
                {isCommentOpen && (
                    <div className='py-5 w-full'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                                <FormField
                                    control={form.control}
                                    name="comment"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-semibold text-sm'>Add your comment</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Add a comment..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MoreBlog
