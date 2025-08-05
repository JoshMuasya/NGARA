import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import PrioritiesCard from './PrioritiesCard'

interface Props {
    title: string
    src: string
    alt: string
    href: string
    content: string
}

const dummyData: Props[] = [
    {
        title: 'Production',
        content: 'The sustainable production and restoration of forest resources and commodities promoted',
        src: '/production.png',
        alt: 'Production',
        href: '/production'
    },
    {
        title: 'Marketing',
        content: 'Marketing and investment of forest resources and commodities enhanced',
        src: '/marketing.png',
        alt: 'Marketing',
        href: '/marketing'
    },
    {
        title: 'Policy framework',
        content: 'Enabling policies and legal frameworks developed',
        src: '/policy.png',
        alt: 'Policy framework',
        href: '/policy'
    },
    {
        title: 'Capacity strengthening',
        content: 'Capacities at national and regional levels strengthened',
        src: '/capacity.png',
        alt: 'Capacity strengthening',
        href: '/capacity'
    },
    {
        title: 'Research and Development',
        content: 'Research and development supported',
        src: '/research.png',
        alt: 'Research and Development',
        href: '/research'
    },
    {
        title: 'Coordination strengthening',
        content: 'Coordination of national  and regional activities strengthened.',
        src: '/coordination.png',
        alt: 'Coordination strengthening',
        href: '/coordination'
    },
    {
        title: 'Communication, advocacy and visibility enhancement',
        content: 'To enhance communication among NEFEA\'s key stakeholders strengthened',
        src: '/communication.png',
        alt: 'Communication',
        href: '/communication'
    }
];

const Priorities = () => {
    return (
        <div className='w-full'>
            {/* Partners */}
            <div className=' flex flex-col md:flex-row justify-center align-middle items-center w-full pt-14 pb-10'>
                {/* Left */}
                <div className='md:w-1/3'>
                    <img src="/africa1.jpg" alt="about pic"
                        style={{ width: '300px', height: '250px' }} />
                </div>

                {/* Right */}
                <div className='flex flex-col justify-center align-middle items-center md:w-2/3 w-full'>
                    {/* Top */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-xl py-3'>
                            NEFEA Regional Presence and its mission
                        </h1>

                        {/* Paragraph */}
                        <p className='pt-3 text-justify'>
                            Since its establishment in 2000, NEFEA (rebranded from NGARA) has collaborated with various key partners in the development and implementation of a wide range of projects.
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-xl p-3'>
                            Partners
                        </h1>

                        {/* Underline */}
                        <div className='border border-primary w-1/3' />

                        {/* Partners */}
                        <div className='flex flex-row flex-wrap justify-center align-middle items-center pt-5'>
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
            </div>

            <div className='py-5 px-5 flex flex-col justify-center items-center align-middle back-pic bg-fixed bg-cover w-full h-full'>
                <Card className="w-full pb-5">
                    <CardHeader>
                        <CardTitle>
                            {/* Title */}
                            <h1 className='text-primary font-bold text-3xl text-center pb-3'>
                                Framework of NEFEA Priorities and Strategy
                            </h1>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Underline */}
                        <div className='border border-primary w-full' />

                        {/* Content */}
                        <div className='pt-3'>
                            <p className='text-justify'>
                                In an effort to contribute to Sustainable Forest Management (SFM) in the region, United Nations Strategic Plan on Forests (UNSPF) 2030 and the Sustainable Development Goals (SDGs) while putting in place strong institutional mechanisms for better coordination of the sector, NGARA has developed a Framework of Priorities 2030. Through the support of the African Union Commission (AUC), FAO and Africa Forest Forum (AFF), NGARA organized two regional workshops in Nairobi (August 2015) and Dakar (March 2016) that resulted in the development of the NGARA Strategy: Overview and Framework of Priorities 2017–2030. The NGARA strategy, which NEFEA will continue to implement, has identiﬁed seven key result areas and resulting ojectives as follows;
                            </p>
                        </div>

                    </CardContent>
                </Card>

                <div className='p-5 flex flex-col md:flex-row flex-wrap justify-center items-center align-middle'>
                    {dummyData.map((data) => (
                        <PrioritiesCard
                            key={data.title}
                            title={data.title}
                            src={data.src}
                            alt={data.alt}
                            href={data.href}
                            content={data.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Priorities
