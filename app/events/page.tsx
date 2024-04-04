import EventsDetails from '@/components/EventsDetails'
import React from 'react'

interface Events {
  title: string
  link: string
  author: string
  date: string
  abstract: string
}

const dummyData: Events[] = [
  {
      title: 'World Desertification and Drought Day 2021 – NGARA',
      author: 'Sheila',
      link: '/projects/desertification',
      date: 'July 17, 2021',
      abstract: 'A brief on the World Desertification and Drought Day 2021 – NGARA To commemorate the World Desertification and Drought Day 2021, the Africa Union…',
  },
  {
      title: '22nd AFWC and 6th Forestry and wildlife week where NGARA jointly participated with AFF in a side event.',
      link: '/projects/forestry',
      date: 'June 17, 2020',
      author: 'Sheila',
      abstract: 'In the Twenty-second Session of the African Forestry and Wildlife Commission (AFWC22) and the Sixth African Forestry and Wildlife Week (AFWW6), hosted by the Government…',
  },
  {
      title: 'Inception workshop for the GCF formulation cum FAO-NGARA project in Kumasi',
      author: 'Sheila',
      link: '/projects/inception',
      date: 'June 17, 2020',
      abstract: 'During the Kumasi workshop held from February 10-14, 2020 with the Theme of ” Scaling-Up Resilience in Africa’s Great Green Wall (SURAGGWA):  Capacity development and…',
  },
  {
    title: 'Jamaica’s REDD+ journey gets financial boost',
    author: 'Sheila',
    link: '/projects/financial',
    date: 'May 7, 2020',
    abstract: 'Jamaica’s journey to REDD+ readiness has been made easier through the receipt of funds under the Green Climate Fund’s (GCF) REDD+ Readiness Support and Preparatory Grant valued…',
},
];

const Events = () => {
  return (
    <div className='pb-10 pt-20 w-full flex flex-col justify-center align-middle items-center'>
      {/* Title */}
      <h1 className='font-bold text-3xl text-primary pb-5'>
        Events
      </h1>

      {/* Underline */}
      <div className='border border-primary w-1/3' />

      {/* Details */}
      <div className='flex flex-col md:flex-row flex-wrap justify-center align-middle items-center pt-10'>
          {dummyData.map((event, index) => (
            <EventsDetails key={index} {...event} />
          ))}
        </div>
    </div>
  )
}

export default Events
