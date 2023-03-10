import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <a href={''} className={s.watch}>Watch</a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

