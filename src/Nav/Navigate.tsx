import React from 'react';
import s from './Navigate.module.scss'

export const Navigate = () => {
    return (
        <div className={s.nav}>
            <a href="#" className={s.navBtn}>Main</a>
            <a href="#" className={s.navBtn}>Skills</a>
            <a href="#" className={s.navBtn}>Projects</a>
            <a href="#" className={s.navBtn}>Contacts</a>
        </div>
    );
};
