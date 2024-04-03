'use client'

import Publication from '@/components/Publication'
import React, { useEffect, useState } from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

interface Publication {
    title: string
    author: string
    link: string
    date: string
    duration: string
    abstract: string
    publish: string
}

const dummyData: Publication[] = [
    {
        title: 'Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands – A Regional Synthesis Report And Support to the formulation of a GCF project on: Scaling-Up Resilience in Africa’s Great Green Wall (SURAGGWA)',
        author: 'Ben Chikamai and Maisharou Abdou',
        link: 'https://ngara.org/wp-content/uploads/2024/FinalNarrativeReportonFAO-NGARAStudiesonGumArabic.pdf',
        date: '2024-03-15',
        duration: '1 hour',
        abstract: 'Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands – A Regional Synthesis Report And Support to the formulation of a GCF project on: Scaling-Up Resilience in Africa’s Great Green Wall (SURAGGWA)',
        publish: '2024-03-01'
    },
    {
        title: 'Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands – Report on Trade and Markets of Gum Arabic (Business Perspective)',
        author: 'Chidume Okoro and Mohamed El Mukhtar Ballal',
        link: 'https://ngara.org/wp-content/uploads/2024/ReportonTradeandMarketsofGumArabic.pdf',
        date: '2024-03-20',
        duration: '45 minutes',
        abstract: 'Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands – Report on Trade and Markets of Gum Arabic (Business Perspective)',
        publish: '2024-02-15'
    },
    {
        title: 'Strengthening capacity among stakeholders for the production and trade in gums and resins in selected African countries',
        author: 'B. Chikamai and M. Abdou',
        link: 'https://ngara.org/wp-content/uploads/2024/StrengtheningcapacityamongstakeholdersfortheproductionandtradeingumsandresinsinselectedAfricancountries.pdf',
        date: '2024-04-01',
        duration: '2 hours',
        abstract: 'Strengthening capacity among stakeholders for the production and trade in gums and resins in selected African countries',
        publish: '2024-02-23'
    },
    {
        title: 'Strengthening capacity among stakeholders for the production and trade in gums and resins',
        author: 'B. Chikamai and M. Abdou',
        link: 'https://ngara.org/wp-content/uploads/2024/StrengtheningcapacityamongstakeholdersfortheproductionandtradeingumsandresinsinselectedAfricancountries.pdf',
        date: '2024-03-16',
        duration: '2 hours',
        abstract: 'Strengthening capacity among stakeholders for the production and trade in gums and resins',
        publish: '2024-02-05'
    }
];

const PublicationsPage = () => {
    const [showAllPublications, setShowAllPublications] = useState(false);
    const [latestPublications, setLatestPublications] = useState<Publication[]>([]);

    useEffect(() => {
        const sortedData = dummyData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setLatestPublications(sortedData.slice(0, 3));
    }, []);

    const handleShowAllPublications = () => {
        setShowAllPublications(true);
    };

    const handleShowRecentPublications = () => {
        setShowAllPublications(false);
    };

    return (
        <div className='pt-20 px-5 pb-10 '>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-5'>
                PUBLICATIONS BY NGARA
            </h1>

            {/* Subtitle */}
            <h6 className='text-center text-sm'>
                Stay updated with our latest publications
            </h6>

            {/* Separator */}
            <div className='pt-10 w-full h-full flex flex-col md:flex-row justify-center align-middle items-center'>
                <div className="flex flex-col h-full items-center justify-center p-10">
                    <h2
                        className={`pt-3 pb-3 font-bold ${showAllPublications ? 'text-accent' : 'text-primary'} text-2xl hover:italic cursor-pointer`}
                        onClick={handleShowRecentPublications}
                    >
                        Recent Publications
                    </h2>

                    <h2
                        className={`pt-3 pb-3 font-bold ${showAllPublications ? 'text-primary' : 'text-accent'} text-2xl hover:italic cursor-pointer`}
                        onClick={handleShowAllPublications}
                    >
                        All Publications
                    </h2>
                </div>
                <div>
                    {showAllPublications ? (
                        <div className='flex flex-col justify-center align-middle py-3'>
                            {dummyData.map((publication, index) => (
                                <Publication key={index} {...publication} />
                            ))}
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center align-middle py-3'>
                            {latestPublications.map((publication, index) => (
                                <Publication key={index} {...publication} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PublicationsPage
