import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PartnerCircle from './PartnerCircle'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight, CircleCheckBig } from 'lucide-react'

interface Props {
    title: string
    author: string
    abstract: string
    datepublication: string
    datecompletion: string
    link: string
}

const ProjectsCard = ({ title, link, author, datepublication, datecompletion, abstract }: Props) => {
    return (
        <div className='py-5'>
            {/* Details */}
            <div className='px-3'>
                <Card className="md:w-[350px] w-[250px] border-none">
                    <CardContent className="w-full h-full p-3 md:p-5 flex flex-col justify-start items-start align-middle">
                        {/* Title */}
                        <h1 className='text-xl font-bold'>
                            {title}
                        </h1>

                        {/* Mid */}
                        <div className='flex flex-row justify-around items-center align-middle w-full text-sm italic py-2'>
                            {/* Author */}
                            <h4>
                                {author}
                            </h4>

                            <h4>
                                {datepublication}
                            </h4>

                            {new Date(datecompletion) < new Date() ? (
                                <div className='bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary p-1 rounded-xl'>
                                    <CircleCheckBig
                                    className='w-5 h-5'
                                    />
                                </div>
                            ) : (
                                <h4>
                                    {datecompletion}
                                </h4>)}
                        </div>

                        {/* Abstract */}
                        <p className='text-justify'>
                            {abstract}
                        </p>

                        {/* Link */}
                        <Link
                            href={link}
                            className='flex flex-row pt-3'
                        >
                            Read More <ArrowRight />
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ProjectsCard
