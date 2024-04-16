'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore'
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

    const handleDelete = async (galleryItem: Props) => {
        try {
          const galleryRef = doc(db, "Gallery", galleryItem.id); // Assuming you have an "id" field in each blog document
          await deleteDoc(galleryRef);
    
          // Update the blogData state to reflect the deletion
          setGalleryData(galleryData.filter((item) => item.id !== galleryItem.id)); // Assuming "id" field for filtering
        } catch (error) {
          console.error("Error deleting Image:", error);
        }
      }

    return (
        <div className='flex flex-row flex-wrap justify-center align-middle items-center w-full'>
            {galleryData.map((galleryItem, index) => (
                <div key={index}
                    className='flex flex-col justify-center items-center align-middle px-5'
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
                        onClick={() => handleDelete(galleryItem)}
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
