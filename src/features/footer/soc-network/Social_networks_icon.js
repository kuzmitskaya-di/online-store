import React from 'react';
import s from './Social_networks_icon.module.css';

const Social_networks_icon = () => {
    const {
        social_networks_icon,
        facebook,
        soc_net,
        twitter,
        instagram,
        linkedln,
        behance
    } = s;
    return (

        <section className={social_networks_icon}>
            <a className={`${facebook} ${soc_net} `} href="#"/>
            <a className={`${twitter} ${soc_net}`} href="#"/>
            <a className={`${instagram} ${soc_net}`} href="#"/>
            <a className={`${linkedln} ${soc_net}`} href="#"/>
            <a className={`${behance} ${soc_net}`} href="#"/>

        </section>

    );
}

export default Social_networks_icon;






