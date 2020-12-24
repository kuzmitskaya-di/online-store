import React from 'react';
import s from './Products.module.css';

const {wrapper, img_product, star, mark, price, star_null, name_product, price_product} = s;

const Products = () => {
    return (
        <div className={wrapper}>
            <div className={img_product}>
                300X450
            </div>
            <div className={price}>
            <span className={name_product}>Cruise Dual Analog</span>
            <span className={price_product}>$250.00</span>
            </div>
            <div className={mark}>
            <span className={star}></span>
            <span className={star}></span>
            <span className={star}></span>
            <span className={star}></span>
            <span className={star_null}></span>
            </div>
        </div>
    );
}

export default Products;