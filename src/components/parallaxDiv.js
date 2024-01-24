import React from 'react';

export const ParallaxDiv = ({children, bg}, mh) => {


    const parallaxBg = {
        backgroundImage: `url(${bg})`,
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '500px'
    };

    return (
        <div style={{...parallaxBg}}>
            {children}
        </div>
    )
}