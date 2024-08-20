'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Props {
    title: string
    author: string
    duration: string
    category: string
    image: string
    abstract: string
    content: string
    datepublication: string
    id: string
}

const ProjectsList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [projectData, setProjectData] = useState<Props[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Projects")
                let queryRef = query(collectionRef)

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setProjectData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const formatDate = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const handleDeleteProject = async (projectId: string) => {
        try {
            const projectQuery = query(collection(db, "Projects"), where("id", "==", projectId))

            await getDocs(projectQuery)
                .then((querySnapshot) => {
                    if (querySnapshot.size === 1) {
                        const projectRef = querySnapshot.docs[0].ref;
                        console.log("Project found:", projectRef); // Log after successful query

                        return deleteDoc(projectRef);
                    } else {
                        console.log("Project not found with the provided ID:", projectId);
                    }
                })
                .then(() => {
                    // Update UI after successful deletion
                    setProjectData(projectData.filter((item) => item.id !== projectId));
                })
                .catch((error) => {
                    console.error("Error deleting comment", error);
                });
        } catch (error) {
            console.error("Error deleting comment", error)
        }
    }

    return (
        <div className='flex flex-col justify-center align-middle items-start w-full'>
            {projectData.map((projectItem, index) => (
                <div key={index}
                    className='pb-10'
                >
                    {/* Title */}
                    <h1 className='font-bold text-lg md:text-xl'>
                        {projectItem?.title}
                    </h1>

                    {/* Top Details */}
                    <div className='flex flex-row flex-wrap justify-around align-middle items-center w-full font-semibold italic text-sm md:text-base cursor-pointer'>
                        {/* author */}
                        <h3 className='hover:underline hover:bold'>
                            {projectItem?.author}
                        </h3>

                        <h3 className='hover:underline hover:bold'>
                            {projectItem?.duration}
                        </h3>

                        <h3 className='hover:underline hover:bold'>
                            {projectItem?.category}
                        </h3>

                        <h3 className='hover:underline hover:bold'>
                            {formatDate(projectItem?.datepublication)}
                        </h3>
                    </div>

                    {/* Abstract */}
                    <div className='w-full flex flex-row justify-between items-start align-middle'>
                        <div className='w-3/4'>
                            <p>
                                {projectItem?.abstract}
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className='w-full pt-8'>
                        <Button
                            variant={'destructive'}
                            onClick={() => handleDeleteProject(projectItem.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectsList
