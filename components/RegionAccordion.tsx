import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'

const RegionAccordion = () => {

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className='font-bold text-lg'>Eastern Africa</AccordionTrigger>
                <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle text-base">
                    <Link
                        href='/regions/Kenya'
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Kenya
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Tanzania
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Uganda
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Ethiopia
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Eritrea
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Somalia
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        South Sudan
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Sudan
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='font-bold text-lg'>Central Africa</AccordionTrigger>
                <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle text-base">
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Cameroon
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Chad
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='font-bold text-lg'>SAHEL</AccordionTrigger>
                <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle text-base">
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Burkina Faso
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Mali
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Mauritania
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Niger
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Nigeria
                    </Link>
                    <Link
                        href=''
                        className='p-5 font-semibold hover:font-bold hover:italic'
                    >
                        Senegal
                    </Link>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default RegionAccordion
