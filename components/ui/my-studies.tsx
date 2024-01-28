"use client"

import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import ou from "@/public/ou.jpg";
import boolfly from "@/public/boolfly.jpg";
import Image from 'next/image';

const MyStudies = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const [show, setShow] = useState(isInView);

    useEffect(() => {
        if (!isInView) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [isInView])

    const slideInVariants = {
        initial: { opacity: 0, x: "-25%" },
        animate: { opacity: 1, x: 0, transition: { duration: 1 } },
        exit: { opacity: 0, x: 100 }
    }

    return (
        <section ref={ref} className="h-screen overflow-hidden p-10">
            {show ? <>
                <motion.div
                    variants={slideInVariants}
                    initial="initial"
                    animate="animate"
                    className="h-full w-full flex flex-col gap-6 ">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">My Experience</h1>
                        <h1 className="text-xl">Know about my studies and work experiences.</h1>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-6 gap-6 items-center">
                        <div className="col-span-6 bg-primary p-6 rounded-full flex flex-col items-center relative">
                            <h1 className="font-bold text-2xl text-background">HCMC Open University</h1>
                            <h2 className="text-background">Year 2020 - 2024</h2>
                            <div className="absolute bg-background rounded-full right-3 top-1/2 -translate-y-1/2 w-20 h-20">
                                <Image className="w-full h-full object-cover rounded-full" width={500} height={500} src={ou} alt="OU" />
                            </div>
                        </div>
                        <div className="col-span-2 bg-primary col-start-5 p-6 rounded-full flex flex-col items-center relative">
                            <h1 className="font-bold text-2xl text-background">Boolfly - Digital Commerce</h1>
                            <h2 className="text-background">Month 10/2023 - 1/2024</h2>
                            <div className="absolute bg-background rounded-full right-3 top-1/2 -translate-y-1/2 w-20 h-20">
                                <Image className="w-full h-full object-cover rounded-full" width={500} height={500} src={boolfly} alt="OU" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </> : <></>}
        </section>
    );
};

export default MyStudies;