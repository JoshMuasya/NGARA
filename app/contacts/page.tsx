'use client'

import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div className='back-pic pt-24'>
            {/* Top */}
            <div className='flex flex-col justify-center align-middle items-center w-full'>
                <h1 className='text-primary font-bold text-3xl text-center absolute z-10'>
                    Contact Us
                </h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center align-middle items-start px-5 py-10 w-full'>
                {/* Map */}
                <div className='w-full md:w-1/2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.869017602017!2d36.8399583740979!3d-1.2498907355855917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173166db1675%3A0x525ca3793243bc8c!2sKenya%20Forestry%20Research%20Institute%20(Kefri)-Karura!5e0!3m2!1sen!2ske!4v1712211479662!5m2!1sen!2ske"
                        width="600"
                        height="450"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='border-2 rounded-xl border-primary w-full'
                    ></iframe>
                </div>

                {/* Contact */}
                <div className='w-full md:w-1/2 flex flex-col justify-center align-middle items-center bg-white mt-5 md:mt-0 md:ml-5 border-2 rounded-xl border-primary'>
                    {/* Global */}
                    <div className='flex flex-col justify-center w-full px-5 py-5'>
                        <h1 className='font-bold text-xl text-center pb-5'>
                            Global Contacts
                        </h1>

                        <p>
                            We would love to hear what you have to say. Below is our global office contacts you can use for inquiries.

                            For information on country-related programs, use the specific country contacts provided on the countries' respective pages <Link href='/regions' className='text-primary hover:underline'>here</Link>
                        </p>
                    </div>

                    {/* Local */}
                    <div className='flex flex-col justify-center w-full px-5 pb-5'>
                        <h1 className='font-bold text-xl text-center pb-5'>
                            Office location:
                        </h1>

                        <p>
                            The NEFEA Secretariat is hosted by the Kenya Forestry Research Institute, Forest Research Resource Centre which also serves as Kenya's National Focal Point.
                        </p>

                        <h3 className='font-bold text-base text-center pt-5 pb-3'>
                            Contact address
                        </h3>

                        <p>
                            The Network on Forest Enterprises in Africa (NEFEA) <br />
                            C/o KEFRI, Karura <br />
                            P. O. Box 64636 - 00620 <br />
                            Mobil Plaza, Nairobi, Kenya. <br />
                            E-mail: bchikamai@nefea.org <br />
                            Tel: +254 722 756483
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
