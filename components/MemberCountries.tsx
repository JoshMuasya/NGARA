"use client"

import React from 'react'

const memberCountries = [
  // Central Africa
  'Cameroon', 'Congo', 'DRC', 'Gabon', 'CAR', 'Chad', 'Nigeria',
  // Eastern Africa
  'Burundi', 'Eritrea', 'Ethiopia', 'Kenya', 'Sudan', 'Djibouti',
  'Rwanda', 'Somalia', 'South Sudan', 'Tanzania', 'Uganda',
  // Humid West Africa
  'Benin', "Ivory Coast", 'Ghana', 'Liberia', 'Sierra Leone', 'Togo',
  // SADC
  'Angola', 'Botswana', 'Lesotho', 'Madagascar', 'Malawi', 'Zambia',
  'Mozambique', 'Namibia', 'South Africa', 'Swaziland', 'Zimbabwe',
  // West Africa Sahel
  'Burkina Faso', 'Equatorial Guinea', 'Gambia', 'Guinea', 'Guinea-Bissau',
  'Mali', 'Mauritania', 'Niger', 'Senegal'
];

const MemberCountries = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-10 mt-14 w-full h-full">
      <h1 className="text-primary font-bold text-3xl text-center pb-5">
        Member Countries
      </h1>

      <hr className="border-accent border-2 w-2/3 mx-auto" />

      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {memberCountries.map((country) => {
            // Use mapped file name if available, otherwise convert country name
            const fileName = country.toLowerCase().replace(" ", "").replace("-", "");
            return (
              <div
                key={country}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/${fileName}.jpg`}
                  alt={`${country} map`}
                  className="w-32 h-32 object-contain mb-2"
                />
                <span className="text-lg font-semibold text-center">{country}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default MemberCountries
