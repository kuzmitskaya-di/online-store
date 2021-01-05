import React from 'react';
import s from './Static.module.css';

const {wrapper, our_offers, our_offers_descr} = s;

const Static = (props) => {
    return(
        <article className={wrapper}>
            <span className={our_offers}>{props.text1}</span>
            <span className={our_offers_descr}>{props.text2}</span>
        </article>
    );
}

export default Static;