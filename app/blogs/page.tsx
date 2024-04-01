import BlogsCard from '@/components/BlogsCard'
import React from 'react'

interface Blog {
    title: string
    content: string
    category: string
    duration: string
    link: string
}

const BlogsData: Blog[] = [
    {
        title: "Blog 1",
        content: "Content 1",
        category: "Category 1",
        duration: "Duration 1",
        link: "/blogs/blog1"
    },

    {
        title: "Blog 4",
        content: "Content 4",
        category: "Category 4",
        duration: "Duration 4",
        link: "/blogs/blog4"
    },

    {
        title: "Blog 3",
        content: "Content 3",
        category: "Category 3",
        duration: "Duration 3",
        link: "/blogs/blog3"
    },

    {
        title: "Blog 2",
        content: "Content 2",
        category: "Category 2",
        duration: "Duration 2",
        link: "/blogs/blog2"
    }
]

const Blogs = () => {
    return (
        <div className='pt-20 px-5 pb-10'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-5'>
                Stay Informed with Our Blog
            </h1>

            {/* Subtitle */}
            <h6 className='text-center text-sm'>
                Get the latest news and updates from our blog
            </h6>

            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center align-middle'>
                {BlogsData.map((blog, index) => (
                    <BlogsCard key={index} {...blog} />
                ))}
            </div>


        </div>
    )
}

export default Blogs
