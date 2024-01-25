"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MyStatus from './my-status';
import { Button } from './button';
import SVGMorph from './SVGMorph';
import NameTransition from './name-transition';

const Profile = () => {


    const fadeInVariants = {
        initial: { y: 40, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.75 } }
    };

    const sideInLeftVariants = {
        initial: { x: 80, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.75, delay: 0.75 } }
    };

    const sideInRightVariants = {
        initial: { x: -80, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.75, delay: 0.75 } }
    };

    const textSlideVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.25, delay: 0.75 } }
    };

    const buttonsVariants = {
        initial: { y: 40, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.25, delay: 1 } }
    };

    const runnerVariants = {
        initial: { x: '100%' },
        animate: { x: '-100%', transition: { duration: 2, repeat: Infinity } }
    }


    return (
        <motion.section
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            className="w-full h-screen flex flex-col relative overflow-hidden px-4 xl:px-0">
            <motion.h4
                variants={sideInRightVariants}
                initial="initial"
                animate="animate"
                className="uppercase font-bold absolute text-8xl text-nowrap fill-none -z-10 top-[15%] -left-[22rem] xl:left-32" style={{ color: 'transparent', WebkitTextStroke: '2px rgba(228,228,231,  0.75)' }}>
                Frontend Dev
            </motion.h4>
            <div className="h-[80vh] xl:h-[90vh] grid grid-cols-1 xl:grid-cols-2 items-center py-10 xl:container">
                <div className="flex xl:hidden justify-center items-center">
                    <SVGMorph />
                </div>
                <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 -translate-y-6 xl:translate-y-0 xl:mt-6 ">
                    <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl overflow-hidden flex gap-x-1">Hello there, I&apos;m
                        <NameTransition />
                    </h2>
                    <motion.div
                        variants={textSlideVariants}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col gap-2 lg:gap-4 xl:gap-6 overflow-hidden">
                        <p className="text-xl md:text-3xl xl:text-4xl font-bold leading-tight">Improve views with custom style & functionalities, highly-converting website</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl">that are appealing, dynamic devices & user-friendly.</p>
                    </motion.div>
                    <motion.div variants={buttonsVariants}
                        initial="initial"
                        animate="animate"
                        className="w-full grid grid-cols-2 gap-4">
                        <Button className="p-4 xl:p-6 text-xs xl:text-base font-semibold">View my projects</Button>
                        <Button variant={"outline"} className="p-4 xl:p-6 text-xs xl:text-base font-semibold border-primary">My working experience</Button>
                    </motion.div>
                </div>
                <div className="hidden xl:flex justify-center items-center">
                    <SVGMorph />
                </div>
            </div >
            <motion.h4
                variants={sideInLeftVariants}
                initial="initial"
                animate="animate"
                className="uppercase font-bold absolute text-7xl xl:text-8xl text-nowrap fill-none -z-20 bottom-[15%] -right-40 xl:right-32 " style={{ color: 'transparent', WebkitTextStroke: '2px rgba(228,228,231, 0.75)' }}>
                UI / UX design
            </motion.h4>
            <MyStatus isFinding={true} />
            <div className="absolute bottom-12 -left-16 xl:left-0 border-b border-border py-2 pr-2 pl-12 -rotate-90 overflow-hidden">
                <span>Scroll Down</span>
                <motion.div className="absolute bottom-0 right-0 h-[2px] w-full bg-primary"
                    variants={runnerVariants} initial="initial" animate="animate">
                </motion.div>
            </div>
        </motion.section >
    );
};

export default Profile;