import React from 'react';
import s from './Slider.module.css';
import Button from './button/Button';

const {wrapper, content, big_text, big_text_green, description, size} = s;

const Slider = () => {
    return (
        <main className={wrapper}>
            <article className={content}>
                <span className={big_text}>THE BEST</span>
                <span className={`${big_text} ${big_text_green}`}>WOOCOMMERCE</span>
                <span className={description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
                <span className={description}>eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                <Button />
                <span className={size}>1920X800</span>
            </article>
        </main>
    );
}

export default Slider;