import Region from '@/components/Region'
import React from 'react'

const countries = {
    ethiopia: {
        cname: "Wubalem Tadese",
        email: "wubalem16@gmail.com",
        phone: "+251 91 213 2303",
        publication: "ethiopia001",
        publicationLink: "ethiopia001.pdf",
    },
    eritrea: {
        cname: "",
        phone: "",
        email: "",
        publication: "",
        publicationLink: "",
    },
    kenya: {
        cname: "Meshack Muga",
        phone: "+254 722237193",
        email: "meshackmuga@hotmail.com",
        publication: "kenya001",
        publicationLink: "kenya001.pdf",
    },
    somalia: {
        cname: "",
        phone: "",
        email: "",
        publication: "",
        publicationLink: "",
    },
    southsudan: {
        cname: "Simon Dralley",
        phone: "+211 955192196",
        email: "dralley@gmail.com",
        publication: "southsudan001",
        publicationLink: "southsudan001.pdf",
    },
    uganda: {
        cname: "Daniel Aleper",
        phone: "+256 772 357743",
        email: "aleperdaniel@gmail.com",
        publication: "uganda001",
        publicationLink: "uganda001.pdf",
    },
    tanzania: {
        cname: "Chelestino Peter Balama (PhD)",
        phone: "+255 767 404873",
        email: "chelestino.balama@tafori.or.tz",
        publication: "tanzania001",
        publicationLink: "tanzania001.pdf",
    },
    sudan: {
        cname: "Prof. Mohamed Ballal",
        phone: "+249 912948554",
        email: "mohamedballal@yahoo.com",
        publication: "sudan001",
        publicationLink: "sudan001.pdf",
    },
    cameroon: {
        cname: "",
        phone: "",
        email: "",
        publication: "",
        publicationLink: "",
    },
    chad: {
        cname: "Bouba Ngoulou",
        phone: "",
        email: "ngouloubouba@yahoo.fr",
        publication: "chad001",
        publicationLink: "chad001.pdf",
    },
    burkinafaso: {
        cname: "Oubida Regis",
        phone: "+226 70130199",
        email: "oubidauregis@yahoo.fr",
        publication: "burkinafaso001",
        publicationLink: "burkinafaso001.pdf",
    },
    mali: {
        cname: "Jonas Diarra",
        phone: "+223 76078987",
        email: "jonadiarra@yahoo.fr",
        publication: "mali001",
        publicationLink: "mali001.pdf",
    },
    mauritania: {
        contact: "",
        publication: "",
        publicationLink: "",
    },
    niger: {
        cname: "Harouna Oumarou",
        Telephone: "+227 96879865",
        Email: "harouna.oumarou@yahoo.fr",
        publication: "niger001",
        publicationLink: "niger001.pdf",
    },
    nigeria: {
        cname: "Eng. Chidume Okoro",
        Telephone: "+234 8065540491",
        Email: "gaconlimited@gmail.com",
        publication: "nigeria001",
        publicationLink: "nigeria001.pdf",
    },
    senegal: {
        cname: "Sakhoudia Thiam",
        Telephone: "+221 776317065",
        Email: "thiamsak@yahoo.fr",
        publication: "",
        publicationLink: "",
    },
};

const CountryDetails = ({ params }: { params: { countryname: string } }) => {

    const selectedCountry = params.countryname.toLowerCase() as keyof typeof countries;

    console.log("selected", selectedCountry)

    const countryData = countries[selectedCountry];

    console.log(countryData)

    return (
        <div className='flex flex-col justify-center items-center align-middle h-full md:h-screen '>
            <Region
                countryname={selectedCountry} // Pass actual country name
                cname={countryData?.cname || "Coming Soon"} // Handle missing name data
                email={countryData?.email || "Coming Soon"} // Handle missing email data
                phone={countryData?.phone || "Coming Soon"} // Handle missing phone data
                publications={countryData?.publication || "Coming Soon"} // Handle missing publication data
                publicationsLink={countryData?.publicationLink || "Coming Soon"} // Handle missing publication link
            />
        </div>
    )
}

export default CountryDetails
