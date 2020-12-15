import React from 'react';
import s from './Footer_cooperation.module.css';
import visa from './img/Visa_Inc._logo.svg'
import paypal from './img/PayPal.svg'
import amazon from './img/Amazon_logo.svg'
import maestro from './img/maestro.svg'
import amex from './img/amex-svgrepo-com.svg'


const Footer_cooperation = () => {
    return (
        <div className={s.cooperation}>
            <div className={s.cooperation_size}>
                <div className={s.cooperation_text}>
                    Copyright 2017 RenoshopBee all right reserved - Design by BeeStudios
                </div>
                <div className={s.img_payment}>
                    <div className={s.img_payment_container}>
                        <img src={visa} alt='Visa' className={s.visa}/>
                    </div>
                    <div className={s.img_payment_container}>
                        <img src={paypal} alt='PayPal' className={s.paypal}/>
                    </div>
                    <div className={s.img_payment_container}>
                        <img src={amazon} alt='Amazon' className={s.amazon}/>
                    </div>
                    <div className={s.img_payment_container}>
                        <img src={maestro} alt='Maestro' className={s.maestro}/>
                    </div>
                    <div className={s.img_payment_container}>
                        <img src={amex} alt='Amex' className={s.amex}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer_cooperation;
