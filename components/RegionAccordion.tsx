import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"



const RegionAccordion = () => {
    
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full rounded-lg border h-screen"
        >
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='font-semibold'>Eastern Africa</AccordionTrigger>
                            <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle">
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Kenya
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Tanzania
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Uganda
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Ethiopia
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Eritrea
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Somalia
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    South Sudan
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Sudan
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='font-semibold'>Central Africa</AccordionTrigger>
                            <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle">
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Cameroon
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Chad
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='font-semibold'>SAHEL</AccordionTrigger>
                            <AccordionContent className="w-full flex flex-row flex-wrap justify-center items-center align-middle">
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Burkina Faso
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Mali
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Mauritania
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Niger
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Nigeria
                                </Link>
                                <Link
                                    href=''
                                    className='p-5'
                                >
                                    Senegal
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Two</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>

    )
}

export default RegionAccordion
