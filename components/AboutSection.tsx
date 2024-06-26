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
                marketing of gums and resins.'
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
                gum and resin resources to improve rural livelihoods and
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
                                <li>To promote the exchange of information on the production, marketing, processing, and quality control of gums and resins in producer countries and with partners.</li>
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
                            Networ on Forest Enterprises in Africa (NEFEA) is a Pan African organization assisting African producing countries and partners formulate a coordinated strategy for the sustainable development of their natural gums, resins and allied dryland resources, for improving rural livelihood and environmental conservation. The organization focuses more on enhancing value chains for improving rural livelihood and environmental conservation.

                            The mission of NEFEA is to position African producer countries and partners as major global players in the production, processing and marketing of gums, resins and allied tree based commodities from the drylands of Sub Saharan Africa.
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
                            NEFEA brings together a broad set of stakeholders – farmers, collectors, traders, governments, non governmental organizations, exporters and importers – with a common desire to improve the production and quality of locally produced gums and resins for domestic, regional and global markets. NGARA has 16 member countries (Map below), and it aims to also bring on board other countries in Africa with gum and resin resources.
                        </p>
                    </div>

                </div>
            </div>

            {/* Main Objectives */}
            <div>
                {/* Title */}
                <h1 className='font-bold text-xl md:text-2xl p-3'>
                    NEFEA has four main objectives
                </h1>
            </div>

            {/* Cards */}
            <div className='flex flex-row flex-wrap justify-around align-middle items-start w-full'>
                <Card className='mx-2 my-3 w-52'>
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

                <Card className='mx-2 my-3 w-52'>
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

                <Card className='mx-2 my-3 w-52'>
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

                <Card className='mx-2 my-3 w-52'>
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

            {/* Gums */}
            <div className='flex flex-row flex-wrap justify-around items-center md:items-start align-middle w-full pt-5'>
                <div className='flex flex-col justify-center align-middle items-center md:w-1/2 w-full md:pr-5'>
                    {/* Title */}
                    <h1 className='font-bold text-xl md:text-2xl p-3'>
                        The Gums
                    </h1>

                    <p className='text-justify'>
                        Commercial gum resins – myrrh, frankincense and hagar – are also known as oleo gum resins; they contain an essential oil component, a water-soluble gum and an alcohol-soluble resin.
                    </p>
                </div>

                {/* Image */}
                <div className='md:w-1/3 w-full md:pl-5 pl-0 md:pt-5 pt-0'>
                    <img src="/gum 2.jpg" alt="Gums" />
                </div>

            </div>
        </div>
    )
}

export default AboutSection
