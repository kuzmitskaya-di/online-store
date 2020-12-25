import React from 'react';
import s from './ProductList.module.css';
import Products from "../best-seller/products/Products";

const {wrapper, title_product, featured, trend, products, all_products} = s;

const ProductList = () => {
    return (
        <div className={wrapper}>
            <div className={title_product}>
                <span className={featured}>FEATURED PRODUCTS</span>
                <span className={trend}>Newest trends from top brands</span>
            </div>
            <div className={products}>
                <div className={all_products}>
                    <Products name='Cruise Dual Analog'/>
                    <Products name='Crown Summit Backpack'/>
                    <Products name='Joust Duffle Bag'/>
                    <Products name='Voyage Yoga Bag'/>
                    <Products name='Compete Track Tote'/>
                </div>
                <div className={all_products}>
                    <Products name='Sprite Yoga Companion Kit'/>
                    <Products name='Strive Shoulder Pack'/>
                    <Products name='Impulse Duffle'/>
                    <Products name='Fusion Backpack'/>
                    <Products name='Endeavor Daytrip'/>
                </div>
            </div>
        </div>
    );
}

export default ProductList;