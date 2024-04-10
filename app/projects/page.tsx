'use client'

import ProjectHighlights from '@/components/ProjectHighlights'
import { db } from '@/lib/firebase'
import { collection, query, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

interface Props {
  title: string
  author: string
  datepublication: string
  datecompletion: string
  abstract: string
  content: string
  link: string
}

const Projects = () => {
  const [ongoingData, setOngoingData] = useState<Props[]>([])
  const [completedData, setCompletedData] = useState<Props[]>([])

  const formatDate = (timestamp: any) => {
    const date = new Date(timestamp.seconds * 1000);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "Projects")
        let queryRef = query(collectionRef)

        if (queryRef) {
          const querySnapshot = await getDocs(queryRef)
          const ongoing: Props[] = []
          const completed: Props[] = []
          const currentDate = new Date().getTime() / 1000;

          querySnapshot.forEach((doc) => {
            const dataFromDoc = doc.data() as Props;

            // Compare completion date with current date
            const completionDate = Math.floor(new Date(formatDate(dataFromDoc.datecompletion)).getTime() / 1000);

            if (completionDate < currentDate) {
              // Project is completed
              completed.push({ ...dataFromDoc });
            } else {
              // Project is ongoing
              ongoing.push({ ...dataFromDoc });
            }
          })

          setOngoingData(ongoing);
          setCompletedData(completed);
        }

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

console.log("Ongoing", ongoingData)
console.log(completedData)

  return (
    <div className="pt-20 pb-10 flex flex-col justify-center align-middle items-center w-full ">
      <div className=''>
        <div className='flex flex-col justify-center align-middle items-center w-full bg-white py-10'>
          {/* Title */}
          <h1 className='text-primary font-bold text-3xl text-center pb-2'>
            Projects
          </h1>

          {/* Underline */}
          <div className='border border-primary w-full' />

          <h2 className='font-bold text-xl text-center pt-7'>
            NGARA's Projects
          </h2>

          <p className='font-bold pt-2 pb-3 px-3'>
            There are currently three projects with one major goal; Development of Gums and Resins Sector for Socio-economic Well Being and Ecological Resilience
          </p>

          {/* Underline */}
          <div className='border w-full border-accent' />
        </div>

        {/* Projects */}
        <div className='flex flex-col justify-center align-middle items-center w-full pt-10'>
          {/* Project 1 */}
          <div className='flex flex-col md:flex-row justify-around align-middle items-start w-full bg-border py-5 '>
            {/* Left */}
            <div className='w-full md:w-1/2 md:pl-14 px-3'>
              <img src="/project1.jpg" alt="projects" />
            </div>

            {/* Right */}
            <div className='w-full md:w-1/2 flex flex-col justify-center align-middle items-center'>
              {/* Title */}
              <h2 className='font-bold text-lg pb-5'>
                1. Strengthening Capacity
              </h2>

              {/* Underline */}
              <div className='border border-accent w-1/3' />

              <p className='pt-3 text-center md:pr-10 px-5'>
                Strengthening Capacity among Stakeholders for Production and Trade in Gums and Resins in Africa – AFF, SDC. Four countries – Burkina Faso, Kenya, Niger & Tanzania.
              </p>

            </div>
          </div>

          {/* Project 2 */}
          <div className='flex flex-col md:flex-row-reverse justify-around align-middle items-start w-full py-10'>
            {/* Left */}
            <div className='w-full md:w-1/2 md:pl-14 px-3'>
              <img src="/project2.jpg" alt="projects" />
            </div>

            {/* Right */}
            <div className='w-full md:w-1/2 flex flex-col justify-center align-middle items-center'>
              {/* Title */}
              <h2 className='font-bold text-lg pb-5'>
                2. Employment Opportunities
              </h2>

              {/* Underline */}
              <div className='border border-accent w-1/3' />

              <p className='pt-3 text-center pr-10 pl-10'>
                Increasing Employment and Economic Opportunities for communities in Kenya's ASAL Counties through Unlocking their Gum Arabic potential. Partnership between GIZ and Acacia EPZ Limited to Build capacity of gum Arabic collectors & traders on Sustainable tapping methods, quality assurance and value addition in Kenya.
              </p>

            </div>
          </div>

          {/* Project 3 */}
          <div className='flex flex-col md:flex-row justify-around align-middle items-start w-full py-5 bg-border'>
            {/* Left */}
            <div className='w-full md:w-1/2 md:pl-14 px-3'>
              <img src="/project3.jpg" alt="projects" />
            </div>

            {/* Right */}
            <div className='w-full md:w-1/2 flex flex-col justify-center align-middle items-center'>
              {/* Title */}
              <h2 className='font-bold text-lg pb-5'>
                3. Strengthening the sector
              </h2>

              {/* Underline */}
              <div className='border border-accent w-1/3' />

              <p className='pt-3 text-center md:pr-10'>
                Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youths in Africa’s Drylands – FAO in Chad, Ethiopia, Mali, Nigeria, Senegal & S. Sudan
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Project Highlights */}
      <div className='flex flex-col justify-center align-middle items-center w-full'>
        {/* Title */}
        <h2 className='font-bold text-xl text-center pt-5 pb-7'>
          Project Highlights
        </h2>

        <h5 className='font-bold text-lg pb-10'>
          Ongoing Projects
        </h5>

        <div className='flex flex-col md:flex-row justify-center align-middle items-center w-full'>
          {ongoingData.map((project, index) => (
            <ProjectHighlights key={index} 
            title={project?.title} 
            author={project?.author} 
            datepublication={formatDate(project?.datepublication)} 
            abstract={project?.abstract} 
            link={project?.link}
            />
          ))}
        </div>

        <h5 className='font-bold text-lg pt-16 pb-10'>
          Completed Projects
        </h5>

        <div className='flex flex-col md:flex-row justify-center align-middle items-center w-full'>
          {completedData.map((project, index) => (
            <ProjectHighlights 
            key={index} 
            title={project?.title} 
            author={project?.author} 
            datepublication={formatDate(project?.datepublication)}  
            abstract={project?.abstract} 
            link={project?.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
