import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const Publications = () => {
    return (
        <div className='py-10 w-full'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-5'>
                RECENT PUBLICATIONS BY NGARA
            </h1>

            {/* Subtitle */}
            <h6 className='text-center text-sm'>
                Stay updated with our latest publications
            </h6>

            {/* Details */}
            <div className='pb-5 flex flex-row flex-wrap justify-around items-center align-middle w-full'>
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
                        <div className='py-3'>
                            <p className='text-xs'>
                                Category
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

                        {/* Writer */}
                        <div className='flex flex-row justify-center align-middle items-center w-full'>
                            {/* Left */}
                            <div>
                                <PartnerCircle />
                            </div>

                            {/* Right */}
                            <div className='flex flex-col justify-start align-middle items-start w-full'>
                                {/* Author */}
                                <div className='font-bold'>
                                    John Doe
                                </div>

                                {/* Date Time */}
                                <div className='flex flex-row justify-start align-middle items-center w-full'>
                                    {/* Date */}
                                    <div className='pr-3'>
                                        31 Jan 2024
                                    </div>

                                    {/* Time of Read */}
                                    <div>
                                        5 min read
                                    </div>
                                </div>
                            </div>
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
                        <div className='py-3'>
                            <p className='text-xs'>
                                Category
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

                        {/* Writer */}
                        <div className='flex flex-row justify-center align-middle items-center w-full'>
                            {/* Left */}
                            <div>
                                <PartnerCircle />
                            </div>

                            {/* Right */}
                            <div className='flex flex-col justify-start align-middle items-start w-full'>
                                {/* Author */}
                                <div className='font-bold'>
                                    John Doe
                                </div>

                                {/* Date Time */}
                                <div className='flex flex-row justify-start align-middle items-center w-full'>
                                    {/* Date */}
                                    <div className='pr-3'>
                                        31 Jan 2024
                                    </div>

                                    {/* Time of Read */}
                                    <div>
                                        5 min read
                                    </div>
                                </div>
                            </div>
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
                        <div className='py-3'>
                            <p className='text-xs'>
                                Category
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

                        {/* Writer */}
                        <div className='flex flex-row justify-center align-middle items-center w-full'>
                            {/* Left */}
                            <div>
                                <PartnerCircle />
                            </div>

                            {/* Right */}
                            <div className='flex flex-col justify-start align-middle items-start w-full'>
                                {/* Author */}
                                <div className='font-bold'>
                                    John Doe
                                </div>

                                {/* Date Time */}
                                <div className='flex flex-row justify-start align-middle items-center w-full'>
                                    {/* Date */}
                                    <div className='pr-3'>
                                        31 Jan 2024
                                    </div>

                                    {/* Time of Read */}
                                    <div>
                                        5 min read
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Button */}
            <div className='flex justify-center w-full'>
                <Link
                    href='/publications'
                    className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                >
                    View More
                </Link>
            </div>
        </div>
    )
}

export default Publications
