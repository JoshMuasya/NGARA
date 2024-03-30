import React from 'react'
import AchievementCard from './AchievementCard'
import PartnerCircle from './PartnerCircle'

const Achievement = () => {
    return (
        <div className='pt-3 pb-8 px-2 md:px-5 w-full'>
            {/* Top */}
            <div className='flex flex-col md:flex-row justify-around items-center align-middle w-full'>
                {/* Left */}
                <div className='md:w-1/2 w-full'>
                    {/* Title */}
                    <h3 className='text-primary font-lg'>
                        <span className='font-bold text-2xl text-accent'>NGARA’s Impact:</span>
                        Transforming
                        African communities through
                        sustainable gum and resin
                        production.
                    </h3>

                    {/* content */}
                    <p>
                        NGARA has achieved significant milestones in promoting
                        the sustainable production of natural gums and resins in Africa.
                        Through our collaborative efforts with local communities,
                        we have created economic opportunites, preserved biodiversity,
                        and supported the livelihoods of thousands of people.
                    </p>
                </div>

                {/* Right */}
                <div className='md:w-1/2 pt-5 md:pl-10 md:pt-0 pl:0 w-full'>
                    <AchievementCard />
                </div>

            </div>

            {/* Bottom */}
            <div className='flex flex-col justify-center items-center align-middle pt-8'>
                <h1 className='text-3xl font-bold'>
                    Key Partners
                </h1>
                {/* Partners */}
                <div className='flex flex-row flex-wrap justify-around items-center align-middle pt-8'>
                    <PartnerCircle />
                    <PartnerCircle />
                    <PartnerCircle />
                    <PartnerCircle />
                </div>
            </div>
        </div>
    )
}

export default Achievement
