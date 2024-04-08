'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { buttonVariants } from './ui/button'

const PublicationsList = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex flex-col justify-center align-middle items-center w-full'>
            {/* Title */}
            <h1 className='font-bold text-lg md:text-xl'>
                Blog 1
            </h1>

            {/* Top Details */}
            <div className='flex flex-row flex-wrap justify-around align-middle items-center w-full font-semibold italic text-sm md:text-base cursor-pointer'>
                {/* author */}
                <h3 className='hover:underline hover:bold'>
                    Author 3
                </h3>

                <h3 className='hover:underline hover:bold'>
                    Duration
                </h3>

                <h3 className='hover:underline hover:bold'>
                    Category
                </h3>
            </div>

            {/* Image */}
            <div className='w-full flex flex-col justify-center items-center align-middle'>
                <img src="gum.jpg" alt="gum"
                    style={{ width: '300px', height: '250px' }}
                />
            </div>

            {/* Abstract */}
            <div className='w-full flex flex-row justify-between items-start align-middle'>
                <div className='w-3/4'>
                    <p>
                        Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands – A Regional Synthesis Report And Support to the formulation of a GCF project on: Scaling-Up Resilience in Africa’s Great Green Wall (SURAGGWA)
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
                        Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands – A Regional Synthesis Report And Support to the formulation of a GCF project on: Scaling-Up Resilience in Africa’s Great Green Wall (SURAGGWA)
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
    )
}

export default PublicationsList
