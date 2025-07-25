'use client'

import React, { useEffect, useState } from 'react'
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
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

interface Country {
  cname: string;
  email: string;
  phone: string;
  publication: string;
  publicationLink: string;
}

interface Props {
  title: string
  pdf: string
  datepublication: string
  country: string
  abstract: string
  author: string
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
  "south sudan": {
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
  "burkina faso": {
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
  const [selectedCountry, setSelectedCountry] = useState('kenya');
  const [publicationsData, setPublicationsData] = useState<Props[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "Publications")
        let queryRef = query(collectionRef, orderBy('datepublication', 'desc'))

        if (queryRef) {
          const querySnapshot = await getDocs(queryRef)
          const data: Props[] = []
          querySnapshot.forEach((doc) => {
            const dataFromDoc = doc.data() as Props
            if (dataFromDoc.country && dataFromDoc.country.trim() !== "") {
              if (dataFromDoc.country.toLowerCase() === selectedCountry) { // Replace with your logic to get selected country
                data.push({ ...dataFromDoc });
              }
            }
          })

          setPublicationsData(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [selectedCountry])

  console.log(publicationsData)

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };

  const countryData = selectedCountry && countries[selectedCountry];

  return (
    <div className='flex pt-24 pb-10 flex-col justify-center items-center align-middle px-5 w-full h-full'>
      <h1 className='text-primary font-bold text-3xl text-center pb-5'>
        ROLE OF NEFEA IN THE REGION
      </h1>

      <h2 className='font-bold text-2xl text-center pb-5'>
        NEFEA has implemented projects with partners at the country level and regionally.
      </h2>

      <div className='w-full py-5'>
        <p className='text-center'>
          NEFEA is playing an increasingly important role in encouraging the exchange of information in the production and trade of forest commodities; training; technology transfer; the assessment of resources and their sustainable use; enhancing the capacities of stakeholders in member countries; and harnessing the efficient use of available resources by strengthening synergies. The establishment of NEFEA was a significant step in the development of the commercial of forest enterprises in Africa sector in Africa as a way of increasing food security, assisting rural development and alleviating poverty.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-center align-middle items-start w-full'>
        {/* Left */}
        <div className='md:w-1/5 w-full'>
          <Accordion type="single" collapsible className="w-full">
            {/* Central Africa */}
            <AccordionItem value="item-2">
              <AccordionTrigger className='font-bold text-lg'>Central Africa</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap">
                <div className="flex flex-col w-1/2">  {/* First Column */}
                  <Button onClick={() => handleCountrySelect('cameroon')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Cameroon</Button>
                  <Button onClick={() => handleCountrySelect('congo')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Congo</Button>
                  <Button onClick={() => handleCountrySelect('drc')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>DRC</Button>
                  <Button onClick={() => handleCountrySelect('gabon')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Gabon</Button>
                </div>
                <div className="flex flex-col w-1/2">  {/* Second Column */}
                  <Button onClick={() => handleCountrySelect('car')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>CAR</Button>
                  <Button onClick={() => handleCountrySelect('chad')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Chad</Button>
                  <Button onClick={() => handleCountrySelect('nigeria')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Nigeria</Button>
                </div>
              </AccordionContent>
            </AccordionItem>


            {/* Eastern Africa */}
            <AccordionItem value="item-3">
              <AccordionTrigger className='font-bold text-lg'>Eastern Africa</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap">
                <div className="flex flex-col w-1/2">  {/* First Column */}
                  <Button onClick={() => handleCountrySelect('burundi')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Burundi</Button>
                  <Button onClick={() => handleCountrySelect('eritrea')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Eritrea</Button>
                  <Button onClick={() => handleCountrySelect('ethiopia')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Ethiopia</Button>
                  <Button onClick={() => handleCountrySelect('kenya')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Kenya</Button>
                  <Button onClick={() => handleCountrySelect('sudan')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Sudan</Button>
                  <Button onClick={() => handleCountrySelect('djibouti')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Djibouti</Button>
                </div>
                <div className="flex flex-col w-1/2">  {/* Second Column */}
                  <Button onClick={() => handleCountrySelect('djibouti')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Djibouti</Button>
                  <Button onClick={() => handleCountrySelect('rwanda')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Rwanda</Button>
                  <Button onClick={() => handleCountrySelect('somalia')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Somalia</Button>
                  <Button onClick={() => handleCountrySelect('south sudan')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>South Sudan</Button>
                  <Button onClick={() => handleCountrySelect('tanzania')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Tanzania</Button>
                  <Button onClick={() => handleCountrySelect('uganda')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Uganda</Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Humid West Africa */}
            <AccordionItem value="item-5">
              <AccordionTrigger className='font-bold text-lg'>Humid West Africa</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap">
                <div className="flex flex-col w-1/2">  {/* First Column */}
                  <Button onClick={() => handleCountrySelect('benin')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Benin</Button>
                  <Button onClick={() => handleCountrySelect('cote divoire')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Côte d'Ivoire</Button>
                  <Button onClick={() => handleCountrySelect('ghana')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Ghana</Button>
                  <Button onClick={() => handleCountrySelect('liberia')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Liberia</Button>
                </div>
                <div className="flex flex-col w-1/2">  {/* Second Column */}
                  <Button onClick={() => handleCountrySelect('sierra leone')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Sierra Leone</Button>
                  <Button onClick={() => handleCountrySelect('togo')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Togo</Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* SADC */}
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-bold text-lg'>SADC</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap">
                <div className="flex flex-col w-1/2"> {/* First Column */}
                  <Button onClick={() => handleCountrySelect('angola')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Angola</Button>
                  <Button onClick={() => handleCountrySelect('botswana')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Botswana</Button>
                  <Button onClick={() => handleCountrySelect('lesotho')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Lesotho</Button>
                  <Button onClick={() => handleCountrySelect('madagascar')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Madagascar</Button>
                  <Button onClick={() => handleCountrySelect('malawi')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Malawi</Button>
                  <Button onClick={() => handleCountrySelect('zambia')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Zambia</Button>
                </div>
                <div className="flex flex-col w-1/2"> {/* Second Column */}
                  <Button onClick={() => handleCountrySelect('mozambique')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Mozambique</Button>
                  <Button onClick={() => handleCountrySelect('namibia')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Namibia</Button>
                  <Button onClick={() => handleCountrySelect('south africa')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>South Africa</Button>
                  <Button onClick={() => handleCountrySelect('swaziland')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Swaziland</Button>
                  <Button onClick={() => handleCountrySelect('zimbabwe')} className='w-28 m-2 font-semibold hover:font-bold hover:italic'>Zimbabwe</Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* West Africa Sahel */}
            <AccordionItem value="item-4">
              <AccordionTrigger className='font-bold text-lg'>West Africa Sahel</AccordionTrigger>
              <AccordionContent className="w-full flex flex-row flex-wrap">
                <div className="flex flex-col w-1/2">  {/* First Column */}
                  <Button onClick={() => handleCountrySelect('burkina faso')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Burkina Faso</Button>
                  <Button onClick={() => handleCountrySelect('equatorial guinea')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Equatorial Guinea</Button>
                  <Button onClick={() => handleCountrySelect('gambia')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Gambia</Button>
                  <Button onClick={() => handleCountrySelect('guinea')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Guinea</Button>
                  <Button onClick={() => handleCountrySelect('guinea-bissau')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Guinea-Bissau</Button>
                </div>
                <div className="flex flex-col w-1/2">  {/* Second Column */}
                  <Button onClick={() => handleCountrySelect('mali')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Mali</Button>
                  <Button onClick={() => handleCountrySelect('mauritania')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Mauritania</Button>
                  <Button onClick={() => handleCountrySelect('niger')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Niger</Button>
                  <Button onClick={() => handleCountrySelect('senegal')} className='w-32 m-2 font-semibold hover:font-bold hover:italic'>Senegal</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>

        {/* Right */}
        <div className='flex flex-col justify-center items-center align-middle h-full md:w-4/5 w-full'>
          {publicationsData && (
            <Region
              countryname={selectedCountry}
              cname={countryData ? countryData?.cname : ''}
              email={countryData ? countryData?.email : ''}
              phone={countryData ? countryData?.phone : ''}
              publications={publicationsData}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Regions
