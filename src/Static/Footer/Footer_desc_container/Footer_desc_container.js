import React from 'react';
import s from './Footer_desc_container.module.css';
import Information from "./Information/Information";
import Myaccount from "./Myaccount/Myaccount";
import Help from "./Help/Help";
import ContactInfo from "./ContactInfo/ContactInfo";

const Footer_desc_container = () => {
    return (
        <div className={s.Footer_desc_container}>
            <Information />
            <Myaccount />
            <Help />
            <ContactInfo />
        </div>
    );
}

export default Footer_desc_container;