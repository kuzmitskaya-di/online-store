import React from 'react';
import s from './Help.module.css';

const {information, info, info_link} = s;

const Help = () => {
    return (
        <div className={information}>
            <span className={info}>HELP</span>
            <a href="#" className={info_link}>F. Q. A.</a>
            <a href="#" className={info_link}>Shipping</a>
            <a href="#" className={info_link}>Contact Us</a>
            <a href="#" className={info_link}>Privacy Policy</a>
        </div>
    );
}

export default Help;