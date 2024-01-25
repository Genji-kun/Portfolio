"use client"

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { Menu } from 'lucide-react';

const NavbarMenu = () => {
    return (
        <div className="xl:hidden">
            <Sheet>
                <SheetTrigger className="p-2 border-border border-2 rounded">
                    <Menu size="20" />
                </SheetTrigger>
                <SheetContent side={"left"}>

                </SheetContent>
            </Sheet>
        </div>
    );
};

export default NavbarMenu;