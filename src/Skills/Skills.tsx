import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../components/title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'bla bla bla'}/>
                    <Skill title={'HTML'} description={'bla bla bla'}/>
                    <Skill title={'CSS'} description={'bla bla bla bla bla bla bla bla bla bla bla bla'}/>
                </div>
            </div>
        </div>
    );
};
