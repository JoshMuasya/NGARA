'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function HomeCarousel() {
    const images = [
        "/gum.jpg",
        "/gum 1.jpeg",
        "/gum 2.jpg",
        "/gum 3.jpg"
    ];

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full p-3 bg-gradient-to-r from-primary to-ring rounded-xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="h-96">
                                <CardContent className="flex aspect-square items-start py-3  justify-center">
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className="object-cover" 
                                        />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
