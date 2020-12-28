import React from 'react';
import s from './Myaccount.module.css';

const {information, info, info_link} = s;

const Myaccount = () => {
    return (
        <section className={information}>
            <desc className={info}>MY ACCOUNT</desc>
            <a href="#" className={info_link}>Sign In</a>
            <a href="#" className={info_link}>View Cart</a>
            <a href="#" className={info_link}>My Wishlist</a>
            <a href="#" className={info_link}>Check Out</a>
            <a href="#" className={info_link}>Track My Order</a>
        </section>
    );
}

export default Myaccount;