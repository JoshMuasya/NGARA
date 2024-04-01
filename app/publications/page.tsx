import Publication from '@/components/Publication'
import React from 'react'

interface Publication {
    category: string
    title: string
    content: string
    author: string
    link: string
    date: string
    duration: string
}

const dummyData: Publication[] = [
    {
        category: 'Technology',
        title: 'The Future of AI',
        content: 'Exploring the latest advancements in artificial intelligence.',
        author: 'John Doe',
        link: 'https://example.com/future-of-ai.pdf',
        date: '2022-10-15',
        duration: '1 hour'
    },
    {
        category: 'Science',
        title: 'Space Exploration 101',
        content: 'Journey through the cosmos and learn about space missions.',
        author: 'Jane Smith',
        link: 'https://example.com/space-exploration.pdf',
        date: '2022-09-20',
        duration: '45 minutes'
    },
    {
        category: 'Technology',
        title: 'New Title',
        content: 'New Content',
        author: 'New Author',
        link: 'https://example.com/new-entry.pdf',
        date: '2022-10-16',
        duration: '2 hours'
    },
    {
        category: 'Science',
        title: 'Another New Title',
        content: 'More New Content',
        author: 'Another Author',
        link: 'https://example.com/another-new-entry.pdf',
        date: '2022-10-17',
        duration: '3 hours'
    },
];

const PublicationsPage = () => {
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
            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center align-middle py-3'>
                {dummyData.map((publication, index) => (
                    <Publication key={index} {...publication} />
                ))}
            </div>

        </div>
    )
}

export default PublicationsPage
