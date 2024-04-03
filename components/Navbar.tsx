'use client'

import { Cross1Icon, HamburgerMenuIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <div className='flex flex-row justify-between md:justify-around items-center align-middle w-full bg-accent h-8 fixed top-0 left-0 text-primary py-8 md:px-0 px-3 z-20'>
            {/* Logo */}
            <div>
                <img src="logo.png" alt="logo" 
                style={{width: '100px', height: '50px'}}/>
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
                                href='/#home'
                                className='hover:italic hover:text-primary py-5'
                                onClick={handleClick}
                            >
                                Home
                            </Link>

                            <Link
                                href='/about'
                                className='hover:italic hover:text-primary py-5'
                                onClick={handleClick}
                            >
                                About Us
                            </Link>
                            <Link
                                href='/regions'
                                className='hover:italic hover:text-primary py-5'
                                onClick={handleClick}
                            >
                                Regions
                            </Link>
                            <Link
                                href='/gallery'
                                className='hover:italic hover:text-primary py-5'
                                onClick={handleClick}
                            >
                                Gallery
                            </Link>

                            <Link
                                href='/publications'
                                className='hover:italic hover:text-primary py-5'
                                onClick={handleClick}
                            >
                                Publications
                            </Link>

                            <Link
                                href='/blogs'
                                className='hover:italic hover:text-primary py-5'
                                onClick={handleClick}
                            >
                                Blogs
                            </Link>

                            <Link
                                href='/regions'
                                className='hover:italic hover:text-primary py-5'
                                onClick={handleClick}
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
                        href='/#home'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Home
                    </Link>

                    <Link
                        href='/about'
                        className='hover:italic hover:text-primary px-4'
                    >
                        About Us
                    </Link>
                    <Link
                        href='/regions'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Regions
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
                        href='/publications'
                        className='hover:italic hover:text-primary px-4'
                    >
                        Publications
                    </Link>

                    <Link
                        href='/regions'
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
