'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ArrowUpCircle } from 'lucide-react'

const BackTop = () => {
    const [showButton, setShowButton] = useState(false);

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div>
      {showButton && (
        <Button className='fixed right-5 bottom-10 bg-accent hover:bg-primary'>
          <ArrowUpCircle className='w-5 h-5' onClick={handleClick} />
        </Button>
      )}
    </div>
  )
}

export default BackTop
