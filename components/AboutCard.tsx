import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const AboutCard = ({ title, content }: { title: string, content: React.ReactNode; }) => {
  return (
    <div>
      <Card className="md:w-[500px] w-[300px] rounded-3xl md:h-full border-primary border-2 m-3 shadow-md shadow-primary hover:shadow-ring">
        <CardContent className="w-full h-full p-3 md:p-5">
          {/* Title */}
          <h1 className='text-xlmd:text-3xl font-bold pb-3 text-primary'>
            {title}
          </h1>

          {/* Underline */}
          <div className='border border-primary w-full' />

          {/* Content */}
          <p className='pt-3 text-justify'>
            {content}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AboutCard
