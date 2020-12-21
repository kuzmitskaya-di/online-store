import React from 'react';
import s from './Footer_desc_container.module.css';
import Information from "./information/Information";
import Myaccount from "./my-account/Myaccount";
import Help from "./help/Help";
import ContactInfo from "./contact-info/ContactInfo";

const {footer_desc_container} = s;

const Footer_desc_container = () => {
    return (
        <div className={footer_desc_container}>
            <Information/>
            <Myaccount/>
            <Help/>
            <ContactInfo/>
        </div>
    );
}

export default Footer_desc_container;