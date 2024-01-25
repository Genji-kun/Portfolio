"use client";

import React from 'react';
import { motion } from 'framer-motion';
import NavbarLogo from './navbar-logo';
import { Button } from './button';
import NavbarRoutes from './navbar-routes';
import NavbarMenu from './navbar-menu';

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
            className="w-full h-[60px] xl:h-[80px] flex items-center justify-between px-4 xl:px-0 xl:container absolute top-0 inset-x-0 z-10">
            <NavbarLogo />
            <div className="hidden xl:flex items-center gap-4">
                <NavbarRoutes />
                <Button className="px-4">
                    <span className="font-semibold">Contact Me</span>
                </Button>
            </div>
            <NavbarMenu />
        </motion.div>
    );
};

export default Navbar;