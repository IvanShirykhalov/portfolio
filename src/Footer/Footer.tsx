import React from 'react';
import s from "./Footer.module.scss";
import sContainer from '../common/styles/Container.module.css'
import {Title} from "../components/title/Title";


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>

                <Title title={'Ivan Ivanov'}/>
                <div className={s.iconBlock}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <h3 className={s.footerYear}>2023</h3>


            </div>
        </div>
    );
};
