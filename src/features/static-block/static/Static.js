import React from 'react';
import s from './Static.module.css';

const {wrapper, text1, text2} = s;

const Static = (props) => {
    return(
        <article className={wrapper}>
            <span className={text1}>{props.text1}</span>
            <span className={text2}>{props.text2}</span>
        </article>
    );
}

export default Static;