import React from 'react';
import s from './Products.module.css';
import Hover from './hover/Hover'


const Products = (props) => {
    const {
        wrapper,
        img_product,
        star,
        mark,
        price,
        star_null,
        name_product,
        price_product,
        hover_vary
    } = s;
    return (
        <section className={wrapper}>
            <section className={img_product}>
                {props.size}
                <div className={hover_vary}>
                    <Hover/>
                </div>
            </section>
            <article className={price}>
                <span className={name_product}>{props.name}</span>
                <span className={price_product}>$250.00</span>
            </article>
            <mail className={mark}>
                <span className={star}/>
                <span className={star}/>
                <span className={star}/>
                <span className={star}/>
                <span className={star_null}/>
            </mail>
        </section>
    );
}

export default Products;