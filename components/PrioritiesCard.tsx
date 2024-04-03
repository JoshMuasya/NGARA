'use client'

import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'

interface Props {
    title: string
    src: string
    alt: string
    href: string
    content: string
}

const PrioritiesCard = ({ title, src, alt, href, content }: Props) => {
    return (
        <div className='px-3 py-3'>
            <Card className="w-[300px]">
                <CardHeader>
                    <CardTitle className='flex flex-col justify-center align-middle items-center'>
                        {/* Icon */}
                        <img 
                        src={src} 
                        alt={alt} 
                        style={{ width: '150px', height: '150px' }}
                        />

                        {/* Title */}
                        <Link 
                        href={`/about${href}`}
                        className='text-primary font-bold text-2xl'>
                            {title}
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        {content}
                        </p>                    
                </CardContent>
            </Card>
        </div>
    )
}

export default PrioritiesCard
