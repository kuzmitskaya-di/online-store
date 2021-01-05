import React from 'react';
import s from './Social_networks.module.css';

const Social_networks = () => {
    const {
        social_networks_slogan
    } = s;
    return (
        <desc className={social_networks_slogan}>We’re confident we’ve provided all the best for you. Stay
            connect with us</desc>
    );
}

export default Social_networks;
