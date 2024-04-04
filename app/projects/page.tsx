import ProjectHighlights from '@/components/ProjectHighlights'
import React from 'react'

interface Projects {
  title: string
  link: string
  author: string
  date: string
  abstract: string
}

const dummyData: Projects[] = [
  {
      title: 'Scaling-Up Resilience in Africa’s Great Green Wall (SURAGGWA),',
      author: 'Sheila',
      link: '/projects/SURAGGWA',
      date: 'June 17, 2020',
      abstract: 'The formulation of the GCF project to scale-up successful climate actions for the implementation of the AU GGW Initiative – FAO-NGARA project in Burkina, Chad, Mali, Niger,…',
  },
  {
      title: 'Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands',
      link: '/projects/drylands',
      date: 'June 17, 2020',
      author: 'Sheila',
      abstract: 'Coming Soon',
  },
  {
      title: 'Strengthening Capacity among Stakeholders for Production and Trade in Gums and Resins in Africa',
      author: 'Sheila',
      link: '/projects/strength',
      date: 'June 17, 2020',
      abstract: 'African Forest Forum through ﬁnancial support from the Swiss Agency for Development and Cooperation (SDC) covering four NGARA member countries; Burkina Faso, Kenya, Niger…',
  },
];

const completedProjects: Projects[] = [
  {
      title: 'Development of Gum Arabic, Aloe & Allied dryland resources in Karamoja Region, Uganda',
      author: '',
      link: '/projects/uganda',
      date: 'June 17, 2020',
      abstract: 'The project was an initiative by the President through the AGOA ofﬁce to empower local people in Karamoja Region improve livelihood from natural resources and mitigate insecurity. The project was undertaken between July 2006 and March 2008. The major activities involved identiﬁcation of commercially viable tree/plant resources in the region, mapping and assessment of the resources and market intelligence. At the end of the…',
  },
  {
      title: 'Food for Asset',
      link: '/projects/food',
      date: 'June 17, 2020',
      author: '',
      abstract: 'Food for Assets funded by the World Food Programme and Assisting communities at the Acacia Operation Project (AOP) field sites. In Kenya, the Acacia Operation Project (AOP) is working with the communities at the project sites through Project Management Committees (PMCs). The original idea of AOP was to have the communities contribute to the project in the form of land and labor. However,…',
  },
  {
      title: 'Acacia Operation Project (AOP)',
      author: '',
      link: '/projects/acacia',
      date: 'June 17, 2020',
      abstract: 'In collaboration with FAO NGARA implemented the “Acacia Operation Project (AOP) – Support to Food Security, Poverty Alleviation and Soil Degradation Control in the Gums and Resins Producer Countries with funds from the government of Italy through FAO” implemented from January 2004 – May 2006 with a cost extension up to August 2008 and thereafter a no cost extension until June 2010. The AOP had three components;…',
  },
];

const Projects = () => {
  return (
    <div className="pt-20 pb-10 flex flex-col justify-center align-middle items-center w-full">
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

      {/* Projects */}
      <div className='flex flex-col justify-center align-middle items-center w-full pt-10'>
        {/* Project 1 */}
        <div className='flex flex-col md:flex-row justify-around align-middle items-start w-full bg-border py-5'>
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

            <p className='pt-3 text-center md:pr-10'>
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
          {dummyData.map((project, index) => (
            <ProjectHighlights key={index} {...project} />
          ))}
        </div>

        <h5 className='font-bold text-lg pt-16 pb-10'>
          Completed Projects
        </h5>

        <div className='flex flex-col md:flex-row justify-center align-middle items-center w-full'>
          {completedProjects.map((project, index) => (
            <ProjectHighlights key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
