import React from 'react';
import s from './Footer.module.css';
import Social_networks from "./soc-network/Social_networks";
import Social_networks_icon from "./soc-network/Social_networks_icon";
import Desc_container from "./desc-container/Desc_container";
import Footer_cooperation from "./cooperation/Footer_cooperation";


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
                    <Social_networks/>
                    <Social_networks_icon/>
                </div>
            </section>
            <Desc_container/>
            <Footer_cooperation/>
        </footer>
    );
}

export default Footer;
