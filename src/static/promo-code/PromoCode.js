import React from "react";
import s from './PromoCode.module.css';
import img_1 from '../img/brand-logo-4a.svg'
import img_2 from '../img/brand-logo-1a.svg'
import img_3 from '../img/brand-logo-2a.svg'
import img_4 from '../img/brand-logo-3a.svg'


const {wrapper, wrapper_input, wrapper_subscribe, title, title_1, descr, descr_1, input_button, input_email, button,
    clients} = s;

const PromoCode = () => {
    return (
        <div className={wrapper}>
            <div className={wrapper_input}>
                <div className={wrapper_subscribe}>
                    <div className={title}>
                        <span className={title_1}>Get Out Special Discount</span>
                        <span className={descr_1}>Donec eu tristique felis. Duis augue mi, auctor ut purus et, dignissim aliquet quam. </span>
                        <span className={descr}>register your email for news and special offers</span>
                    </div>
                    <div className={input_button}>
                        <input className={input_email} placeholder="E-mail address ..."/>
                        <button className={button}>GET COUPON NOW</button>
                    </div>
                </div>
            </div>
            <div className={clients}>
                <img src={img_1} alt=" "/>
                <img src={img_2} alt=" "/>
                <img src={img_3} alt=" "/>
                <img src={img_4} alt=" "/>
            </div>
        </div>
    );
}

export default PromoCode