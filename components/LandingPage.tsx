'use client'

import React, { useState } from 'react'
import { HomeCard } from './Card'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { HomeCarousel } from './HomeCarousel'
import { useRouter } from 'next/navigation'

interface PopupProps {
    show: boolean;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed top-24 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 pb-10 rounded-lg w-5/6 md:w-1/2 lg:w-1/3 max-h-full overflow-y-auto">
                <h3 className="text-xl font-bold mb-4">The Network for Natural Gums and Resins in Africa (NGARA) has been re-branded to The Network on Forest Enterprises in Africa (NEFEA)
                </h3>
                <p className="mb-4">
                    I am happy to inform you that <a
                        href="https://example.com/ngara"
                        className="underline-important"
                    >“The Network for Natural Gums and Resins in Africa (NGARA)”</a> has been rebranded as <strong>“The Network on Forest Enterprises in Africa (NEFEA)”</strong>. Established in 2000 by sixteen member countries in the Sahel and Horn of Africa and nurtured by FAO in collaboration with the African Union Commision (AUC) until 2018 when it was formally registered as an International NGO by the Kenya NGOs Coordination Board, NGARA has played a great role of raising the profile of the African gums and resins among the key NTFPs to the global arena...
                </p>

                <ul>
                    <li><strong>New Look</strong>: Design using a new template.</li>
                    <li><strong>Improved Responsiveness</strong>: The website can be viewed on any gadget (desktop, mobile phone of various sizes, tablets, and iPads).</li>
                    <li><strong>Increased Navigation</strong>: Moving between pages within the website is enhanced.</li>
                    <li><strong>Optimized Search Engine</strong>: Ensures that articles and information on our website appear first on search engines such as Google.</li>
                    <li><strong>Interactive Blogs Page</strong>: Readers can interact with the NEFEA team by responding to the blogs.</li>
                    <li><strong>Interactive Map of Africa on the Homepage</strong>: The countries where NEFEA has a reach are hyperlinked. Clicking the country on the map takes a user to the regions page where one can view the publications and activities being conducted in the country.</li>
                    <li><strong>Interactive Events Page</strong>: Readers can respond to the activities NEFEA has been involved in.</li>
                    <li><strong>Security</strong>: Secure protocols are used for the data, information, and the website itself. The database is based on a secure platform to ensure 99% availability and accessibility.</li>
                </ul>
                <button
                    onClick={onClose}
                    className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const LandingPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const router = useRouter()

    const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("/about/chairmans-remark")
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='flex flex-col-reverse lg:flex-row justify-center md:justify-around align-middle items-start w-full h-full md:px-5 pt-8 pb-5 px-3'
            id='home'>
            {/* Left */}
            <div className='lg:w-1/2 w-full bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary flex flex-row justify-center items-center align-middle rounded-xl mt-10 lg:mt-0'>
                <HomeCarousel />
            </div>

            {/* Right */}
            <div className='lg:w-1/2 w-full flex flex-col justify-center items-center align-middle pt-5 lg:pl-7'>
                {/* Title */}
                <h2 className='text-4xl font-bold text-center pb-4'>
                    Branding of the Network on Forest Enterprises in Africa (NEFEA)
                </h2>

                {/* Description */}
                <p className='pb-4'>
                    Following the branding of the Network on Forest Enterprises in Africa (NEFEA) in November 2024, the NEFEA Board discussed the nature of the logo and what it embodies. <strong>The Idea Behind the Logo </strong> The design of the Network on Forest Enterprises in Africa (NEFEA) logo is rooted in the continent’s natural heritage, integrating visual elements that directly speak to NEFEA’s mission: promoting sustainable forest economies by enhancing value chains and empowering stakeholders from grassroots to global markets while mitigating the adverse effects of climate change.
                    The motif, organic yet structured, symbolizes the partnership and interconnected roles of producers, processors, and consumers, unified under one continental agenda.
                    The use of earthy tones and natural shapes reflects NEFEA’s deep commitment to ecological integrity, resilience against climate change, and rural empowerment. The symmetry and balance in the logo suggest coordination a key pillar of NEFEA’s work while clean, confident lines evoke professionalism, accountability, and integrity...
                </p>

                {/* Button */}
                <div className='flex justify-start w-full'>
                    <button
                        onClick={handleLearnMoreClick}
                        className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Popup */}
            <Popup show={isPopupOpen} onClose={handleClosePopup} />
        </div >
    )
}

export default LandingPage
