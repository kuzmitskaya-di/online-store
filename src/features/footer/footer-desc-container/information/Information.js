import React from 'react';
import s from './Information.module.css';

const {information, info, info_link} = s;

const Information = () => {
    return (
        <div className={information}>
            <span className={info}>INFORMATION</span>
            <a href="#" className={info_link}>Delivery Information</a>
            <a href="#" className={info_link}>Discount</a>
            <a href="#" className={info_link}>Sitemap</a>
            <a href="#" className={info_link}>Privacy Policy</a>
            <a href="#" className={info_link}>My Account</a>
        </div>
    );
}

export default Information;