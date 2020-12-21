import React from 'react';
import s from './Footer_cooperation.module.css';
import visa_img from '../../../static/img/Visa_Inc._logo.svg'
import paypal_img from '../../../static/img/PayPal.svg'
import amazon_img from '../../../static/img/Amazon_logo.svg'
import maestro_img from '../../../static/img/maestro.svg'
import amex_img from '../../../static/img/amex-svgrepo-com.svg'

const {cooperation, cooperation_size, cooperation_text, img_payment, img_payment_container, visa,
    paypal, amazon, maestro, amex} = s;

const Footer_cooperation = () => {
    return (
        <div className={cooperation}>
            <div className={cooperation_size}>
                <div className={cooperation_text}>
                    Copyright 2017 RenoshopBee all right reserved - Design by BeeStudios
                </div>
                <div className={img_payment}>
                    <div className={img_payment_container}>
                        <img src={visa_img} alt='Visa' className={visa}/>
                    </div>
                    <div className={img_payment_container}>
                        <img src={paypal_img} alt='PayPal' className={paypal}/>
                    </div>
                    <div className={img_payment_container}>
                        <img src={amazon_img} alt='Amazon' className={amazon}/>
                    </div>
                    <div className={img_payment_container}>
                        <img src={maestro_img} alt='Maestro' className={maestro}/>
                    </div>
                    <div className={img_payment_container}>
                        <img src={amex_img} alt='Amex' className={amex}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer_cooperation;
