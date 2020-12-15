import React from 'react';
import s from './Footer.module.css';
import Footer_social_networks from "./soc-network/Footer_social_networks";
import Footer_social_networks_icon from "./soc-network/Footer_social_networks_icon";
import Footer_desc_container from "./footer-desc-container/Footer_desc_container";
import Footer_cooperation from "./footer-cooperation/Footer_cooperation";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_border}>
                <div className={s.footer_size}>
                    <Footer_social_networks/>
                    <Footer_social_networks_icon/>
                </div>
            </div>
            <Footer_desc_container/>
            <Footer_cooperation/>
        </footer>
    );
}

export default Footer;
