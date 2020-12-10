import React from 'react';
import s from './Help.module.css';

const Help = () => {
    return (
        <div className={s.information}>
            <span className={s.info}>HELP</span>
            <a href="#"  className={s.info_link}>F. Q. A.</a>
            <a href="#"  className={s.info_link}>Shipping</a>
            <a href="#"  className={s.info_link}>Contact Us</a>
            <a href="#"  className={s.info_link}>Privacy Policy</a>
        </div>
    );
}

export default Help;