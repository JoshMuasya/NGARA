'use client'

import BlogsCard from '@/components/BlogsCard'
import { db } from '@/lib/firebase'
import { collection, query, orderBy, limit, getDocs, doc, updateDoc, getDoc, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

interface Props {
    title: string
    author: string
    views: number
    category: string
    image: string
    abstract: string
    content: string
    datepublication: string
    link: string
    id: string
}

const Blogs = () => {
    const [blogData, setBlogData] = useState<Props[]>([])
    const [blogsLoaded, setBlogsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Blogs")
                let queryRef = query(collectionRef, orderBy("datepublication", "desc"))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setBlogData(data)
                    setBlogsLoaded(true);
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const handleBlogClick = async (clickedBlog: Props) => {
        // if (!clickedBlog.id) {
        //   console.error('Blog ID missing for clicked blog:', clickedBlog);
        //   return;
        // }
    
        // try {
        //   // Refetch blog data to ensure latest information
        //   const blogDocRef = doc(db, 'Blogs', clickedBlog.id);
        //   const blogSnapshot = await getDoc(blogDocRef);
    
        //   if (blogSnapshot.exists()) { // Check if document exists in Firestore
        //     const updatedBlogData = blogSnapshot.data() as Props;
    
        //     // Update view count with latest data
        //     const updatedViewCount = updatedBlogData.views + 1;
    
        //     await updateDoc(blogDocRef, { views: updatedViewCount }); // Update 'views' field
    
        //     // Update local state for immediate UI feedback
        //     setBlogData((prevData) =>
        //       prevData.map((blog) => (blog.id === clickedBlog.id ? { ...blog, views: updatedViewCount } : blog))
        //     );
        //   } else {
        //     console.error('Blog document not found in Firestore:', clickedBlog.id);
        //   }
        // } catch (error) {
        //   console.log('Error updating view count:', error);
        // }
      };

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className='pt-24 px-5 pb-14'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-5'>
                Stay Informed with Our Blog
            </h1>

            {/* Subtitle */}
            <h6 className='text-center text-sm'>
                Get the latest news and updates from our blog
            </h6>

            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center align-middle'>
                {blogData.map((blog, index) => (
                    <BlogsCard
                        key={index}
                        title={blog?.title}
                        content={blog?.content}
                        category={blog?.category}
                        views={blog?.views.toString()}
                        link={blog?.link}
                        image={blog?.image}
                        author={blog?.author}
                        abstract={blog?.abstract}
                        datepublication={blog?.datepublication}
                        onClick={() => handleBlogClick(blog)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Blogs
