import { GalleryCarousel } from '@/components/GalleryCarousel'
import React from 'react'

interface gallery {
  src: string
  alt: string
  description: string
}

const galleryData: gallery[] = [
  {
    src: '/gum 1.jpeg',
    alt: 'Gum 1',
    description: 'Gum 1',
  },
  {
    src: 'gum 2.jpg',
    alt: 'Gum 2',
    description: 'Gum 2',
  },
  {
    src: 'gum 3.jpg',
    alt: 'Gum 3',
    description: 'Gum 3',
  },
  {
    src: 'gum.jpg',
    alt: 'Gum',
    description: 'Gum',
  }
]

const Gallery = () => {
  return (
    <div className='flex flex-col justify-center items-center align-middle px-7 pb-5'>
      <h1 className='text-primary font-bold text-3xl text-center pb-5'>
        More from our Gallery
      </h1>

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center align-middle'>
        {galleryData.map((item, index) => (
          <GalleryCarousel
            key={index}
            src={item.src}
            alt={item.alt}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
