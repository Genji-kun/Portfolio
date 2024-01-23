import { RouteType } from '@/utils/routes';
import Link from 'next/link';
import React from 'react';
import { Button } from './button';

const NavbarItem = ({ route }: { route: RouteType }) => {
    return (
        <Link href={route.href}>
            <Button variant={"ghost"}>
                {route.name}
            </Button>
        </Link>
    );
};

export default NavbarItem;