"use client";

import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const CertificationsParagraph = () => {
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
                <motion.div className="flex flex-col text-sm xl:text-xl gap-10" variants={slideInVariants} initial="initial" animate="animate">
                    <div className="flex gap-3">
                        <div className="relative bg-primary after:absolute after:contents-[''] after:left-1/3 after:top-0 after:bg-muted-foreground/50 after:h-20 after:-z-10 after:w-[2px] after:rounded-full p-1 h-fit w-fit rounded-full mt-2.5"></div>
                        <div className="">
                            <p className="font-semibold">4th December, 2022</p>
                            <p>Achieve JPLT Certificate at level N4. </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-primary p-1 h-fit w-fit rounded-full mt-2.5"></div>
                        <div className="">
                            <p className="font-semibold">8th December, 2023</p>
                            <p className="w-4/5">Be an Honorable Mention in the Open-Source Software category at ProCon Vietnam year 2023. </p>
                        </div>
                    </div>
                </motion.div>
            </> : <></>}
        </div>
    );
};

export default CertificationsParagraph;