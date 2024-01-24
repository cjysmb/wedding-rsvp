import React from 'react';
import { ParallaxDiv } from '../components/parallaxDiv';
import * as Image from '../static/images/index';
import { MainComponent } from '../components/mainComponent';
import { SecondComponent } from '../components/secondComponent';
import { ThirdComponent } from '../components/thirdComponent';

export const Home = () => {
    return (
        <>
            <ParallaxDiv bg={Image.s1}>
                <MainComponent />
            </ParallaxDiv>
            <ParallaxDiv bg={Image.s2}>
                <SecondComponent />
            </ParallaxDiv>

            <ParallaxDiv bg={Image.s3}>
                <ThirdComponent />
            </ParallaxDiv>
        </>
    );
};
