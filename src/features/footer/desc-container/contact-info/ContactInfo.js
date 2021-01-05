import React from 'react';
import s from './ContactInfo.module.css';


const ContactInfo = () => {
    const {
        information,
        info,
        info_link,
        address,
        phone,
        mail
    } = s;
    return (
        <section className={information}>
            <desc className={info}>CONTACT INFO</desc>
            <address className={`${info_link} ${address}`}>1234 Your Address, Country.</address>
            <a href="#" className={`${info_link} ${phone}`}>+1 234 5678 9999</a>
            <a href="#" className={`${info_link} ${mail}`}>mail@domain.com</a>
        </section>
    );
}

export default ContactInfo;