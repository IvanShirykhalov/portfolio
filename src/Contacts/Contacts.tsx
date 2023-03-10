import React from 'react';
import s from "./Constacts.module.css";
import sContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>My contacts</h2>
                <form className={s.contacts}>
                    <input></input>
                    <input></input>
                    <textarea></textarea>
                </form>
                <button>Contact with me</button>
            </div>
        </div>
    );
};
