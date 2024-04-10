'use client'

import { GalleryCarousel } from '@/components/GalleryCarousel'
import { db } from '@/lib/firebase'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

interface Props {
  image: string
  title: string
}

const Gallery = () => {
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

  return (
    <div className='flex flex-col justify-center items-center align-middle px-7 pb-5'>
      <h1 className='text-primary font-bold text-3xl text-center pb-5'>
        More from our Gallery
      </h1>

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center align-middle'>
        {galleryData.map((item, index) => (
          <GalleryCarousel
            key={index}
            image={item?.image}
            title={item?.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
