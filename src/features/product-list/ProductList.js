import React from 'react';
import s from './ProductList.module.css';
import Products from "../best-seller/products/Products";

const ProductList = () => {
    const {
        wrapper,
        title_product,
        featured,
        trend,
        products,
        all_products
    } = s;
    return (
        <section className={wrapper}>
            <article className={title_product}>
                <span className={featured}>FEATURED PRODUCTS</span>
                <span className={trend}>Newest trends from top brands</span>
            </article>
            <menu className={products}>
                <section className={all_products}>
                    <Products name='Cruise Dual Analog'/>
                    <Products name='Crown Summit Backpack'/>
                    <Products name='Joust Duffle Bag'/>
                    <Products name='Voyage Yoga Bag'/>
                    <Products name='Compete Track Tote'/>
                </section>
                <section className={all_products}>
                    <Products name='Sprite Yoga Companion Kit'/>
                    <Products name='Strive Shoulder Pack'/>
                    <Products name='Impulse Duffle'/>
                    <Products name='Fusion Backpack'/>
                    <Products name='Endeavor Daytrip'/>
                </section>
            </menu>
        </section>
    );
}

export default ProductList;