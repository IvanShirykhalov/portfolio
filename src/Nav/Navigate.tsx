import React from 'react';
import s from './Navigate.module.css'

export const Navigate = () => {
    return (
        <div className={s.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};
