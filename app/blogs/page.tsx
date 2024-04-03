import BlogsCard from '@/components/BlogsCard'
import React from 'react'

interface Blog {
    title: string
    content: string
    category: string
    duration: string
    link: string
}

const BlogsData: Blog[] = [
    {
        title: "Blog 1",
        content: "Content 1",
        category: "Category 1",
        duration: "Duration 1",
        link: "/blogs/blog1"
    },

    {
        title: "Blog 4",
        content: "Content 4",
        category: "Category 4",
        duration: "Duration 4",
        link: "/blogs/blog4"
    },

    {
        title: "Blog 3",
        content: "Content 3",
        category: "Category 3",
        duration: "Duration 3",
        link: "/blogs/blog3"
    },

    {
        title: "Blog 2",
        content: "Content 2",
        category: "Category 2",
        duration: "Duration 2",
        link: "/blogs/blog2"
    }
]

const Blogs = () => {
    return (
        <div className='pt-20 px-5 pb-10'>
            {/* Title */}
            <h1 className='text-primary font-bold text-3xl text-center pb-5'>
                Stay Informed with Our Blog
            </h1>

            {/* Subtitle */}
            <h6 className='text-center text-sm'>
                Get the latest news and updates from our blog
            </h6>

            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center align-middle'>
                {BlogsData.map((blog, index) => (
                    <BlogsCard key={index} {...blog} />
                ))}
            </div>

            {/* More */}
            <div className='flex flex-col justify-center items-center align-middle w-full py-3 px-5'>
                {/* Title */}
                <h1 className='text-primary font-bold text-3xl text-center pb-5'>
                    Gums and Resins
                </h1>

                {/* Underline */}
                <div className='border border-primary w-1/2' />

                {/* content */}
                <div>
                    {/* Top */}
                    <div className='flex flex-col-reverse md:flex-row justify-center align-middle items-center'>
                        {/* Left */}
                        <div className='w-1/2'>
                            <img src="/gum.jpg" alt="blog pic"
                                style={{ width: '350px', height: '300px' }} />
                        </div>

                        {/* Right */}
                        <div className='flex flex-col justify-center align-middle items-center w-2/3'>

                            {/* Paragraph */}
                            <p className='pt-3 text-justify'>
                                Gum arabic is the substance exuded from Acacia senegal or Acacia seyal tree barks. These two species belong to the larger Mimosaceous Legumes plant family. Gum produced by Acacia senegal is known as ‘hard gum’ while gum from Acacia seyal is  known as ‘flaky gum’.

                                Gum arabic ranges from pale orangebrown in color and, when ruptured, releases a vitreous substance. Highquality gum arabic is round or tearshaped, orange-brown in colour with a non-glossy surface. When crushed or broken, the resulting pieces are paler in colour and vitreous. Unlike several other plant-based gums, gum arabic dissolves easily in water (up to 50%). Acacia senegal gum, in particular, has a low viscosity of 16ml/g on average. It forms a colourless, tasteless solution and is largely non-reactive when mixed with other chemical compounds.
                            </p>
                        </div>
                    </div>

                    {/* Top */}
                    <div className='flex flex-col-reverse md:flex-row-reverse justify-center align-middle items-center'>
                        {/* Left */}
                        <div className='w-1/2 pl-5'>
                            <img src="/table.png" alt="blog pic"
                                style={{ width: '350px', height: '300px' }} />
                        </div>

                        {/* Right */}
                        <div className='flex flex-col justify-center align-middle items-center w-2/3'>

                            <h3 className='font-bold text-xl'>
                                Chemical Composition of gums
                            </h3>

                            {/* Paragraph */}
                            <p className='pt-3 text-justify'>
                                Chemically, gum arabic is a slightly acidic complex compound composed of glycoproteins, polysaccharides and their associated calcium, magnesium and potassium salts. The key compound is a branched polysaccharide known as arabic acid or arabin. It is composed of a D- galactose (1,3)-linked base connected to branched (1,6)-linked L-arabinose, Lrhamnose and D-glucoronic acids. The proteins are known as arabinogalactans and are rich in hydroxyproline.
                            </p>

                            <p className='pt-3 text-justify'>
                                Gum arabic is a soluble, edible fibre. As a result, it remains functional within the organism as has been demonstrated by several studies. Edible fibres are defined as the remains of plant cells that are not completely hydrolyzed by enzymes in the small intestine and later diffuse into the large intestine, where they are fermented by microflora.
                            </p>

                            <p className='pt-3 text-justify'>
                                Polysaccharides from the membrane wall  (cellulose, semi-helluloses, and pectins) as well as cytoplasmic polysaccharides (gums, resistant starch and inulins) are also described as edible fibres.
                            </p>
                        </div>
                    </div>

                    {/* Top */}
                    <div className='flex flex-col-reverse md:flex-row justify-center align-middle items-center py-6'>
                        {/* Left */}
                        <div className='w-1/2'>
                            <img src="/gum 3.jpg" alt="blog pic"
                                style={{ width: '350px', height: '300px' }} />
                        </div>

                        {/* Right */}
                        <div className='flex flex-col justify-center align-middle items-center w-2/3'>

                            <h3 className='font-bold text-xl'>
                                Uses of Gum Arabic
                            </h3>

                            {/* Paragraph */}
                            <p className='pt-3 text-justify'>
                                Gum Arabic has several domestic uses namely in manufacturing ink, making adhesives, crafts making, in cosmetic products, in confectionary and in foodstuff. It is also utilized locally in special meals and as chewing gum. Focusing specifically on human consumption, Gum Arabic is an excellent dietary product because it contains less than 1cal for every gram.

                                The Hottentots in southern Africa can survive for several days on nothing but gums, while Moorish populations in northern Africa sustain a daily portion of 170g of gum (Grieve, 1931). Fagg and Stewart (1994) report that A. gerrardii is consumed in Oman whereas, according to Story (1958), bushmen in the Kalahari  consume A. mellifera subsp. detiens, A.  erioloba, A. erubescens, A. fleckii and A. tortilis subsp. heteracantha.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogs
