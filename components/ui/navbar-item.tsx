import { RouteType } from '@/utils/routes';
import Link from 'next/link';
import React from 'react';
import { Button } from './button';

const NavbarItem = ({ route }: { route: RouteType }) => {

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

    const handleClick = (e: any) => {
        scrollToSection(route.href.slice(1));
    };


    return (
        <Link onClick={handleClick} href={route.href}>
            <Button variant={"ghost"}>
                {route.name}
            </Button>
        </Link>
    );
};

export default NavbarItem;