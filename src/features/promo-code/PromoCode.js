import React from "react";
import s from './PromoCode.module.css';
import img_1 from '../../static/img/brand-logo-4a.svg'
import img_2 from '../../static/img/brand-logo-1a.svg'
import img_3 from '../../static/img/brand-logo-2a.svg'
import img_4 from '../../static/img/brand-logo-3a.svg'


const {wrapper, wrapper_input, wrapper_subscribe, title, title_first , descr, input_button, input_email, button,
    clients} = s;

const PromoCode = () => {
    return (
        <section className={wrapper}>
            <section className={wrapper_input}>
                <desc className={wrapper_subscribe}>
                    <article className={title}>
                        <span className={title_first}>Get Out Special Discount</span>
                        <span className={descr}>Donec eu tristique felis. Duis augue mi, auctor ut purus et, dignissim aliquet quam. </span>
                        <span className={descr}>register your email for news and special offers</span>
                    </article>
                    <form className={input_button}>
                        <input className={input_email} placeholder="E-mail address ..."/>
                        <button className={button}>GET COUPON NOW</button>
                    </form>
                </desc>
            </section>
            <aside className={clients}>
                <img src={img_1} alt=" "/>
                <img src={img_2} alt=" "/>
                <img src={img_3} alt=" "/>
                <img src={img_4} alt=" "/>
            </aside>
        </section>
    );
}

export default PromoCode