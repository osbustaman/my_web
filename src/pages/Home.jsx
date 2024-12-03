import React from 'react'
import { Carousel } from '../components/Carousel'
import { About } from '../components/About';

export const Home = () => {

    const images = [
        'https://via.placeholder.com/1920x600/37517E/FFFFFF?text=Slide+1',
        'https://via.placeholder.com/1920x600/37517E/FFFFFF?text=Slide+2',
        'https://via.placeholder.com/1920x600/37517E/FFFFFF?text=Slide+3'
    ];


    return (
        <>
            <Carousel images={images} />
            <About />
        </>
    )
}
