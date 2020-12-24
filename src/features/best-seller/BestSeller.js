import React from 'react';
import s from './BestSeller.module.css';
import Title from "./title/Title";
import Products from "./products/Products";

const {wrapper, wrapper_title} = s;

const BestSeller = () => {
    return (
        <div className={wrapper}>
            <div className={wrapper_title}>
                <Title/>
                <Products/>
                <Products/>
                <Products/>
                <Products />
            </div>
        </div>
    );
}

export default BestSeller;