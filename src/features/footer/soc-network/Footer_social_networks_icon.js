import React from 'react';
import s from './Footer_social_networks_icon.module.css';

const {footer_social_networks_icon, facebook, soc_net, twitter, instagram, linkedln, behance} = s;

const Footer_social_networks_icon = () => {
    return (

        <div className={footer_social_networks_icon}>
            <a className={`${facebook} ${soc_net} `} href="#"></a>
            <a className={`${twitter} ${soc_net}`} href="#"></a>
            <a className={`${instagram} ${soc_net}`} href="#"></a>
            <a className={`${linkedln} ${soc_net}`} href="#"></a>
            <a className={`${behance} ${soc_net}`} href="#"></a>

        </div>

    );
}

export default Footer_social_networks_icon;






