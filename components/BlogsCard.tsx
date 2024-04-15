import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

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
    onClick?: () => void
}

const BlogsCard = ({ title, abstract, category, views, link, image, onClick }: Props) => {
    const handleClick = () => {
        if (onClick) {
            onClick(); // Call the provided onClick function
        }
    };

    return (
        <div className='py-5'>
            {/* Details */}
            <div className='px-3'>
                <Card className="md:w-[350px] w-[250px] border-none">
                    <CardContent className="w-full h-full p-3 md:p-5 flex flex-col justify-start items-start align-middle">
                        {/* Image */}
                        <div>
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Category */}
                        <div className='py-3 flex flex-row justify-between w-full'>
                            <p className='text-xs'>
                                {category}
                            </p>

                            <p className='text-xs'>
                                {views} Views
                            </p>
                        </div>

                        {/* Title */}
                        <div className='pb-1'>
                            <h2 className='text-lg font-bold'>
                                {title}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className='pb-3'>
                            <p>
                                {abstract}
                            </p>
                        </div>

                        {/* Link */}
                        <div className='flex flex-row justify-center align-middle items-center w-full text-sm hover:italic'>
                            <Link
                                href={`/blogs/${link}`}
                                onClick={handleClick}
                                className='flex flex-row justify-center align-middle items-center'
                            >
                                Read More <ArrowRight className='w-5 h-5' />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default BlogsCard
