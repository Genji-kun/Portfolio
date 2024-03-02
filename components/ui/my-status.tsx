"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Search } from 'lucide-react';
import { Button } from './button';


const MyStatus = ({ isFinding }: { isFinding: boolean }) => {

    return (
        <div className={cn("h-[20vh] xl:h-[10vh] flex flex-col xl:flex-row items-center gap-2 sm:pt-20 xl:pt-0", isFinding ? "justify-center xl:justify-between w-[80%] xl:w-1/2 mx-auto " : "justify-center")}>
            {isFinding ? <>
                <div className="flex items-center">
                    <Search className="mr-4 hidden xl:block" />
                    <h2 className="text-base font-semibold text-center xl:tex-left">I&apos;m still looking for Front-end jobs (ReactJS, NextJS).</h2>
                </div>
                <Button className="px-4 w-full xl:w-fit">
                    <span className="font-semibold">Contact Me</span>
                </Button>
            </> : <>
                <div className="flex items-center">
                    <Check className="mr-4" />
                    <h2 className="text-base font-semibold">I were hired and currently working. You can contact me for my information. </h2>
                </div>
            </>
            }
        </div>
    );
};

export default MyStatus;