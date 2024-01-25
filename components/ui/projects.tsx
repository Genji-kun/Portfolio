"use client"

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import MyProjectsText from './my-projects-text';
import AboutMeText from './about-me-text';
import AboutMe from './about-me';

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "-95%"]);

    return (
        <section ref={targetRef} className="w-full h-[300vh] bg-primary">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    <AboutMeText />
                    <AboutMe />
                    <MyProjectsText />
                    <div className="w-screen h-screen bg-background">
                    </div>
                    {/* {cards.map((card) => {
                        return <AboutMoment moment={card} key={card.id} />
                    })} */}
                </motion.div>
            </div>
        </section >
    );
};

export default Projects;