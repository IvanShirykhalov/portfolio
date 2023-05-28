import React from 'react';
import s from "./Footer.module.css";
import sContainer from '../common/styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={sContainer.container}>
                    <h2 className={s.title}>Ivan Ivanov</h2>
                    <div className={s.iconBlock}>
                        <div className={s.icon}></div>
                        <div className={s.icon}></div>
                        <div className={s.icon}></div>
                        <div className={s.icon}></div>
                    </div>
                    <h3>2023</h3>
                </div>

            </div>
        </div>
    );
};
