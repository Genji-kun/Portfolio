"use client";

import { interpolate } from 'flubber';
import { useMotionValue, animate, useTransform, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const SVGMorph = ({ paths }: { paths: string[] }) => {

    const [index, setIndex] = useState(0);
    const progress = useMotionValue(0);
    const getIndex = paths.map((_, i) => i);
    const path = useTransform(progress, getIndex, paths, {
        mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 })
    });

    useEffect(() => {

        animate(progress, index, {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.4,
            onComplete: () => {
                if (index === paths.length - 1) {
                    setIndex(1);
                } else {
                    setIndex(index + 1);
                }
            },
        });
    }, [])

    return (
        <motion.path d={path} className="fill-[#D9D9D9] stroke-primary stroke-[3px]" />
    );
};

export default SVGMorph;