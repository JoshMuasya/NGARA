'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields')
            return
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setStatus('Please enter a valid email address')
            return
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                setStatus('Thank you for your feedback!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Error: ' + (data.error || 'Something went wrong.'));
            }

            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error(error);
            setStatus('Error submitting form. Please try again later.');
        }

    }

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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.869017602017!2d36.8399583740979!3d-1.2498907355855917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173166db1675%3A0x525ca3793243bc8c!2sKenya%20Forestry%20Research%20Institute%20(Kefri)-Karura!5e0!3m2!1sen!2ske!4v1712211479662!5m2!1sen!2ske"
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
                            E-mail: info@nefea.org  <br />
                            Tel: +254 722 756483
                        </p>
                    </div>

                    {/* Feedback Form */}
                    <div className='flex flex-col justify-center w-full px-5 pb-5'>
                        <h1 className='font-bold text-xl text-center pb-5'>
                            Send Us Your Feedback
                        </h1>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor='name' className='font-medium'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='Your name'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='email' className='font-medium'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='Your email'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='message' className='font-medium'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='Your message'
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                className='bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90'
                            >
                                Submit
                            </button>
                            {status && (
                                <p className={`text-center ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact