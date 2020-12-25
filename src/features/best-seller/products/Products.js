import React from 'react';
import s from './Products.module.css';
import Hover from './hover/Hover'

const {wrapper, img_product, star, mark, price, star_null, name_product, price_product, hover} = s;

const Products = (props) => {
    return (
        <div className={wrapper}>
            <div className={img_product}>
                {props.size}
                <div className={hover}>
                <Hover />
                </div>
            </div>
            <div className={price}>
            <span className={name_product}>{props.name}</span>
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