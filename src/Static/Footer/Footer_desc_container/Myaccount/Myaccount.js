import React from 'react';
import s from './Myaccount.module.css';

const Myaccount = () => {
    return (
        <div className={s.information}>
            <span className={s.info}>MY ACCOUNT</span>
            <a href="#"  className={s.info_link}>Sign In</a>
            <a href="#"  className={s.info_link}>View Cart</a>
            <a href="#"  className={s.info_link}>My Wishlist</a>
            <a href="#"  className={s.info_link}>Check Out</a>
            <a href="#"  className={s.info_link}>Track My Order</a>
        </div>
    );
}

export default Myaccount;