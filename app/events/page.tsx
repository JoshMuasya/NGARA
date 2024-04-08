'use client'

import EventsDetails from '@/components/EventsDetails'
import { db } from '@/lib/firebase'
import { collection, getDocs, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

interface Props {
  title: string
  author: string
  eventdate: string
  abstract: string
}

const Events = () => {
  const [eventData, setEventData] = useState<Props[]>([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const collectionRef = collection(db, "Events")
            let queryRef = query(collectionRef)

            if (queryRef) {
                const querySnapshot = await getDocs(queryRef)
                const data: Props[] = []

                querySnapshot.forEach((doc) => {
                    const dataFromDoc = doc.data() as Props
                    data.push({ ...dataFromDoc })
                })

                setEventData(data)
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

  return (
    <div className='pb-10 pt-20 w-full flex flex-col justify-center align-middle items-center'>
      {/* Title */}
      <h1 className='font-bold text-3xl text-primary pb-5'>
        Events
      </h1>

      {/* Underline */}
      <div className='border border-primary w-1/3' />

      {/* Details */}
      <div className='flex flex-col md:flex-row flex-wrap justify-center align-middle items-center pt-10 w-full'>
          {eventData.map((event, index) => (
            <EventsDetails key={index} 
            title={event?.title}
            author={event?.author} 
            eventdate={formatDate(event?.eventdate)} 
            abstract={event?.abstract} />
          ))}
        </div>
    </div>
  )
}

export default Events
