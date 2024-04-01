import React from 'react'
import { Copyright } from 'lucide-react';

const EndFooter = () => {
  return (
    <div className='flex flex-row justify-between md:justify-around items-center align-middle w-full bg-accent h-4 text-primary py-4 fixed bottom-0'>
      <p className='italic text-sm flex flex-row'>
        <Copyright /> 2024 NGARA, All rights reserved.      
      </p>
    </div>
  )
}

export default EndFooter
