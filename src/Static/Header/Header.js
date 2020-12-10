import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
            <div className={s.container_phone_email}>
            <p1 className={`${s.contact} ${s.phone}`}>+1 123 456 789</p1>
            <p1 className={`${s.contact} ${s.email}`}>info@company.com</p1>
            </div>
            <div className={s.social_networks}>
                <a className={`${s.facebook} ${s.soc_net} `}></a>
                <a className={`${s.twitter} ${s.soc_net}`}></a>
                <a className={`${s.instagram} ${s.soc_net}`}></a>
                <a className={`${s.linkedln} ${s.soc_net}`}></a>
                <a className={`${s.behance} ${s.soc_net}`}></a>
            </div>
        </header>
    );
}

export default Header;