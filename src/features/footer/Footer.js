import React from 'react';
import s from './Footer.module.css';
import SocialNetworks from "./soc-network/SocialNetworks";
import SocialNetworksIcon from "./soc-network/SocialNetworksIcon";
import DescContainer from "./desc-container/DescContainer";
import FooterCooperation from "./cooperation/FooterCooperation";


const Footer = () => {
    const {
        footer,
        footer_border,
        footer_size
    } = s;
    return (
        <footer className={footer}>
            <section className={footer_border}>
                <div className={footer_size}>
                    <SocialNetworks/>
                    <SocialNetworksIcon/>
                </div>
            </section>
            <DescContainer/>
            <FooterCooperation/>
        </footer>
    );
}

export default Footer;
