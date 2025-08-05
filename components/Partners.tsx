import React from 'react'

const Partners = () => {
    return (
        <div className='w-full py-5'>
            {/* Bottom */}
            <div className='flex flex-col justify-center items-center align-middle w-full'>
                <h1 className='text-3xl font-bold'>
                    Key Partners
                </h1>
                {/* Partners */}
                <div className='flex flex-row flex-wrap justify-center items-center align-middle pt-8'>
                    <div className='p-5'>
                        <img src="/fao.png" alt="fao"
                            style={{ width: '100px', height: '100px' }} />
                    </div>

                    <div className='p-5'>
                        <img src="/au.png" alt="fao"
                            style={{ width: '100px', height: '70px' }} />
                    </div>

                    <div className='p-5'>
                        <img src="/aff.jpg" alt="fao"
                            style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div className='p-5'>
                        <img src="/terrafund.png" alt="fao"
                            style={{ width: '100px', height: '100px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
