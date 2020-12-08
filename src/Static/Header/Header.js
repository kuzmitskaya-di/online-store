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
                <a className={s.facebook}></a>
                <a className={s.twitter}></a>
                <a className={s.instagram}></a>
                <a className={s.linkedln}></a>
                <a className={s.be}></a>
            </div>
        </header>
    );
}

export default Header;