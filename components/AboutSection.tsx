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

            {/* Button */}
            <div className='flex justify-center w-full pt-3'>
                <Link
                    href=''
                    className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                >
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default AboutSection
