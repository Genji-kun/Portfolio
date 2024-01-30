"use client";

import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const AboutMeParagraph = () => {
    const ref = useRef(null);

    const isInView = useInView(ref);
    const [showSection, setShowSection] = useState(isInView);

    useEffect(() => {
        if (!isInView) {
            setShowSection(false)
        } else {
            setShowSection(true)
        }
    }, [isInView])

    const slideInVariants = {
        initial: { opacity: 0, x: "25%" },
        animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    }


    return (
        <div ref={ref} className="flex items-center">
            {showSection ? <>
                <motion.div className="flex flex-col text-sm xl:text-xl gap-2" variants={slideInVariants} initial="initial" animate="animate">
                    <h1 className="text-xl xl:text-4xl font-bold mb-0 xl:mb-4">My name is Vo Phu Phat.</h1>
                    <p>I am currently a final-year student pursuing a Bachelor&apos;s degree in IT. </p>
                    <p>My journey in web development began at university, where I started with designing User Interfaces (UI) and crafting User Experiences (UX) using HTML, CSS and JavaScript.</p>
                    <p>I have strong Front-end skills such as ReactJS, NextJS. In addition to that, I want to enhance my Back-end development skills to become a Full-stack developer in the future.</p>
                </motion.div>
            </> : <></>}
        </div>
    );
};

export default AboutMeParagraph;