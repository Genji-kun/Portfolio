"use client"

import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import Image from 'next/image';
import { images } from '@/data/certificationsImages';


const CertificationsImages = () => {

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
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="w-full items-center flex">
                            <Image src={image} alt="image" className="w-3/5 mx-auto object-cover rounded-lg" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div >

    );
};

export default CertificationsImages;