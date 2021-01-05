import React from 'react';
import s from './Categories.module.css';
import sale_img from '../../static/img/slider.png'
import fashion_img from '../../static/img/New Fashion Styles.png'
import season_img from '../../static/img/Summer & Autumn.png'


const Categories = () => {
    const {
        wrapper,
        season,
        sale,
        new_fashion,
        categories,
        categ_img
    } = s;
    return (
        <section className={wrapper}>
            <desc className={`${season} ${categories}`}>
                <img className={categ_img} alt=" " src={season_img}/>
            </desc>
            <div className={`${sale} ${categories}`}>
                <img className={categ_img} alt=" " src={sale_img}/>
            </div>
            <div className={`${new_fashion} ${categories}`}>
                <img className={categ_img} alt=" " src={fashion_img}/>
            </div>
        </section>
    );
}

export default Categories;