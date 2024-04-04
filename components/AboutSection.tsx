import React from 'react'
import AboutCard from './AboutCard'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const AboutSection = () => {
    return (
        <div className='py-10 flex flex-col justify-center items-center align-middle w-full'>
            <div className=' flex flex-row flex-wrap items-center align-middle justify-center'>
                <Link
                    href=''
                >
                    <AboutCard
                        title='OUR VISION'
                        content='The NGARA vision is to position African producer
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
                        content='The NGARA mission is to assist African producer countries
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
                            The Network for Natural Gums and Resins in Africa (NGARA) is a Pan African organization assisting African producing countries and partners formulate a coordinated strategy for the sustainable development of their natural gums, resins and allied dryland resources, for improving rural livelihood and environmental conservation. The organization focuses more on enhancing value chains for improving rural livelihood and environmental conservation.

                            The mission of NGARA is to position African producer countries and partners as major global players in the production, processing and marketing of gums, resins and allied tree based commodities from the drylands of Sub Saharan Africa.
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-3xl p-3'>
                            Role of NGARA in the sector
                        </h1>

                        {/* Underline */}
                        <div className='border border-primary w-1/2' />

                        {/* Paragraph */}
                        <p className='pt-3 text-justify'>
                            NGARA brings together a broad set of stakeholders – farmers, collectors, traders, governments, non governmental organizations, exporters and importers – with a common desire to improve the production and quality of locally produced gums and resins for domestic, regional and global markets. NGARA has 16 member countries (Map below), and it aims to also bring on board other countries in Africa with gum and resin resources.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection
