import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NameTransition = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    };

    const names = ["Vo Phu Phat", "Front-end Developer"];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % names.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={names[index]}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.75 }}
                className="font-bold">
                {names[index]}
            </motion.span>
        </AnimatePresence>
    );
};

export default NameTransition;
