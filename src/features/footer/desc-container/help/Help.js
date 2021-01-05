import React from 'react';
import s from './Help.module.css';


const Help = () => {
    const {
        information,
        info,
        info_link
    } = s;
    return (
        <section className={information}>
            <desc className={info}>HELP</desc>
            <a href="#" className={info_link}>F. Q. A.</a>
            <a href="#" className={info_link}>Shipping</a>
            <a href="#" className={info_link}>Contact Us</a>
            <a href="#" className={info_link}>Privacy Policy</a>
        </section>
    );
}

export default Help;