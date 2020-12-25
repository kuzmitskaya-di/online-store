import React from "react";
import s from './PromoCode.module.css';

const {wrapper, wrapper_input, wrapper_subscribe, title, title_1, descr, descr_1, input_button, input_email} = s;

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
                        <button></button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default PromoCode