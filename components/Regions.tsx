import React from 'react'
import RegionAccordion from './RegionAccordion'

const Regions = () => {
  return (
    <div className='flex flex-col justify-center items-center align-middle px-5 w-full h-screen'>
      <h1 className='text-primary font-bold text-3xl text-center pb-5'>
        ROLE OF NGARA IN THE REGION
      </h1>

      <h2 className='font-bold text-2xl text-center pb-5'>
        NGARA has implemented projects with partners at the country level and regionally.
      </h2>

      <div className='flex flex-row justify-center align-middle items-center'>
        {/* Left */}
        <div className='md:w-3/5 w-full md:pr-7 pr-0'>
          <p className='text-center'>
            NGARA is playing an increasingly important role in encouraging the exchange of information on gum and resin production and trade; training; technology transfer; the assessment of resources and their sustainable use; enhancing the capacities of stakeholders in member countries; and harnessing the efficient use of available resources by strengthening synergies. The establishment of NGARA was a significant step in the development of the commercial gums and resins sector in African dry-lands as a way of increasing food security, assisting rural development and alleviating poverty.
          </p>
        </div>

        {/* Right */}
        <div className='md:w-2/5 w-full md:pl-7 pl-0'>
        <RegionAccordion />
        </div>
      </div>
    </div>
  )
}

export default Regions
