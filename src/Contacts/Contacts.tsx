import React from 'react';
import s from "./Contacts.module.scss"
import sContainer from "../common/styles/Container.module.css";
import {Title} from "../components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title title={'My contacts'}/>
                <form className={s.contactsForm}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea></textarea>
                </form>
                <a  className={s.viewBtn}>Contact with me</a>
            </div>
        </div>
    );
};
