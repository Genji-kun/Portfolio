import { navbarRoutes } from '@/utils/routes';
import React from 'react';
import NavbarItem from './navbar-item';

const NavbarRoutes = () => {
    return (
        <div className="flex items-center gap-x-2">
            {navbarRoutes.map((route, index) => {
                return <NavbarItem key={index} route={route} />
            })}
        </div>
    );
};

export default NavbarRoutes;