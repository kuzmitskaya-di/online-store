import React from 'react';
import s from './BestSeller.module.css';
import Title from "./title/Title";
import Products from "./products/Products";

const {wrapper, wrapper_title} = s;

const BestSeller = () => {
    return (
        <section className={wrapper}>
            <desc className={wrapper_title}>
                <Title/>
                <Products name="Cruise Dual Analog" size="300X450"/>
                <Products name="Crown Summit Backpack"/>
                <Products name="Joust Duffle Bag"/>
                <Products name="Voyage Yoga Bag"/>
            </desc>
        </section>
    );
}

export default BestSeller;