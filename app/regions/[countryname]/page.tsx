import CountryPage from '@/components/CountryPage'
import React from 'react'

const Countries = ({ params }: { params: { countryname: string } }) => {
  return (
    <div className='flex flex-col justify-center items-center align-middle pt-20'>
        <CountryPage 
        countryname={params.countryname}
        />
      Country page: {params.countryname}
    </div>
  )
}

export default Countries
