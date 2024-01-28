"use client"

import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import AboutMeImages from './about-me-images';
import AboutMeParagraph from './about-me-paragraph';
import ShapeDecoration from './shape-decoration';

const AboutMe = () => {

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

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ['10%', '100%']);

    const fadeInVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, delay: 0.25 } }
    }


    const slideInVariants = {
        initial: { opacity: 0, y: "-50%" },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: "-25%" }
    }


    return (

        <motion.div ref={ref} className="bg-background flex items-center w-[100vw] h-screen xl:p-0 overflow-hidden relative">
            {showSection ? <>
                <motion.div className='w-full h-full flex flex-col p-10'>
                    <motion.div variants={slideInVariants} initial="initial" animate="animate" className="w-full flex flex-col gap-2 h-[30%]">
                        <h1 className="text-4xl font-bold">About Me</h1>
                        <h3 className="text-xl">Here you can find the information about me, what I do, which technology I have learned.</h3>
                    </motion.div>
                    <div className="h-fit grid grid-cols-2 gap-10">
                        <AboutMeImages />
                        <AboutMeParagraph />
                    </div>
                </motion.div>
            </> : <></>
            }
            <ShapeDecoration />
        </motion.div >
    );
};

export default AboutMe;