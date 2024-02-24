"use client"

import { navbarRoutes } from '@/utils/routes';
import React from 'react';
import { Button } from './button';
import Link from 'next/link';

const Sidebar = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    const handleClick = (route: any) => {
        scrollToSection(route.href.slice(1));
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2 mt-2">
                {navbarRoutes.map((route, index) => {
                    return <Link href={route.href} key={index} onClick={() => handleClick(route)}>
                        {route.name}
                    </Link>
                })}
            </div>
            <a href="/VoPhuPhat_Resume.pdf" download>
                <Button className="w-full">
                    <span className="font-semibold">My Resume</span>
                </Button>
            </a>
        </div>
    );
};

export default Sidebar;