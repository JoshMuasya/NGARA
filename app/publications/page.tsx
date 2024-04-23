'use client'

import Publication from '@/components/Publication'
import { db } from '@/lib/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

interface Props {
    title: string
    author: string
    pdf: string
    abstract: string
    datepublication: string
}

const PublicationsPage = () => {
    const [publicationData, setPublicationData] = useState<Props[]>([])
    const [publicationsToShow, setPublicationsToShow] = useState<Props[]>([]);
    const [activePublication, setActivePublication] = useState<string | null>(null);
    const [journalData, setJournalData] = useState<Props[]>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Publications")
                let queryRef = query(collectionRef, orderBy('datepublication', 'desc'))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setPublicationData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        const fetchJournal = async () => {
            try {
                const collectionRef = collection(db, "Journals")
                let queryRef = query(collectionRef, orderBy('datepublication', 'desc'))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setJournalData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
        fetchJournal()

        setIsLoading(false);
    }, [])

    useEffect(() => {
        handleShowRecentPublications()
    }, [publicationData])

    const handleShowRecentPublications = () => {
        const recentPublications = publicationData.slice(0, 3); // Get the first 3 elements (most recent)
        setPublicationsToShow(recentPublications);
        setActivePublication("recent");
        console.log(publicationsToShow)
    };

    const handleShowAllPublications = () => {
        setPublicationsToShow(publicationData);
        setActivePublication("all"); // Set active state to "all"
    };

    const handleShowJournals = () => {
        setPublicationsToShow(journalData);
        setActivePublication("journals");
    }

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

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
            <div className='pt-10 w-full h-full flex flex-col md:flex-row justify-center align-middle items-start'>
                <div className="flex flex-col h-full items-start justify-center p-10">
                    <h2
                        className={`pt-3 pb-3 font-bold ${activePublication === "recent" ? 'text-primary' : 'text-accent'} text-2xl hover:italic cursor-pointer`}
                        onClick={handleShowRecentPublications}
                    >
                        Recent Publications
                    </h2>

                    <h2
                        className={`pt-3 pb-3 font-bold ${activePublication === "journals" ? 'text-primary' : 'text-accent'} text-2xl hover:italic cursor-pointer`}
                        onClick={handleShowJournals}
                    >
                        Journals
                    </h2>

                    <h2
                        className={`pt-3 pb-3 font-bold ${activePublication === "all" ? 'text-primary' : 'text-accent'} text-2xl hover:italic cursor-pointer`}
                        onClick={handleShowAllPublications}
                    >
                        All Publications
                    </h2>

                </div>
                {!isLoading && publicationsToShow.length > 0 && (
                    <div className='flex flex-col justify-center align-middle py-3'>
                        {publicationsToShow.map((publication, index) => (
                            <Publication
                                key={index}
                                title={publication?.title}
                                author={publication?.author}
                                pdf={publication?.pdf}
                                abstract={publication?.abstract}
                                datepublication={formatDate(publication?.datepublication)}
                            />
                        ))}
                    </div>
                )}

                {isLoading && <p>Loading publications...</p>}
            </div>
        </div>
    )
}

export default PublicationsPage
