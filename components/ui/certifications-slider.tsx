"use client"

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import CertificationsText from './certifications-text';
import AboutMe from './about-me';
import Certifications from './certifications';

const CertificationsSlider = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "-50.25%"]);

    return (
        <section ref={targetRef} className="w-full h-[300vh] bg-primary">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-0 xl:gap-4">
                    <CertificationsText />
                    <Certifications />
                </motion.div>
            </div>
        </section >
    );
};

export default CertificationsSlider;