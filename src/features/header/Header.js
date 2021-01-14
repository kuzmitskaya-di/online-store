import React from 'react';
import s from './Header.module.css';


const Header = () => {
    const {
        header,
        container_phone_email,
        contact,
        phone,
        email,
        social_networks,
        facebook,
        soc_net,
        twitter,
        instagram,
        linkedln,
        behance
    } = s;
    return (
        <header className={header}>
            <address className={container_phone_email}>
                <p1 className={`${contact} ${phone}`}>+1 123 456 789</p1>
                <p1 className={`${contact} ${email}`}>info@company.com</p1>
            </address>
            <section className={social_networks}>
                <a href="#" className={`${facebook} ${soc_net} `}/>
                <a href="#" className={`${twitter} ${soc_net}`}/>
                <a href="#" className={`${instagram} ${soc_net}`}/>
                <a href="#" className={`${linkedln} ${soc_net}`}/>
                <a href="#" className={`${behance} ${soc_net}`}/>
            </section>
        </header>
    );
}

export default Header;