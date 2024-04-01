import { GalleryCarousel } from '@/components/GalleryCarousel'
import React from 'react'

const Gallery = () => {
  return (
    <div className='flex flex-col justify-center items-center align-middle px-7 pb-5 h-screen'>
        <h1 className='text-primary font-bold text-3xl text-center pb-5'>
            More from our Gallery
        </h1>
      <GalleryCarousel />
    </div>
  )
}

export default Gallery
