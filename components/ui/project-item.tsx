"use client"

import { Project } from "@/interfaces/Project";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Github, Radio } from "lucide-react";
import Link from "next/link";

const ProjectItem = ({ project }: { project: Project }) => {

    const [isExpand, setIsExpand] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-2 gap-10 py-10">
            <div className="flex justify-center items-center">
                <Image className="object-cover" src={project.images[0].url} height={500} width={500} alt={"Open United"} />
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <h1 className="text-4xl font-bold">{project.name}</h1>
                <div className="flex flex-col w-4/5 py-4 gap-4">
                    {project.description.map((des, index) => {
                        return <p className="text-xl" key={index}>{des}</p>
                    })}
                </div>
                <div className="flex items-center flex-wrap gap-y-2 gap-x-4">
                    <h1 className="text-xl font-bold">Tech Stack: </h1>
                    <>
                        {isExpand ?
                            <>
                                {project.tags.map((tag, index) => {
                                    return <div key={index} className="text-base text-background font-semibold px-5 py-3 bg-primary rounded-lg">
                                        {tag.name}
                                    </div>
                                })}
                            </> : <>
                                {project.tags.slice(0, 3).map((tag, index) => {
                                    return <div key={index} className="text-base text-background font-semibold px-5 py-3 bg-primary rounded-lg">
                                        {tag.name}
                                    </div>
                                })}
                            </>
                        }
                        {!isExpand && <Button className="py-6" variant={"outline"} onClick={() => { setIsExpand(true) }}>+{project.tags.length - 3}</Button>}
                    </>
                    <div className="grid grid-cols-2 w-full gap-3 mt-10">
                        <Link href={project.link}>
                            <Button className="p-6 gap-2 w-full">
                                <Github />
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