import React from 'react';

export const SecondComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center text-white h-full xs:p-2">
            <div className="xs:p-2 p-4 border-4 border-white-100 rounded-lg flex lg:flex-row xs:flex-col">
                <div className="flex flex-col justify-center lg:items-left xs:items-center xs:p-2 px-4">
                    <div>
                        Saan kami ikakasal?
                    </div>
                    <div>
                        Dito Bhiiieeee basahin mo ng maigi ha wag shunga.
                    </div>
                    <div>
                        <a href="https://shorturl.at/gp025" 
                            target='blank' 
                            className="text-cyan-400
                                hover:text-cyan-200 hover:underline">
                                Immaculate Heart of Mary Hinulugang Taktak, Antipolo
                        </a>
                    </div>
                </div>
                <div className="px-4 lg:mt-0 md:mt-8">
                    <iframe 
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15444.127380215165!2d121.1605679!3d14.5972613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8b089fa70bb%3A0x3a2922d867e8bd24!2sImmaculate%20Heart%20of%20Mary%20(Diocese%20of%20Antipolo)!5e0!3m2!1sen!2sph!4v1706110156673!5m2!1sen!2sph" 
                        // width="600" 
                        // height="450" 
                        className="sm:w-[600px] md:h-[450px] xs:w-full xs:h-[200px]"
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}