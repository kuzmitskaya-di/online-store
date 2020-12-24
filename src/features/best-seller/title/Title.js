import React from 'react';
import s from './Title.module.css';

const {wrapper, title_main, title_secondary, title_text} = s;

const Title = () => {
    return (
        <div className={wrapper}>
            <span className={title_main}>BEST SELLERS</span>
            <span className={title_secondary}>The best productions from us</span>
            <span className={title_text}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
            </span>
        </div>
    );
}

export default Title;