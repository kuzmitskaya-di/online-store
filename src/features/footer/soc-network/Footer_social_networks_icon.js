import React from 'react';
import s from './Footer_social_networks_icon.module.css';

const {footer_social_networks_icon, facebook, soc_net, twitter, instagram, linkedln, behance} = s;

const Footer_social_networks_icon = () => {
    return (

        <section className={footer_social_networks_icon}>
            <a className={`${facebook} ${soc_net} `} href="#"/>
            <a className={`${twitter} ${soc_net}`} href="#"/>
            <a className={`${instagram} ${soc_net}`} href="#"/>
            <a className={`${linkedln} ${soc_net}`} href="#"/>
            <a className={`${behance} ${soc_net}`} href="#"/>

        </section>

    );
}

export default Footer_social_networks_icon;






