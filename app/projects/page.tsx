'use client'

import ProjectHighlights from '@/components/ProjectHighlights'
import ProjectsCard from '@/components/ProjectsCard'
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
  const [projects, setProjects] = useState<Props[]>([])

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
          const data: Props[] = []

          querySnapshot.forEach((doc) => {
            const dataFromDoc = doc.data() as Props;
            data.push({ ...dataFromDoc })
          })

          setProjects(data)
        }

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="pt-20 pb-10 flex flex-col justify-center align-middle items-center w-full ">
      {/* Title */}
      <h1 className='text-primary font-bold text-3xl text-center pb-5'>
        View our Projects
      </h1>

      {/* Subtitle */}
      <h6 className='text-center text-sm'>
        Get an insight on our projects
      </h6>

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center align-middle'>
        {projects.map((project, index) => (
          <ProjectsCard
          key={index}
            title={project?.title}
            author={project?.author}
            abstract={project?.abstract}
            datepublication={formatDate(project?.datepublication)}
            datecompletion={formatDate(project?.datecompletion)}
            link={project?.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
