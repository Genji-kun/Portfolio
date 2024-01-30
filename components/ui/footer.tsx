"use client";

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="w-full bg-primary py-5 xl:py-10 px-5 xl:px-20">
            <div className="flex justify-center xl:justify-between container flex-wrap gap-4">
                <h1 className="text-background font-semibold text-lg text-center xl:text-left">
                    Copyright © 2024. All rights are reserved
                </h1>
                <div className="flex gap-3 text-background w-full justify-center xl:w-fit">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link href={"https://github.com/Genji-kun"}>
                            <Github />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link href={"www.linkedin.com/in/genji-kun"}>
                            <Linkedin size={24} className="fill-background border-2 border-background p-[0.13rem] rounded" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;