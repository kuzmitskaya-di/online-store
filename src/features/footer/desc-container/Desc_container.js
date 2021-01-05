import React from 'react';
import s from './Desc_container.module.css';
import Information from "./information/Information";
import My_account from "./my-account/My_account";
import Help from "./help/Help";
import ContactInfo from "./contact-info/ContactInfo";


const Desc_container = () => {
    const {
        desc_container
    } = s;
    return (
        <menu className={desc_container}>
            <Information/>
            <My_account/>
            <Help/>
            <ContactInfo/>
        </menu>
    );
}

export default Desc_container;