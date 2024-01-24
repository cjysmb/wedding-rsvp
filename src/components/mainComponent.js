import React from 'react';

export const MainComponent = () => {
    return (
        <div className="
            flex flex-col lg:justify-center items-center 
            lg:w-2/4
            xs:w-full pt-24
            h-full 
            font-serif text-lime-800
            ">
                {/* Insert emblem namin ni love */}
            <div className="font-serif text-inherit sm:text-5xl xs:text-3xl antialiased font-bold">
                Ikakasal na kami!
            </div>
            <div className="font-mono sm:text-3xl xs:text-xl antialiased italic mt-2">
                Cjay at Anabelle {/* Pwede tong palitan nang caligraphy ni love*/}
            </div>
            <div className="font-sans sm:text-lg xs:text-xs">
                Ika-20 ng Setyembre, taong 2024 Biyernes, Ala-una ng hapon
            </div>
            <button className="p-2 border border-lime-800 mt-12 rounded-md 
                hover:text-white hover:bg-lime-800">
                RSVP
            </button>
        </div>
    )
}

