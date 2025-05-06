import React from 'react'

const Board = () => {
    return (
        <div className='pt-20 pb-10 flex flex-col justify-center items-center align-middle'>
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
                                    Email: bchikamai@nefea.org
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

export default Board
