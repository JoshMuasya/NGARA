import React from 'react'

interface Props {
    src: string
    alt: string
    title: string
    content: string
    content1: string
    list1: string
    list2: string
    list3: string
    list4: string
}

const PrioritiesPage = ({src, alt, title, content, content1, list1, list2, list3, list4}: Props) => {
    const upperTitle = title.toUpperCase()

  return (
    <div className='flex flex-col justify-center items-center align-middle pb-10'>
        {/* Title */}
        <h1 className='font-bold text-2xl p-3'>
            {upperTitle}
        </h1>

        {/* Image */}
        <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        style={{ width: '300', height: '300' }}
        />

        {/* Result */}
        <h2 className='font-bold text-xl p-2'>
            Result area 
        </h2>

        <p>
            {content}
        </p>

        {/* Objective */}
        <h2 className='font-bold text-xl p-2'>
        Strategic Objective
        </h2>

        <p>
            {content1}
        </p>

        {/* Strategies */}
        <h2 className='font-bold text-xl p-2'>
        Strategies
        </h2>

        <p>
            <ul className='list-disc'>
                <li>
                    {list1}
                </li>
                <li>
                    {list2}
                </li>
                <li>
                    {list3}
                </li>
                <li>
                    {list4}
                </li>
            </ul>
        </p>
    </div>
  )
}

export default PrioritiesPage
