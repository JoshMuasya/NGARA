import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GalleryCreate } from "./GalleryCreate"

export function GalleryWidget() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Gallery Widget</CardTitle>
        <CardDescription>Fill in the form to add an image</CardDescription>
      </CardHeader>
      <CardContent>
        <GalleryCreate />        
      </CardContent>
    </Card>
  )
}
