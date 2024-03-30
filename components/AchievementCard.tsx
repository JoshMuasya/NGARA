import React from 'react'

import {
    Card,
    CardContent,
} from "@/components/ui/card"

const AchievementCard = () => {
    return (
        <div className='w-full relative'>
            {/* Bottom */}
            <div className=''>
                <Card className="w-[300px] rounded-3xl md:h-full bg-ring">
                    <CardContent className="w-full h-full p-3 md:p-5">
                        {/* Title */}
                        <h3 className='text-center font-bold text-2xl'>
                            Our Achievements
                        </h3>

                        {/* Content */}
                        <div className='pt-20 font-bold text-xl'>
                            <p className='py-2'>
                                16
                            </p>
                            <p className='py-2'>
                                1200
                            </p>
                            <p className='py-2'>
                                10,000
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Top */}
            <div className='absolute top-16 left-28'>
                <Card className="w-[300px] rounded-3xl md:h-full bg-primary">
                    <CardContent className="w-full h-full p-3 md:p-5">
                        {/* Content */}
                        <div className='pt-12 font-bold text-xl'>
                            <p className='py-2'>
                                Countries of Presence
                            </p>
                            <p className='py-2'>
                                Families empowered
                            </p>
                            <p className='py-2'>
                                Tonnes of Gums and Resins
                                Produced
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AchievementCard
