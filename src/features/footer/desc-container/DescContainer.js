import React from 'react';
import s from './DescContainer.module.css';
import Information from "./information/Information";
import ContactInfo from "./contact-info/ContactInfo";
import Children from "../../../common/Children";


const DescContainer = () => {
    const {
        desc_container,
        info
    } = s;
    return (
        <menu className={desc_container}>
            <Information>
                <desc className={info}>INFORMATION</desc>
                <Children name="Delivery Information"/>
                <Children name="Discount"/>
                <Children name="Sitemap"/>
                <Children name="Privacy Policy"/>
                <Children name="My Account"/>
            </Information>
            <Information>
                <desc className={info}>MY ACCOUNT</desc>
                <Children name="Sign In"/>
                <Children name="View Cart"/>
                <Children name="My Wishlist"/>
                <Children name="Check Out"/>
                <Children name="Track My Order"/>
            </Information>
            <Information>
                <desc className={info}>HELP</desc>
                <Children name="F. Q. A."/>
                <Children name="Shipping"/>
                <Children name="Contact Us"/>
                <Children name="Privacy Policy"/>
            </Information>
            <ContactInfo/>
        </menu>
    );
}

export default DescContainer;