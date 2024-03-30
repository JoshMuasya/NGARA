'use client'

import { Cross1Icon, HamburgerMenuIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-row justify-between md:justify-around items-center align-middle w-full bg-accent h-5 fixed top-0 left-0 text-primary py-8 md:px-0 px-3'>
            {/* Logo */}
            <div className='text-2xl font-black'>
                NGARA
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
                        <div className="flex flex-col justify-around align-middle items-center lg:hidden bg-accent h-fit fixed top-36 right-0 bottom-0 w-3/5 rounded-s-md">
                            <Link
                                href=''
                                className='hover:italic hover:text-primary py-5'
                            >
                                Home
                            </Link>

                            <Link
                                href=''
                                className='hover:italic hover:text-primary py-5'
                            >
                                About Us
                            </Link>
                            <Link
                                href=''
                                className='hover:italic hover:text-primary py-5'
                            >
                                Regions
                            </Link>
                            <Link
                                href=''
                                className='hover:italic hover:text-primary py-5'
                            >
                                Projects
                            </Link>
                            <Link
                                href=''
                                className='hover:italic hover:text-primary py-5'
                            >
                                Gallery
                            </Link>

                            <Link
                                href=''
                                className='hover:italic hover:text-primary py-5'
                            >
                                Publications
                            </Link>

                            <Link
                                href=''
                                className='hover:italic hover:text-primary py-5'
                            >
                                Contact Us
                            </Link>

                            <div className='flex flex-row justify-around items-center align-middle py-5'>
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
                        href=''
                        className='hover:italic hover:text-primary px-4'
                    >
                        Home
                    </Link>

                    <Link
                        href=''
                        className='hover:italic hover:text-primary px-4'
                    >
                        About Us
                    </Link>
                    <Link
                        href=''
                        className='hover:italic hover:text-primary px-4'
                    >
                        Regions
                    </Link>
                    <Link
                        href=''
                        className='hover:italic hover:text-primary px-4'
                    >
                        Projects
                    </Link>
                    <Link
                        href=''
                        className='hover:italic hover:text-primary px-4'
                    >
                        Gallery
                    </Link>

                    <Link
                        href=''
                        className='hover:italic hover:text-primary px-4'
                    >
                        Publications
                    </Link>

                    <Link
                        href=''
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
        </div>
    )
}

export default Navbar
