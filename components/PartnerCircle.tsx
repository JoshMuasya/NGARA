import React from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

const PartnerCircle = () => {
    return (
        <div className='px-5'>
            <Avatar className='bg-ring'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default PartnerCircle
