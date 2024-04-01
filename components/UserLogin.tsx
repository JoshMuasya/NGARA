'use client'

import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { loginWithGoogle } from '@/lib/userlogin'
import { handleSignIn } from './GoogleLogin'

const provider = new GoogleAuthProvider()

const UserLogin = () => {

    return (
        <div className='pt-20 h-screen w-full flex flex-col justify-center items-center align-middle'>
            <h1 className='font-bold text-xl pb-5'>Log in to Comment</h1>

            {/* Button */}
            <div className='flex justify-center w-full'>
                <Link
                    href=''
                    className={`${buttonVariants({ variant: "default" })} bg-ring bg-gradient-to-r from-primary to-ring hover:bg-primary`}
                    onClick={handleSignIn}
                >
                    Log In
                </Link>
            </div>
        </div>
    )
}

export default UserLogin
