"use client"

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import AboutMoment from './about-moment';

const AboutSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const cards = [
        {
            url: "https://res.cloudinary.com/dzba4fewa/image/upload/v1697418342/bqiphv8ijowcb1ao2w8f.jpg",
            title: "Title 1",
            id: 1,
        },
        {
            url: "https://res.cloudinary.com/dzba4fewa/image/upload/v1697418342/bqiphv8ijowcb1ao2w8f.jpg",
            title: "Title 2",
            id: 2,
        },
        {
            url: "https://res.cloudinary.com/dzba4fewa/image/upload/v1697418342/bqiphv8ijowcb1ao2w8f.jpg",
            title: "Title 3",
            id: 3,
        },
        {
            url: "https://res.cloudinary.com/dzba4fewa/image/upload/v1697418342/bqiphv8ijowcb1ao2w8f.jpg",
            title: "Title 4",
            id: 4,
        },
        {
            url: "https://res.cloudinary.com/dzba4fewa/image/upload/v1697418342/bqiphv8ijowcb1ao2w8f.jpg",
            title: "Title 5",
            id: 5,
        },
        {
            url: "https://res.cloudinary.com/dzba4fewa/image/upload/v1697418342/bqiphv8ijowcb1ao2w8f.jpg",
            title: "Title 6",
            id: 6,
        },
        {
            url: "https://res.cloudinary.com/dzba4fewa/image/upload/v1697418342/bqiphv8ijowcb1ao2w8f.jpg",
            title: "Title 7",
            id: 7,
        },
    ];

    return (
        <section ref={targetRef} className="w-full h-[300vh] bg-primary">
            <h1 className="text-background text-4xl font-bold sticky top-[5%] ml-[2.5%]">About me</h1>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <AboutMoment moment={card} key={card.id} />
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;