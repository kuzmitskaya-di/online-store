import React from 'react';
import s from './ContactInfo.module.css';

const {information, info, info_link, address, phone, mail} = s;

const ContactInfo = () => {
    return (
        <div className={information}>
            <span className={info}>CONTACT INFO</span>
            <a href="#" className={`${info_link} ${address}`}>1234 Your Address, Country.</a>
            <a href="#" className={`${info_link} ${phone}`}>+1 234 5678 9999</a>
            <a href="#" className={`${info_link} ${mail}`}>mail@domain.com</a>
        </div>
    );
}

export default ContactInfo;