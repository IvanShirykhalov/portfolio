import React from 'react';
import s from './Projects.module.scss'
import sContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";
import {Title} from "../components/title/Title";
import snImg from '../assets/image/socialnetwork.png'
import todoImg from '../assets/image/todo.png'

export const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${snImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };


    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={'My Works'}/>
                <div className={s.projects}>
                    <Project style={todolist} title={'ToDo'} description={'todolist'}/>
                    <Project style={socialNetwork} title={'SN'} description={'social network'}/>
                </div>
            </div>
        </div>
    );
};
