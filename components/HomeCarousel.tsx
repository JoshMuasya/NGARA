'use client'

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

export function HomeCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const Images = [
        {
            id: 1,
            image: '/boswella.jpg',
            text: 'Boswelia neglecta Kenya'
        },
        {
            id: 2,
            image: '/women.jpg',
            text: 'Women cleaning Gum Arabic in Somali land'
        },
        {
            id: 3,
            image: '/cleaned.jpg',
            text: 'Woman and children cleaning Gum Arabic in Niger'
        },
        {
            id: 4,
            image: '/team.jpg',
            text: 'The NEFEA team with President Yoweri Museveni in Uganda'
        },
        {
            id: 5,
            image: '/arabic.jpg',
            text: 'Cleaned Gum Arabic in Niger'
        }
    ]

    return (
        <div className="flex justify-center align-middle">
            <Carousel setApi={setApi} className="lg:w-full md:w-1/2 w-full max-w-lg py-3">
                <CarouselContent>
                    {Images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                                    <img src={image.image} alt={image.text} />
                                    <span className="text-sm text-accent font-bold pt-3">{image.text}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
