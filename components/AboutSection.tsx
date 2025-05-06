import React from 'react'
import AboutCard from './AboutCard'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { Card, CardContent } from './ui/card'
import { File } from 'lucide-react'

const AboutSection = () => {
    return (
        <div className='py-10 flex flex-col justify-center items-center align-middle w-full'>
            <div className=' flex flex-row flex-wrap items-center align-middle justify-center w-full'>
                <Link
                    href=''
                >
                    <AboutCard
                        title='OUR VISION'
                        content='The NEFEA vision is to position African producer
                countries and partners as major global players in
                the sustainable production, processing and
                marketing of forest commodities and products.'
                    />
                </Link>

                <Link
                    href=''
                >
                    <AboutCard
                        title='OUR MISSION'
                        content='The NEFEA mission is to assist African producer countries
                and partners to formulate and implement a coordinated
                strategy for the sustainable development of their natural
                forest resources to improve rural livelihoods and
                increase resilience to climate change and desertification.
                '
                    />
                </Link>

                <Link
                    href=''
                >
                    <AboutCard
                        title='OBJECTIVES'
                        content={
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>To promote the exchange of information on the production, marketing, processing, and quality control of forest resources and commodities in producer countries and with partners.</li>
                                <li>To facilitate access to technological development and training.</li>
                                <li>To support relevant research in the key areas of the sector.</li>
                                <li>To promote links between primary producers, processors, and end users.</li>
                            </ul>
                        }
                    />
                </Link>

                <Link
                    href=''
                >
                    <AboutCard
                        title='CORE VALUES'
                        content={
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>Fair trade</li>
                                <li>Professionalism</li>
                                <li>Sustainable resource use</li>
                                <li>Integrity</li>
                                <li>Accountability</li>
                                <li>Team work</li>
                                <li>Partnerships and linkages</li>
                                <li>Empowerment of producers and associations</li>
                            </ul>
                        }
                    />
                </Link>
            </div>

            {/* Who we are */}
            <div className=' flex flex-col md:flex-row justify-center align-middle items-center w-full pt-5'>
                {/* Left */}
                <div className='md:w-1/2'>
                    <img src="/communication.jpg" alt="about pic"
                        style={{ width: '450px', height: '400px' }} />
                </div>

                {/* Right */}
                <div className='flex flex-col justify-center align-middle items-center md:w-2/3'>
                    {/* Top */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-3xl p-3'>
                            Who we are
                        </h1>

                        {/* Underline */}
                        <div className='border border-primary w-1/2' />

                        {/* Paragraph */}
                        <p className='pt-3 text-justify'>
                            Network on Forest Enterprises in Africa (NEFEA) is a Pan African organization assisting African producing countries and partners formulate a coordinated strategy for the sustainable development of their forest/tree resources and commodities, for improving rural livelihood and environmental conservation. The organization focuses more on enhancing value chains for improving rural livelihood and environmental conservation.
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-3xl p-3'>
                            Role of NEFEA in the sector
                        </h1>

                        {/* Underline */}
                        <div className='border border-primary w-1/2' />

                        {/* Paragraph */}
                        <p className='pt-3 text-justify'>
                            NEFEA brings together a broad set of stakeholders – farmers, collectors, traders, governments, non governmental organizations, exporters and importers – with a common desire to improve the production and quality of locally produced forest and tree comodities for domestic, regional and global markets.
                        </p>
                    </div>

                </div>
            </div>

            {/* Main Objectives */}
            <div className='pt-14'>
                {/* Title */}
                <h1 className='font-bold text-xl md:text-2xl pt-12 pb-3 px-3'>
                    NEFEA has four main objectives
                </h1>
            </div>

            {/* Cards */}
            <div className='flex flex-row flex-wrap justify-around align-middle items-start w-full'>
                <Card className='mx-1 my-3 w-1/3 md:w-1/5 h-[420px] md:h-[368px] lg:h-[320px]'>
                    <CardContent>
                        <div className='flex flex-col justify-center align-middle items-center py-2'>
                            {/* Icon */}
                            <div className='rounded-3xl bg-primary p-3'>
                                <File
                                    className='w-8 h-8'
                                />
                            </div>

                            {/* Title */}
                            <h1 className='font-bold text-lg md:text-2xl p-3'>
                                Information Exchange
                            </h1>

                            <p className='text-justify'>
                                To promote the exchange of information on the production, marketing, processing and quality control of gums and resins in producer countries and with partners
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className='mx-1 my-3 w-1/3 md:w-1/5 h-[420px] md:h-[368px] lg:h-[320px]'>
                    <CardContent>
                        <div className='flex flex-col justify-center align-middle items-center py-2'>
                            {/* Icon */}
                            <div className='rounded-3xl bg-primary p-3'>
                                <File
                                    className='w-8 h-8'
                                />
                            </div>

                            {/* Title */}
                            <h1 className='font-bold text-lg md:text-2xl p-3'>
                                Capacity strengthening
                            </h1>

                            <p className='text-justify'>
                                To facilitate access to technological development and training.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className='mx-1 my-3 w-1/3 md:w-1/5 h-[420px] md:h-[368px] lg:h-[320px]'>
                    <CardContent>
                        <div className='flex flex-col justify-center align-middle items-center py-2'>
                            {/* Icon */}
                            <div className='rounded-3xl bg-primary p-3'>
                                <File
                                    className='w-8 h-8'
                                />
                            </div>

                            {/* Title */}
                            <h1 className='font-bold text-lg md:text-2xl p-3'>
                                Research
                            </h1>

                            <p className='text-justify'>
                                To support relevant research in the key areas of the sector
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className='mx-1 my-3 w-1/3 md:w-1/5 h-[420px] md:h-[368px] lg:h-[320px]'>
                    <CardContent>
                        <div className='flex flex-col justify-center align-middle items-center py-2'>
                            {/* Icon */}
                            <div className='rounded-3xl bg-primary p-3'>
                                <File
                                    className='w-8 h-8'
                                />
                            </div>

                            {/* Title */}
                            <h1 className='font-bold text-lg md:text-2xl p-3'>
                                Coordination
                            </h1>

                            <p className='text-justify'>
                                To promote links between primary producers, processors and end users
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AboutSection
