import React from 'react';
import s from './Header.module.scss'
import {Navigate} from "../Nav/Navigate";

export const Header = () => {
    return (
        <div className={s.header}>
            <Navigate/>
        </div>
    );
};
