import React from 'react';
import s from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <div className={s.information}>
            <span className={s.info}>CONTACT INFO</span>
            <a href="#" className={`${s.info_link} ${s.address}`}>1234 Your Address, Country.</a>
            <a href="#" className={`${s.info_link} ${s.phone}`}>+1 234 5678 9999</a>
            <a href="#" className={`${s.info_link} ${s.mail}`}>mail@domain.com</a>
        </div>
    );
}

export default ContactInfo;