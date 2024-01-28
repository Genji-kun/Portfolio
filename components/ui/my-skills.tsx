import Image from 'next/image';
import React from 'react';
import react from '@/public/react.png';
import nextjs from '@/public/nextjs.png';


const MySkills = () => {
    return (
        <div className="flex flex-col p-10 overflow-x-hidden">
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-4xl font-bold">My personal Skills</h1>
                <h3 className="text-xl"></h3>
            </div>
            <div className="flex flex-nowrap overflow-x-auto">
                <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                        <div className="h-20 aspect-square">
                            <Image src={react} className="object-cover" alt="ReactJS" height={500} width={500} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-20 aspect-square">
                            <Image src={nextjs} className="object-cover" alt="ReactJS" height={500} width={500} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-20 aspect-square">
                            <Image src={react} className="object-cover" alt="ReactJS" height={500} width={500} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MySkills;