import React from 'react';
import s from './Projects.module.css'
import sContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.projects}>
                    <Project title={'ToDo'} description={'todolist'}/>
                    <Project title={'SN'} description={'social network'}/>
                </div>
            </div>
        </div>
    );
};
