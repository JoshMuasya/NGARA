'use client'

import React, { useState } from 'react'
import { HomeCard } from './Card'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { HomeCarousel } from './HomeCarousel'

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

    const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsPopupOpen(true);
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
                    Network on Forest Enterprises in Africa (NEFEA)
                </h2>

                {/* Description */}
                <p className='pb-4'>
                    I am happy to inform you that <strong><a href="https://nefea.co.ke/" target="_blank" rel="noopener noreferrer">“The Network for Natural Gums and Resins in Africa (NGARA)”</a></strong> has been rebranded as <strong>“The Network on Forest Enterprises in Africa (NEFEA)”</strong>. Established in 2000 by sixteen member countries in the Sahel and Horn of Africa and nurtured by FAO in collaboration with the African Union Commision (AUC) until 2018 when it was formally registered as an International NGO by the Kenya NGOs Coordination Board, NGARA has played a great role of raising the profile of the African gums and resins among the key NTFPs to the global arena. In the process, NGARA has helped develop the gums and resins sector in the member countries by assisting to understand better the gums and reins producing species, characterize the properties of the commodities and how to distinguish them from possible adulterants thereby enhancing quality control, developing and streamlining the value chains and benefit sharing arrangements and linking producers to markets. Livelihoods of most communities and the contribution of gums and resins to the economies of member countries have improved drastically. The role of the resources in environmental conservation and especially with the advent of climate change has become more acknowledged. There is better collaboration between the Anglophone and Francophone speaking African countries and an evolving inter-regional trade. The accrued benefits are many. Thanks to our partners, the members governments and local communities who have been supportive and participated actively.
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
