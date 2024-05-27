import React from 'react'
import AchievementCard from './AchievementCard'
import PartnerCircle from './PartnerCircle'

const Achievement = () => {
    return (
        <div className='pt-14 pb-10 px-2 md:px-5 w-full'>
            {/* Top */}
            <div className='flex flex-col md:flex-row justify-around items-center align-middle w-full'>
                {/* Left */}
                <div className='md:w-1/3 w-full'>
                    {/* Title */}
                    <h3 className='text-primary font-lg'>
                        <span className='font-bold text-2xl text-accent'>NEFEA’s Impact:</span>
                        Transforming
                        African communities through
                        sustainable gum and resin
                        production.
                    </h3>

                    {/* content */}
                    <p>
                        NEFEA has achieved significant milestones in promoting
                        the sustainable production of natural gums and resins in Africa.
                        Through our collaborative efforts with local communities,
                        we have created economic opportunites, preserved biodiversity,
                        and supported the livelihoods of thousands of people.
                    </p>
                </div>

                {/* Right */}
                <div className='md:w-1/3 pt-5 md:pl-5 md:pt-0 pl:0 w-full'>
                    <AchievementCard />
                </div>

            </div>
        </div>
    )
}

export default Achievement
