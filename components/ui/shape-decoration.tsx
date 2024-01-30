"use client"

import React from 'react';
import { motion } from "framer-motion";

const ShapeDecoration = () => {

    const infinityRotate = {
        initial: { rotate: 0 },
        animate: { rotate: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }
    }

    const infinityReverseRotate = {
        initial: { rotate: 0 },
        animate: { rotate: -360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }
    }

    return (
        <div className="w-fit h-fit absolute -top-10 -right-10 xl:flex gap-10 hidden">
            <div className="w-36 h-36 rounded-lg relative flex justify-center items-center overflow-hidden">
                <motion.div
                    variants={infinityRotate}
                    initial="initial"
                    animate="animate"
                    className="absolute w-24 h-[200%] bg-primary ">
                </motion.div>
                <div className='absolute bg-background inset-0.5 rounded' />
            </div>
            <div className="w-36 h-56 rounded-lg relative flex justify-center items-center overflow-hidden">
                <motion.div
                    variants={infinityReverseRotate}
                    initial="initial"
                    animate="animate"
                    className="absolute w-24 h-[200%] bg-primary ">
                </motion.div>
                <div className='absolute bg-background inset-0.5 rounded' />
            </div>
            <div className="w-56 h-36 rounded-lg relative flex justify-center items-center overflow-hidden">
                <motion.div
                    variants={infinityRotate}
                    initial="initial"
                    animate="animate"
                    className="absolute w-24 h-[200%] bg-primary ">
                </motion.div>
                <div className='absolute bg-background inset-0.5 rounded' />
            </div>
        </div>

    );
};

export default ShapeDecoration;