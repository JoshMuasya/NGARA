'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface Props {
    title: string
    image: string
    id: string
}

const GalleryList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [galleryData, setGalleryData] = useState<Props[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "Gallery")
                let queryRef = query(collectionRef, orderBy('dateupload', 'desc'))

                if (queryRef) {
                    const querySnapshot = await getDocs(queryRef)
                    const data: Props[] = []

                    querySnapshot.forEach((doc) => {
                        const dataFromDoc = doc.data() as Props
                        data.push({ ...dataFromDoc })
                    })

                    setGalleryData(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const handleDeleteGallery = async (galleryId: string) => {
        console.log(galleryId)
        try {
            const galleryQuery = query(collection(db, "Gallery"), where("id", "==", galleryId))

            await getDocs(galleryQuery)
                .then((querySnapshot) => {
                    if (querySnapshot.size === 1) {
                        const galleryRef = querySnapshot.docs[0].ref;
                        console.log("gallery found:", galleryRef); // Log after successful query

                        return deleteDoc(galleryRef);
                    } else {
                        console.log("gallery not found with the provided ID:", galleryId);
                    }
                })
                .then(() => {
                    // Update UI after successful deletion
                    setGalleryData(galleryData.filter((item) => item.id !== galleryId));
                })
                .catch((error) => {
                    console.error("Error deleting gallery", error);
                });
        } catch (error) {
            console.error("Error deleting gallery", error)
        }
    }

    return (
        <div className='flex flex-row flex-wrap justify-center align-middle items-center w-full'>
            {galleryData.map((galleryItem, index) => (
                <div key={index}
                    className='flex flex-col justify-center items-center align-middle px-5 pt-5'
                >
                    {/* Image */}
                    <div>
                        <img src={galleryItem?.image} alt={galleryItem?.title}
                            style={{ width: '250px', height: '150px' }}
                        />
                    </div>

                    {/* Title */}
                    <h5 className='text-accent font-bold text-sm py-3'>
                        {galleryItem?.title}
                    </h5>

                    {/* Button */}
                    <div className='w-full pt-8'>
                        <Button
                            variant={'destructive'}
                            onClick={() => handleDeleteGallery(galleryItem?.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GalleryList
