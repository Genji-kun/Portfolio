"use client"

import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

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

    const fadeInVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, delay: 0.25 } }
    }


    return (

        <motion.div ref={ref} className="justify-center bg-background items-center flex w-[300vw] h-screen p-10 xl:p-0">
            {showSection ? <>
                <motion.div >
                    <h1 className="text-5xl">
                        Hello
                    </h1>
                </motion.div>
            </> : <></>}
        </motion.div>
    );
};

export default AboutMe;