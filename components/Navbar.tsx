'use client'

import { Cross1Icon, HamburgerMenuIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { storage } from '@/lib/firebase'
import { getDownloadURL, ref } from 'firebase/storage'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(false)
    }

    const downloadPDF = async () => {
        try {
            const pdfRef = ref(storage, 'constitution/NEFEA CONSTITUTION - Final and in PDF (1).pdf')
            const downloadURL = await getDownloadURL(pdfRef);
            window.open(downloadURL, '_blank');
            return downloadURL;
        } catch (error) {
            console.error('Error getting PDF from storage:', error);
            return null; // Or throw an error if needed
          }
    }

    const handleMouseEnter = () => setDropdownOpen(true)
    const handleMouseLeave = () => setDropdownOpen(false)

    return (
        <div className='flex flex-row justify-between md:justify-around items-center align-middle w-full bg-accent h-8 fixed top-0 left-0 text-primary pb-14 pt-7 md:px-0 px-3 z-20'>
            {/* Logo */}
            <div>
                <img src="logo.png" alt="logo"
                    style={{ width: '150px', height: '100px' }} />
            </div>

            {/* Links */}
            <div>
                <div className='block lg:hidden'>
                    {isOpen ? (
                        <Cross1Icon
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-6 w-6 cursor-pointer"
                        />
                    ) : (
                        <HamburgerMenuIcon
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-6 w-6 cursor-pointer"
                        />
                    )}

                    {/* Drawer Menu for small screens */}
                    {isOpen && (
                        <div className="flex flex-col justify-around align-middle items-center lg:hidden bg-accent h-fit fixed top-24 right-0 w-3/5 rounded-s-md">
                            <Link
                                href='/#home'
                                className='hover:italic hover:text-primary pt-5 pb-2'
                                onClick={handleClick}
                            >
                                Home
                            </Link>

                            <div onClick={handleClick}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <h1 className='hover:italic hover:text-primary px-4 border-0 cursor-pointer'>
                                            About Us
                                        </h1>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-40">
                                        
                                        <DropdownMenuItem>
                                            <Link
                                                href='/about/vision'
                                                className='hover:italic hover:text-primary px-4 font-semibold'
                                                onClick={handleClick}
                                            >
                                                Mission and Vision
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href='/about/strategies'
                                                className='hover:italic hover:text-primary px-4 font-semibold'
                                                onClick={handleClick}
                                            >
                                                Strategies and Priorities
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href='/about/board'
                                                className='hover:italic hover:text-primary px-4 font-semibold'
                                                onClick={handleClick}
                                            >
                                                The Executive Board
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href='/about/constitution'
                                                className='hover:italic hover:text-primary px-4 font-semibold'
                                            >
                                                The Constitution
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href='/about/member-countries'
                                                className='hover:italic hover:text-primary px-4 font-semibold'
                                            >
                                                Member Countries
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href='/about/gums-resin'
                                                className='hover:italic hover:text-primary px-4 font-semibold'
                                            >
                                                Gums and Resins
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href='https://nefea.co.ke/' target="_blank" rel="noopener noreferrer"
                                                className='hover:italic hover:text-primary px-4 font-semibold'
                                            >
                                                NGARA
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>


                            <Link
                                href='/regions'
                                className='hover:italic hover:text-primary py-2'
                                onClick={handleClick}
                            >
                                Regions
                            </Link>

                            <Link
                                href='/publications'
                                className='hover:italic hover:text-primary py-2'
                                onClick={handleClick}
                            >
                                Publications
                            </Link>

                            <Link
                                href='/projects'
                                className='hover:italic hover:text-primary py-2'
                                onClick={handleClick}
                            >
                                Projects
                            </Link>

                            <Link
                                href='/blogs'
                                className='hover:italic hover:text-primary py-2'
                                onClick={handleClick}
                            >
                                Blogs
                            </Link>

                            <Link
                                href='/gallery'
                                className='hover:italic hover:text-primary py-2'
                                onClick={handleClick}
                            >
                                Gallery
                            </Link>

                            <Link
                                href='/events'
                                className='hover:italic hover:text-primary py-2'
                                onClick={handleClick}
                            >
                                Events
                            </Link>

                            <Link
                                href='/contacts'
                                className='hover:italic hover:text-primary pt-2 pb-5'
                                onClick={handleClick}
                            >
                                Contact Us
                            </Link>

                            <div className='flex flex-row justify-around items-center align-middle py-2'>
                                <Link
                                    href=''
                                    className='px-3'
                                >
                                    <LinkedInLogoIcon />
                                </Link>

                                <Link
                                    href=''
                                    className='px-3'
                                >
                                    <InstagramLogoIcon />
                                </Link>

                                <Link
                                    href=''
                                    className='px-3'
                                >
                                    <TwitterLogoIcon />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Links for large screens */}
                <div className="hidden lg:flex font-semibold text-base flex-row justify-around align-middle items-center w-full">
                    <Link
                        href='/#home'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Home
                    </Link>

                    <div 
                        className="hover:italic hover:text-primary px-4 relative cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        About Us
                        {dropdownOpen && (
                            <ul className="w-56 bg-white rounded-md shadow-sm absolute top-5 left-0">
                                <Link href='/about/vision'>
                                    <li className="text-accent hover:text-primary hover:bg-accent hover:italic px-3 py-2">
                                        Mission and Vision
                                    </li>
                                </Link>

                                <Link href='/about/strategies'>
                                    <li className="text-accent hover:text-primary hover:bg-accent hover:italic px-3 py-2">
                                        Strategies and Priorities
                                    </li>
                                </Link>

                                <Link href='/about/board'>
                                    <li className="text-accent hover:text-primary hover:bg-accent hover:italic px-3 py-2">
                                        The Executive Board
                                    </li>
                                </Link>

                                <Link 
                                href='/about/constitution'
                                >
                                    <li className="text-accent hover:text-primary hover:bg-accent hover:italic px-3 py-2">
                                        The Constitution
                                    </li>
                                </Link>

                                <Link 
                                href='/about/member-countries'
                                >
                                    <li className="text-accent hover:text-primary hover:bg-accent hover:italic px-3 py-2">
                                        Member Countries
                                    </li>
                                </Link>

                                <Link 
                                href='/about/gums-resin'
                                >
                                    <li className="text-accent hover:text-primary hover:bg-accent hover:italic px-3 py-2">
                                        Gums and Resins
                                    </li>
                                </Link>

                                <Link href='https://nefea.co.ke/' target="_blank" rel="noopener noreferrer">
                                    <li className="text-accent hover:text-primary hover:bg-accent hover:italic px-3 py-2">
                                        NGARA
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </div>
                    
                    <Link
                        href='/regions'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Regions
                    </Link>

                    <Link
                        href='/publications'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Publications
                    </Link>

                    <Link
                        href='/projects'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Projects
                    </Link>

                    <Link
                        href='/blogs'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Blogs
                    </Link>
                    <Link
                        href='/gallery'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Gallery
                    </Link>

                    <Link
                        href='/events'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Events
                    </Link>

                    <Link
                        href='/contacts'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Contact Us
                    </Link>
                </div>

            </div>

            {/* Socials */}
            <div className='flex-row justify-around items-center align-middle hidden lg:flex'>
                <Link
                    href=''
                    className='px-3'
                >
                    <LinkedInLogoIcon />
                </Link>

                <Link
                    href=''
                    className='px-3'
                >
                    <InstagramLogoIcon />
                </Link>

                <Link
                    href=''
                    className='px-3'
                >
                    <TwitterLogoIcon />
                </Link>
            </div>
        </div >
    )
}

export default Navbar
