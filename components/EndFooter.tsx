import React from 'react'
import { Copyright } from 'lucide-react';

const EndFooter = () => {
  return (
    <div className='flex flex-row justify-center items-center align-middle w-full bg-accent h-4 text-primary py-4 fixed bottom-0'>
      <p className='italic text-sm flex flex-row justify-center items-center align-middle'>
        <Copyright /> 2024 NEFEA, All rights reserved.      
      </p>
    </div>
  )
}

export default EndFooter
