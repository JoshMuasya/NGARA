import React from 'react'

const AboutPage = () => {
    return (
        <div className='p-5 flex flex-col justify-center align-middle items-center w-full'>
            <div className=' flex flex-col md:flex-row justify-center align-middle items-center w-full'>
                {/* Left */}
                <div className='md:w-1/2'>
                    <img src="/communication.jpg" alt="about pic"
                        style={{ width: '450px', height: '400px' }} />
                </div>

                {/* Right */}
                <div className='flex flex-col justify-center align-middle items-center md:w-2/3'>
                    {/* Top */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-3xl p-3'>
                            Who we are
                        </h1>

                        {/* Underline */}
                        <div className='border border-primary w-1/2' />

                        {/* Paragraph */}
                        <p className='pt-3 text-justify'>
                            The Network for Natural Gums and Resins in Africa (NGARA) is a Pan African organization assisting African producing countries and partners formulate a coordinated strategy for the sustainable development of their natural gums, resins and allied dryland resources, for improving rural livelihood and environmental conservation. The organization focuses more on enhancing value chains for improving rural livelihood and environmental conservation.

                            The mission of NGARA is to position African producer countries and partners as major global players in the production, processing and marketing of gums, resins and allied tree based commodities from the drylands of Sub Saharan Africa.
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-3xl p-3'>
                            Role of NGARA in the sector
                        </h1>

                        {/* Underline */}
                        <div className='border border-primary w-1/2' />

                        {/* Paragraph */}
                        <p className='pt-3 text-justify'>
                            NGARA brings together a broad set of stakeholders – farmers, collectors, traders, governments, non governmental organizations, exporters and importers – with a common desire to improve the production and quality of locally produced gums and resins for domestic, regional and global markets. NGARA has 16 member countries (Map below), and it aims to also bring on board other countries in Africa with gum and resin resources.
                        </p>
                    </div>

                </div>
            </div>

            {/* Partners */}
            <div className=' flex flex-col md:flex-row justify-center align-middle items-center w-full pt-10'>
                {/* Left */}
                <div className='md:w-1/2'>
                    <img src="/africa1.jpg" alt="about pic"
                        style={{ width: '450px', height: '400px' }} />
                </div>

                {/* Right */}
                <div className='flex flex-col justify-center align-middle items-center md:w-2/3'>
                    {/* Top */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl p-3'>
                            NGARA Regional Presence and its mission
                        </h1>

                        {/* Paragraph */}
                        <p className='pt-3 text-justify'>
                            Since its establishment in 2000, NGARA has collaborated with various key partners in the development and implementation of a wide range of projects.
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
                        </div>
                    </div>

                </div>
            </div>

            {/* Executive */}
            <div className='flex flex-col justify-center items-center align-middle pt-8 w-full'>
                {/* Title */}
                <h1 className='font-bold text-2xl p-3'>
                    The Executive Board
                </h1>

                {/* Underline */}
                <div className='border border-primary w-1/3' />

                {/* Members */}
                <div className='flex flex-col justify-center align-middle items-center w-full'>
                    {/* Top */}
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Image */}
                        <div>
                            <img src="/okoro.jpg" alt="Chairman" />
                        </div>

                        {/* Name */}
                        <div>
                            <h1 className='font-bold text-xl pt-1 pb-2'>
                                Eng. Chidume Okoro
                            </h1>
                        </div>

                        {/* Rank */}
                        <div className='text-lg font-bold text-primary pb-1'>
                            <h3>
                                Chairman of the Board
                            </h3>
                        </div>

                        {/* country */}
                        <h4 className='font-semibold pb-2'>
                            Nigeria
                        </h4>

                        {/* Contacts */}
                        <div className='flex flex-col justify-center items-center align-middle'>
                            <p>
                                Telephone: +234 8065540491
                            </p>

                            <p>
                                Email: gaconlimited@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className='flex flex-row flex-wrap justify-around align-middle items-center py-6 w-full'>
                        <div className='flex flex-col justify-center align-middle items-center'>
                            {/* Image */}
                            <div>
                                <img src="/ben.jpg" alt="ben" />
                            </div>

                            {/* Name */}
                            <div>
                                <h1 className='font-bold text-xl pt-1 pb-2'>
                                    Dr. Ben Chikamai
                                </h1>
                            </div>

                            {/* Rank */}
                            <div className='text-lg font-bold text-primary pb-1'>
                                <h3>
                                    Executive Secretary
                                </h3>
                            </div>

                            {/* country */}
                            <h4 className='font-semibold pb-2'>
                                Kenya
                            </h4>

                            {/* Contacts */}
                            <div className='flex flex-col justify-center items-center align-middle'>
                                <p>
                                    Telephone:  +254 722756483
                                </p>

                                <p>
                                    Email: bnchikamai@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center align-middle items-center'>
                            {/* Image */}
                            <div>
                                <img src="/sheila.jpg" alt="shila" />
                            </div>

                            {/* Name */}
                            <div>
                                <h1 className='font-bold text-xl pt-1 pb-2'>
                                    Ms. Sheila Mbiru
                                </h1>
                            </div>

                            {/* Rank */}
                            <div className='text-lg font-bold text-primary pb-1'>
                                <h3>
                                    Treasurer
                                </h3>
                            </div>

                            {/* country */}
                            <h4 className='font-semibold pb-2'>
                                Kenya
                            </h4>

                            {/* Contacts */}
                            <div className='flex flex-col justify-center items-center align-middle'>
                                <p>
                                    Telephone: +254 721527994
                                </p>

                                <p>
                                    Email: sheilambiru@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center align-middle items-center'>
                            {/* Image */}
                            <div>
                                <img src="/moctar.jpg" alt="moctar" />
                            </div>

                            {/* Name */}
                            <div>
                                <h1 className='font-bold text-xl pt-1 pb-2'>
                                    Dr. Moctar Sacande
                                </h1>
                            </div>

                            {/* Rank */}
                            <div className='text-lg font-bold text-primary pb-1'>
                                <h3>
                                    Member
                                </h3>
                            </div>

                            {/* country */}
                            <h4 className='font-semibold pb-2'>
                                Burkina Faso
                            </h4>

                            {/* Contacts */}
                            <div className='flex flex-col justify-center items-center align-middle'>
                                <p>
                                    Telephone: +39 3482640277
                                </p>

                                <p>
                                    Email: msa4ande@gmail.com
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* Bottom */}
                    <div className='flex flex-row flex-wrap justify-around align-middle items-center w-full'>
                        <div className='flex flex-col justify-center align-middle items-center'>
                            {/* Image */}
                            <div>
                                <img src="/ballal.jpg" alt="ballal" />
                            </div>

                            {/* Name */}
                            <div>
                                <h1 className='font-bold text-xl pt-1 pb-2'>
                                    Prof. Mohamed Ballal
                                </h1>
                            </div>

                            {/* Rank */}
                            <div className='text-lg font-bold text-primary pb-1'>
                                <h3>
                                    Member
                                </h3>
                            </div>

                            {/* country */}
                            <h4 className='font-semibold pb-2'>
                                Sudan
                            </h4>

                            {/* Contacts */}
                            <div className='flex flex-col justify-center items-center align-middle'>
                                <p>
                                    Telephone: +249 912948554
                                </p>

                                <p>
                                    Email: mohamedballal@yahoo.com
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center align-middle items-center'>
                            {/* Image */}
                            <div>
                                <img src="/godwin.jpg" alt="godwin" />
                            </div>

                            {/* Name */}
                            <div>
                                <h1 className='font-bold text-xl pt-1 pb-2'>
                                    Prof. Godwin Kowero
                                </h1>
                            </div>

                            {/* Rank */}
                            <div className='text-lg font-bold text-primary pb-1'>
                                <h3>
                                    Member
                                </h3>
                            </div>

                            {/* country */}
                            <h4 className='font-semibold pb-2'>
                                Tanzania
                            </h4>

                            {/* Contacts */}
                            <div className='flex flex-col justify-center items-center align-middle'>
                                <p>
                                    Telephone: +254 721734864
                                </p>

                                <p>
                                    Email: g.kowero@cgiar.org
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center align-middle items-center'>
                            {/* Image */}
                            <div>
                                <img src="/abdou.jpg" alt="abdou" />
                            </div>

                            {/* Name */}
                            <div>
                                <h1 className='font-bold text-xl pt-1 pb-2'>
                                    Mr. Abdou Maisharou
                                </h1>
                            </div>

                            {/* Rank */}
                            <div className='text-lg font-bold text-primary pb-1'>
                                <h3>
                                    Member
                                </h3>
                            </div>

                            {/* country */}
                            <h4 className='font-semibold pb-2'>
                                Niger
                            </h4>

                            {/* Contacts */}
                            <div className='flex flex-col justify-center items-center align-middle'>
                                <p>
                                    Telephone: +227 96974182
                                </p>

                                <p>
                                    Email: maisharou.abdou@yahoo.fr
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
