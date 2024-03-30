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

export function HomeCard() {
    return (
        <Card className="bg-primary w-full rounded-3xl h-screen md:h-full">
            <CardContent className="w-full h-full p-3 md:p-5">
                <img
                    src="/gum.jpg"
                    alt="Gum Picture"
                    className="w-full h-full object-cover"
                />
            </CardContent>
        </Card>
    )
}
