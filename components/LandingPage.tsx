import React from 'react'
import { HomeCard } from './Card'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { HomeCarousel } from './HomeCarousel'

const LandingPage = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-around align-middle items-start w-full md:h-screen md:px-5 pt-5'
        id='home'>
            {/* Left */}
            <div className='md:w-1/2'>
                <HomeCarousel />
            </div>

            {/* Right */}
            <div className='md:w-1/2 flex flex-col justify-center items-center align-middle pt-5 md:pl-7'>
                {/* Title */}
                <h2 className='text-4xl font-bold text-center pb-4'>
                    The Network for Natural Gums
                    and Resins in Africa (NGARA)
                </h2>

                {/* Description */}
                <p className='pb-4'>
                    The Network for Natural Gums and Resins in Africa (NGARA) is a
                    Pan African organization assisting African producing countries and
                    partners formulate a coordinated strategy for the sustainable
                    development of their natural gums, resins and allied dryland
                    resources, for improving rural livelihood and environmental
                    conservation.
                    The organization focuses more on enhancing value chains for
                    improving rural livelihood and environmental conservation.
                    The vision of NGARA is to position African producer countries and
                    partners as major global players in the production, processing and
                    marketing of gums, resins and allied tree based commodities from
                    the drylands of Sub Saharan Africa.
                </p>

                {/* Button */}
                <div className='flex justify-start w-full'> 
                    <Link
                        href=''
                        className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
