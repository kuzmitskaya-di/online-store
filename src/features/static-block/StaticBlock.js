import React from 'react';
import s from './StaticBlock.module.css';
import Static from "./static/Static";

const {wrapper, fastest_shipping, static_elem, days_return, free_delivery, special_offers} = s;

const StaticBlock = () => {
    return (
        <section className={wrapper}>
            <article className={`${special_offers} ${static_elem}`}>
                <Static text1="Special offers" text2="Shop Big Save Big"/>
            </article>
            <div className={`${free_delivery} ${static_elem}`}>
                <Static text1="Free delivery" text2="Shop Big Save Big"/>
            </div>
            <div className={`${days_return} ${static_elem}`}>
                <Static text1="30 Days Return" text2="Shop Big Save Big"/>
            </div>
            <div className={`${fastest_shipping} ${static_elem}`}>
                <Static text1="Fastest Shipping" text2="Shop Big Save Big"/>
            </div>
        </section>
);
}

export default StaticBlock;