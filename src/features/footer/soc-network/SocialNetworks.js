import React from 'react';
import s from './SocialNetworks.module.css';

const SocialNetworks = () => {
    const {
        social_networks_slogan
    } = s;
    return (
        <desc className={social_networks_slogan}>We’re confident we’ve provided all the best for you. Stay
            connect with us</desc>
    );
}

export default SocialNetworks;
