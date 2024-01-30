"use client"

import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import Image from 'next/image';
import { aboutMeImages } from '@/data/aboutMeImages';


const AboutMeImages = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="flex justify-center">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {aboutMeImages.map((image, index) => (
                        <CarouselItem key={index} className="w-full">
                            <Image src={image} alt="image" className="aspect-square xl:aspect-video w-full object-cover rounded-lg" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div >

    );
};

export default AboutMeImages;