"use client";

import React from 'react';
import { motion } from 'framer-motion';
import NavbarLogo from './navbar-logo';
import { Button } from './button';
import NavbarRoutes from './navbar-routes';

const Navbar = () => {

    const fadeInVariants = {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.75 } }
    };

    return (
        <motion.div
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            className="w-full h-[80px] flex items-center justify-between container absolute top-0 inset-x-0 z-10">
            <NavbarLogo />
            <div className="flex items-center gap-4">
                <NavbarRoutes />
                <Button className="px-4">
                    <span className="font-semibold">Contact Me</span>
                </Button>
            </div>
        </motion.div>
    );
};

export default Navbar;