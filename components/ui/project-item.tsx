"use client"

import { Project } from "@/interfaces/Project";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./button";
import { Radio } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ProjectItem = ({ project }: { project: Project }) => {

    const [isExpand, setIsExpand] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 py-4 xl:py-10">
            <div className={cn("flex justify-center items-center relative", project.images.length > 1 && "min-h-[500px]")}>
                {project.images.length > 1 ? <>
                    <Image className="object-cover absolute left-20 top-10 xl:w-2/3 hover:scale-[1.2] hover:z-10 aspect-video rounded-lg border border-primary" src={project.images[0].url} height={500} width={500} alt={"Open United"} />
                    <Image className="object-cover absolute right-20 bottom-10 xl:w-2/3 hover:scale-[1.2] aspect-video rounded-lg border border-primary" src={project.images[1].url} height={500} width={500} alt={"Open United"} />
                </> : <>
                    <Image className="object-cover aspect-video xl:aspect-auto" src={project.images[0].url} height={500} width={500} alt={"Open United"} />

                </>}
            </div>
            <div className="flex flex-col xl:gap-4 justify-center items-center xl:items-start">
                <h1 className="text-xl xl:text-4xl font-bold">{project.name}</h1>
                <div className="flex flex-col xl:w-4/5 py-4 gap-4">
                    {project.description.map((des, index) => {
                        return <p className="text-sm xl:text-xl" key={index}>{des}</p>
                    })}
                </div>
                <div className="flex items-center flex-wrap gap-y-2 gap-x-4">
                    <h1 className="text-xl font-bold">Tech Stack: </h1>
                    <>
                        {isExpand ?
                            <>
                                {project.tags.map((tag, index) => {
                                    return <motion.div initial={{ y: 0 }} whileHover={{ y: -5 }} key={index} className="xl:text-base text-background font-semibold px-3 py-2 xl:px-5 xl:py-3 bg-primary rounded-lg">
                                        {tag.name}
                                    </motion.div>
                                })}
                            </> : <>
                                {project.tags.slice(0, 3).map((tag, index) => {
                                    return <motion.div initial={{ y: 0 }} whileHover={{ y: -5 }} key={index} className="xl:text-base text-background font-semibold px-3 py-2 xl:px-5 xl:py-3 bg-primary rounded-lg">
                                        {tag.name}
                                    </motion.div>
                                })}
                            </>
                        }
                        {!isExpand && <Button className="py-4 xl:py-6 xl:text-base font-semibold" variant={"outline"} onClick={() => { setIsExpand(true) }}>+{project.tags.length - 3}</Button>}
                    </>
                    <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-3 mt-10 ">
                        <Link href={project.link}>
                            <Button className="p-6 gap-2 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                <span className="text-base font-semibold">Github Reponsitory</span>
                            </Button>

                        </Link>
                        {project.liveDemo ?
                            <>
                                <Link href={project.liveDemo}>
                                    <Button variant={"outline"} className="p-6 gap-2 w-full">
                                        <Radio />
                                        <span className="text-base font-semibold">Live Demo</span>
                                    </Button>
                                </Link>
                            </> : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;