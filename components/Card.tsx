import * as React from "react"
import Image from "next/image"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { HomeCarousel } from "./HomeCarousel"

export function HomeCard() {
    return (
        <Card className="bg-primary w-full rounded-3xl h-fit md:h-full">
            <CardContent className="w-full h-full p-3 md:p-5">
                <HomeCarousel />
            </CardContent>
        </Card>
    )
}
