import { myProjects } from '@/data/projects';
import React from 'react';
import ProjectItem from './project-item';

const Projects = () => {
    return (
        <div className="flex flex-col gap-10 px-10">
            {myProjects.slice(1).map((project, index) => {
                return <React.Fragment key={index}>
                    <ProjectItem project={project} />
                </React.Fragment>
            })}
        </div>
    );
};

export default Projects;