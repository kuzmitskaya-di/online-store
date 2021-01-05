import React from 'react';
import s from './Title.module.css';

const {wrapper, title_main, title_secondary, title_text} = s;

const Title = () => {
    return (
        <section className={wrapper}>
            <article className={title_main}>BEST SELLERS</article>
            <article className={title_secondary}>The best productions from us</article>
            <desc className={title_text}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    <br/>aliqua.
            </desc>
        </section>
    );
}

export default Title;