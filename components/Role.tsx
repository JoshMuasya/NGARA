import React from 'react'
import { Card, CardContent } from './ui/card'

const Role = () => {
    return (
        <div className='pb-14 px-5 flex flex-col md:flex-row justify-center align-middle items-center pt-10 w-full'>
            {/* Left */}
            <div className='flex flex-col justify-center items-center align-middle md:w-1/2 pr-10'>
                {/* Heading */}
                <h2 className='text-2xl font-bold text-center'>
                    NGARA has implemented projects with partners at the country level and regionally.
                </h2>

                {/* Paragraph */}
                <p>
                    NGARA is playing an increasingly important role in encouraging the exchange of information on gum and resin production and trade; training; technology transfer; the assessment of resources and their sustainable use; enhancing the capacities of stakeholders in member countries; and harnessing the efficient use of available resources by strengthening synergies. The establishment of NGARA was a significant step in the development of the commercial gums and resins sector in African dry-lands as a way of increasing food security, assisting rural development and alleviating poverty.
                </p>
            </div>

            {/* Right */}
            <div className='pt-3 md:pt-0'>
                <Card className="h-1/4 rounded-3xl p-2">
                    <CardContent>
                        <img src="/africa.jpg" alt="Gum Picture" className="object-cover"
                        style={{ height: '300px' }}/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Role