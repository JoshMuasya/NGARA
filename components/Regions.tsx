'use client'

import React, { useState } from 'react'
import RegionAccordion from './RegionAccordion'
import Region from './Region';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button';

interface Country {
  cname: string;
  email: string;
  phone: string;
  publication: string;
  publicationLink: string;
}

const countries: { [key: string]: Country } = {
  ethiopia: {
    cname: "Wubalem Tadese",
    email: "wubalem16@gmail.com",
    phone: "+251 91 213 2303",
    publication: "ethiopia001",
    publicationLink: "ethiopia001.pdf",
  },
  eritrea: {
    cname: "",
    phone: "",
    email: "",
    publication: "",
    publicationLink: "",
  },
  kenya: {
    cname: "Meshack Muga",
    phone: "+254 722237193",
    email: "meshackmuga@hotmail.com",
    publication: "kenya001",
    publicationLink: "kenya001.pdf",
  },
  somalia: {
    cname: "",
    phone: "",
    email: "",
    publication: "",
    publicationLink: "",
  },
  southsudan: {
    cname: "Simon Dralley",
    phone: "+211 955192196",
    email: "dralley@gmail.com",
    publication: "southsudan001",
    publicationLink: "southsudan001.pdf",
  },
  uganda: {
    cname: "Daniel Aleper",
    phone: "+256 772 357743",
    email: "aleperdaniel@gmail.com",
    publication: "uganda001",
    publicationLink: "uganda001.pdf",
  },
  tanzania: {
    cname: "Chelestino Peter Balama (PhD)",
    phone: "+255 767 404873",
    email: "chelestino.balama@tafori.or.tz",
    publication: "tanzania001",
    publicationLink: "tanzania001.pdf",
  },
  sudan: {
    cname: "Prof. Mohamed Ballal",
    phone: "+249 912948554",
    email: "mohamedballal@yahoo.com",
    publication: "sudan001",
    publicationLink: "sudan001.pdf",
  },
  cameroon: {
    cname: "",
    phone: "",
    email: "",
    publication: "",
    publicationLink: "",
  },
  chad: {
    cname: "Bouba Ngoulou",
    phone: "",
    email: "ngouloubouba@yahoo.fr",
    publication: "chad001",
    publicationLink: "chad001.pdf",
  },
  burkinafaso: {
    cname: "Oubida Regis",
    phone: "+226 70130199",
    email: "oubidauregis@yahoo.fr",
    publication: "burkinafaso001",
    publicationLink: "burkinafaso001.pdf",
  },
  mali: {
    cname: "Jonas Diarra",
    phone: "+223 76078987",
    email: "jonadiarra@yahoo.fr",
    publication: "mali001",
    publicationLink: "mali001.pdf",
  },
  mauritania: {
    cname: "",
    phone: "",
    email: "",
    publication: "",
    publicationLink: "",
  },
  niger: {
    cname: "Harouna Oumarou",
    phone: "+227 96879865",
    email: "harouna.oumarou@yahoo.fr",
    publication: "niger001",
    publicationLink: "niger001.pdf",
  },
  nigeria: {
    cname: "Eng. Chidume Okoro",
    phone: "+234 8065540491",
    email: "gaconlimited@gmail.com",
    publication: "nigeria001",
    publicationLink: "nigeria001.pdf",
  },
  senegal: {
    cname: "Sakhoudia Thiam",
    phone: "+221 776317065",
    email: "thiamsak@yahoo.fr",
    publication: "",
    publicationLink: "",
  },
};

const Regions = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };

  const countryData = selectedCountry && countries[selectedCountry];

  return (
    <div className='flex pt-20 pb-10 flex-col justify-center items-center align-middle px-5 w-full h-full'>
      <h1 className='text-primary font-bold text-3xl text-center pb-5'>
        ROLE OF NGARA IN THE REGION
      </h1>

      <h2 className='font-bold text-2xl text-center pb-5'>
        NGARA has implemented projects with partners at the country level and regionally.
      </h2>

      <div className='w-full py-5'>
        <p className='text-center'>
          NGARA is playing an increasingly important role in encouraging the exchange of information on gum and resin production and trade; training; technology transfer; the assessment of resources and their sustainable use; enhancing the capacities of stakeholders in member countries; and harnessing the efficient use of available resources by strengthening synergies. The establishment of NGARA was a significant step in the development of the commercial gums and resins sector in African dry-lands as a way of increasing food security, assisting rural development and alleviating poverty.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-center align-middle items-center w-full'>
        {/* Left */}
        <div className='md:w-2/5 w-full'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-bold text-lg'>Eastern Africa</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle text-base">
                <Button onClick={() => handleCountrySelect('kenya')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Kenya</Button>
                <Button onClick={() => handleCountrySelect('tanzania')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Tanzania</Button>
                <Button onClick={() => handleCountrySelect('uganda')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Uganda</Button>
                <Button onClick={() => handleCountrySelect('ethiopia')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Ethiopia</Button>
                <Button onClick={() => handleCountrySelect('eritrea')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Eritrea</Button>
                <Button onClick={() => handleCountrySelect('somalia')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Somalia</Button>
                <Button onClick={() => handleCountrySelect('southsudan')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>South Sudan</Button>
                <Button onClick={() => handleCountrySelect('sudan')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Sudan</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='font-bold text-lg'>Central Africa</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle text-base">
                <Button onClick={() => handleCountrySelect('cameroon')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Cameroon</Button>
                <Button onClick={() => handleCountrySelect('chad')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Chad</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='font-bold text-lg'>SAHEL</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle text-base">
                <Button onClick={() => handleCountrySelect('burkinafaso')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Burkina Faso</Button>
                <Button onClick={() => handleCountrySelect('mali')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Mali</Button>
                <Button onClick={() => handleCountrySelect('mauritania')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Mauritania</Button>
                <Button onClick={() => handleCountrySelect('niger')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Niger</Button>
                <Button onClick={() => handleCountrySelect('nigeria')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Nigeria</Button>
                <Button onClick={() => handleCountrySelect('senegal')} className='p-5 m-2 font-semibold hover:font-bold hover:italic'>Senegal</Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right */}
        <div className='flex flex-col justify-center items-center align-middle h-full md:w-3/5 w-full'>
          <Region
            countryname={selectedCountry}
            cname={countryData ? countryData?.cname : ''}
            email={countryData ? countryData?.email : ''}
            phone={countryData ? countryData?.phone : ''}
            publications={countryData ? countryData?.publication : ''}
            publicationsLink={countryData ? countryData?.publicationLink : ''}
          />
        </div>
      </div>
    </div>
  )
}

export default Regions
