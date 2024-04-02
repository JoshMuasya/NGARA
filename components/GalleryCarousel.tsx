import * as React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function GalleryCarousel({src, alt, description}: {src: string, alt: string, description: string}) {
  return (
    <div className="p-5">
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-3">
          <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          style={{ width: '250px', height: '200px' }}
          />
        </CardContent>
        <CardFooter>
          {description}
        </CardFooter>
      </Card>
    </div>
  )
}
