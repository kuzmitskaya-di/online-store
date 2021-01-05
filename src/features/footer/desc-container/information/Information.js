import React from 'react';
import s from './Information.module.css';


const Information = () => {
    const {
        information,
        info,
        info_link
    } = s;
    return (
        <section className={information}>
            <desc className={info}>INFORMATION</desc>
            <a href="#" className={info_link}>Delivery Information</a>
            <a href="#" className={info_link}>Discount</a>
            <a href="#" className={info_link}>Sitemap</a>
            <a href="#" className={info_link}>Privacy Policy</a>
            <a href="#" className={info_link}>My Account</a>
        </section>
    );
}

export default Information;