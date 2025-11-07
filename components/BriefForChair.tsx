import React from 'react'

const BriefForChair = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="w-5/6 flex flex-col justify-center items-start">
                {/* Title */}
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-3xl font-bold text-primary pb-2 text-center">
                        Chairman's Remark
                    </h1>
                </div>

                {/* Underline */}
                <div className="border border-primary w-full" />

                {/* Section 1 */}
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-xl font-bold pt-10 text-center">
                        Branding of the Network on Forest Enterprises in Africa (NEFEA)
                    </h2>
                </div>

                {/* Paragraph */}
                <p className="text-justify pt-5">
                    Following the branding of the Network on Forest Enterprises in Africa (NEFEA) in
                    November 2024, the NEFEA Board discussed the nature of the logo and what it embodies.
                </p>

                {/* Section 2 */}
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-lg font-bold pt-8">The Idea Behind the Logo</h2>
                </div>

                <p className="text-justify pt-3">
                    The design of the Network on Forest Enterprises in Africa (NEFEA) logo is rooted in
                    the continent’s natural heritage, integrating visual elements that directly speak to
                    NEFEA’s mission: promoting sustainable forest economies by enhancing value chains and
                    empowering stakeholders from grassroots to global markets while mitigating the adverse
                    effects of climate change.
                </p>

                <p className="text-justify pt-3">
                    The motif, organic yet structured, symbolizes the partnership and interconnected roles
                    of producers, processors, and consumers, unified under one continental agenda.
                </p>

                <p className="text-justify pt-3">
                    The use of earthy tones and natural shapes reflects NEFEA’s deep commitment to
                    ecological integrity, resilience against climate change, and rural empowerment. The
                    symmetry and balance in the logo suggest coordination—a key pillar of NEFEA’s work—
                    while clean, confident lines evoke professionalism, accountability, and integrity.
                </p>

                <p className="text-justify pt-3">
                    The logo is not just a design; it is a declaration. It stands for fair trade,
                    sustainable resource use, and Pan-African collaboration. It inspires trust, unity, and
                    purpose. Wherever this mark appears, it will signal NEFEA’s commitment to building a
                    greener, more equitable future for Africa’s forest enterprises.
                </p>

                {/* Section 3 */}
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-xl font-bold pt-10 text-center">
                        Website Development & Content Updates
                    </h2>
                </div>

                <ul className="list-disc pl-8 pt-3 space-y-1 text-justify">
                    <li>Revised the homepage</li>
                    <li>Enhanced the map of Africa for improved accuracy and visual clarity</li>
                    <li>Added link to the NGARA website</li>
                    <li>Updated the Regions page with layout adjustments and country-specific documents</li>
                    <li>
                        Added categories for Central Africa, Eastern Africa, Humid West Africa, SADC, and West
                        Africa Sahel
                    </li>
                    <li>Included publications from each country</li>
                </ul>

                {/* Section 4 */}
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-xl font-bold pt-10 text-center">
                        Integration with the NGARA Legacy Website
                    </h2>
                </div>

                <p className="text-justify pt-3">
                    The legacy website refers to the website that existed before the new deployment. The
                    following actions have been undertaken:
                </p>

                <ul className="list-disc pl-8 pt-3 space-y-1 text-justify">
                    <li>Domain acquisition – the website is hosted on <strong>nefea.co.ke</strong></li>
                    <li>Deployed the NGARA website on the domain</li>
                    <li>Rebuilt and restored the old NGARA website content</li>
                    <li>Integrated missing sections from the NGARA site into the new NEFEA website</li>
                </ul>

                {/* Section 5 */}
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-xl font-bold pt-10 text-center">Contact & Feedback</h2>
                </div>

                <p className="text-justify pt-3">
                    Integrated a feedback form to improve user engagement and collect visitor insights.
                </p>

                {/* Closing */}
                <p className="text-justify pt-6">
                    We will continue to improve the website to serve you better. Enjoy!
                </p>

                <div className="pt-8 pb-10">
                    <p><strong>Engr. Chidume Okoro</strong></p>
                    <p>The NEFEA Board Chairman</p>
                </div>
            </div>
        </div>
    )
}

export default BriefForChair
