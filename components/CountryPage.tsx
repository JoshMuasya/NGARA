import React from 'react'

const CountryPage = ({countryname}: {countryname: string}) => {
    const uppercaseCountryname = countryname.toUpperCase()
    const lowercaseCountryname = countryname.toLowerCase()

  return (
    <div className='w-full'>
      {/* Title */}
      <h1 className='text-primary font-bold text-3xl text-center pb-2'>
        {uppercaseCountryname}
      </h1>

      {/* underline */}
      <div className='border border-primary w-full'/>

      {/* Details */}
      <div className='pt-5 flex flex-col md:flex-row justify-center align-middle items-center'>

        {/* Left */}
        <div>
            <img 
            src={`/${lowercaseCountryname}.jpg`}
            alt={countryname}
            className="w-full h-full object-cover" 
            />
        </div>

        {/* Right */}
        <div>
            {/* Title */}
            <h1 className='font-bold text-2xl pb-2'>
                Country Contacts
            </h1>

            {/* Underline */}
            <div className='border border-black'/>

            

        </div>

      </div>
    </div>
  )
}

export default CountryPage
