import React from 'react';

export const ThirdComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center text-white h-full">
            <div className="font-serif text-inherit sm:text-5xl xs:text-3xl antialiased font-bold">
                Dadalo ka ba?
            </div>
            <div className="font-mono sm:text-4xl xs:text-xl antialiased italic mt-2">
                Paki-sabihan naman kami ha :)
            </div>
            <button className="px-4 py-2 border border-white-100 hover:bg-white hover:text-black font-bold">
                RSVP
            </button>
        </div>
    )
}