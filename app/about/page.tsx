import AboutPage from '@/components/AboutPage'
import AboutSection from '@/components/AboutSection'
import Priorities from '@/components/Priorities'
import React from 'react'

const About = () => {
  return (
    <div className='pt-20 pb-8 flex flex-col justify-center items-center align-middle'>
      {/* Title */}
      <h1 className='text-primary font-bold text-3xl text-center pb-3'>
        About NGARA
      </h1>

      {/* Underline */}
      <div className='border border-primary w-1/3' />
      <AboutSection />
      <AboutPage />
      <Priorities />
    </div>
  )
}

export default About
