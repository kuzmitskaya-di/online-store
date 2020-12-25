import React from 'react';
import s from './Categories.module.css';
import sale_img from '../../static/img/sale.svg'
import fashion_img from '../../static/img/New Fashion Styles.svg'
import season_img from '../../static/img/Summer & Autumn.svg'

const {wrapper, season, sale, new_fashion, categories} = s;

const Categories = () => {
    return(
        <div className={wrapper}>
            <div className={`${season} ${categories}`}>
                <img alt=" " src={season_img} />
            </div>
            <div className={`${sale} ${categories}`}>
                <img alt=" " src={sale_img} />
            </div>
            <div className={`${new_fashion} ${categories}`}>
                <img alt=" " src={fashion_img} />
            </div>
        </div>
    );
}

export default Categories;