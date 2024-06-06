import React from 'react';

export default function Accomodations() {
    return (
        <div>
            <div className="dark:bg-gray-100  p-6 rounded-sm pl-20 pr-20">
            <p>NIT Delhi will not be able to provide any accommodation during the ICECSP 2024 conference, 
            however, for the convenience of participants, details of few nearby hotels are enlisted below.</p>
        <strong className="text-primary90 text-4xl">
          Click here for Accomodations:
        </strong>
        <a
          href="/docs/accomodation.pdf"
          className="text-primary90 underline  p-2 text-4xl"
          download
        >
          Nearby Hotels
        </a>
            </div>
        </div>
    );
}