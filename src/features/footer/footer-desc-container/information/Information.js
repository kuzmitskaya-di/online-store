import React from 'react';
import s from './Information.module.css';

const Information = () => {
    return (
        <div className={s.information}>
            <span className={s.info}>INFORMATION</span>
            <a href="#" className={s.info_link}>Delivery Information</a>
            <a href="#" className={s.info_link}>Discount</a>
            <a href="#" className={s.info_link}>Sitemap</a>
            <a href="#" className={s.info_link}>Privacy Policy</a>
            <a href="#" className={s.info_link}>My Account</a>
        </div>
    );
}

export default Information;