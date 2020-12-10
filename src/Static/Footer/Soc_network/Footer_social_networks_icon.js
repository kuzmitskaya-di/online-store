import React from 'react';
import s from './Footer_social_networks_icon.module.css';

const Footer_social_networks_icon = () => {
    return (

        <div className={s.footer_social_networks_icon}>
            <a className={`${s.facebook} ${s.soc_net} `}></a>
            <a className={`${s.twitter} ${s.soc_net}`}></a>
            <a className={`${s.instagram} ${s.soc_net}`}></a>
            <a className={`${s.linkedln} ${s.soc_net}`}></a>
            <a className={`${s.behance} ${s.soc_net}`}></a>

        </div>

    );
}

export default Footer_social_networks_icon;






