'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function WidgetsAccordion({ onOptionClick }: { onOptionClick: (option: string) => void }) {
    const handleClick = (option: string) => {
        onOptionClick(option)
        console.log("clicked", option)
    }

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="blogs">
                <AccordionTrigger className="font-bold text-lg text-accent">Blogs</AccordionTrigger>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    Create
                </AccordionContent>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    View
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="projects">
                <AccordionTrigger className="font-bold text-lg text-accent">Projects</AccordionTrigger>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    Create
                </AccordionContent>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    View
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="publications">
                <AccordionTrigger className="font-bold text-lg text-accent">Publications</AccordionTrigger>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    Create
                </AccordionContent>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    View
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="events">
                <AccordionTrigger className="font-bold text-lg text-accent">Events</AccordionTrigger>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    Create
                </AccordionContent>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    View
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gallery">
                <AccordionTrigger className="font-bold text-lg text-accent">Gallery</AccordionTrigger>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                    
                >
                    Add
                </AccordionContent>
                <AccordionContent
                    className="text-base hover:italic cursor-pointer"
                >
                    View
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
