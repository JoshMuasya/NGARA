import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Blogs = () => {
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
                <Card className="md:w-[350px] w-[250px] border-none">
                    <CardContent className="w-full h-full p-3 md:p-5 flex flex-col justify-start items-start align-middle">
                        {/* Image */}
                        <div>
                            <img
                                src="/gum.jpg"
                                alt="Gum Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Category */}
                        <div className='py-3 flex flex-row justify-between w-full'>
                            <p className='text-xs'>
                                Category
                            </p>

                            <p className='text-xs'>
                                5 Min Read
                            </p>
                        </div>

                        {/* Title */}
                        <div className='pb-1'>
                            <h2 className='text-lg font-bold'>
                                Title
                            </h2>
                        </div>

                        {/* Content */}
                        <div className='pb-3'>
                            <p>
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Link */}
                        <div className='flex flex-row justify-center align-middle items-center w-full text-sm hover:italic'>
                            <Link
                                href=''
                                className='flex flex-row justify-center align-middle items-center'
                            >
                                Read More <ArrowRight className='w-5 h-5'/>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:w-[350px] w-[250px] border-none">
                    <CardContent className="w-full h-full p-3 md:p-5 flex flex-col justify-start items-start align-middle">
                        {/* Image */}
                        <div>
                            <img
                                src="/gum.jpg"
                                alt="Gum Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Category */}
                        <div className='py-3 flex flex-row justify-between w-full'>
                            <p className='text-xs'>
                                Category
                            </p>

                            <p className='text-xs'>
                                5 Min Read
                            </p>
                        </div>

                        {/* Title */}
                        <div className='pb-1'>
                            <h2 className='text-lg font-bold'>
                                Title
                            </h2>
                        </div>

                        {/* Content */}
                        <div className='pb-3'>
                            <p>
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Link */}
                        <div className='flex flex-row justify-center align-middle items-center w-full text-sm hover:italic'>
                            <Link
                                href=''
                                className='flex flex-row justify-center align-middle items-center'
                            >
                                Read More <ArrowRight className='w-5 h-5'/>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:w-[350px] w-[250px] border-none">
                    <CardContent className="w-full h-full p-3 md:p-5 flex flex-col justify-start items-start align-middle">
                        {/* Image */}
                        <div>
                            <img
                                src="/gum.jpg"
                                alt="Gum Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Category */}
                        <div className='py-3 flex flex-row justify-between w-full'>
                            <p className='text-xs'>
                                Category
                            </p>

                            <p className='text-xs'>
                                5 Min Read
                            </p>
                        </div>

                        {/* Title */}
                        <div className='pb-1'>
                            <h2 className='text-lg font-bold'>
                                Title
                            </h2>
                        </div>

                        {/* Content */}
                        <div className='pb-3'>
                            <p>
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Link */}
                        <div className='flex flex-row justify-center align-middle items-center w-full text-sm hover:italic'>
                            <Link
                                href=''
                                className='flex flex-row justify-center align-middle items-center'
                            >
                                Read More <ArrowRight className='w-5 h-5'/>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Button */}
            <div className='flex justify-center w-full'>
                <Link
                    href=''
                    className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                >
                    View More
                </Link>
            </div>
        </div>
    )
}

export default Blogs
