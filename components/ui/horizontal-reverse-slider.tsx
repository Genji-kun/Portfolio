"use client"

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import MyProjectsText from './my-projects-text';
import ShapeDecoration from './shape-decoration';
import Image from 'next/image';
import { myProjects } from '@/data/projects';
import ProjectItem from './project-item';


const HorizontalRevserseSlider = () => {

    const [expand, isExpand] = useState(false);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "-50.25%"]);

    return (
        <section ref={targetRef} className="w-full h-[300vh] bg-primary">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-0 xl:gap-4">
                    <MyProjectsText />
                    <div className="z-10 w-screen h-screen overflow-hidden bg-background p-4 xl:p-10 relative">
                        <ShapeDecoration />
                        <div>
                            <h1 className="text-xl xl:text-4xl font-bold mb-2">My Projects</h1>
                            <h1 className="text-sm xl:text-xl">Know about my studies and work experiences.</h1>
                        </div>
                        <ProjectItem project={myProjects[0]} />
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default HorizontalRevserseSlider;