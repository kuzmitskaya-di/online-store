import React from 'react';
import s from './Hover.module.css';

const {wrapper, addCard, to_card, to_favorites, to_update} = s;

const Hover = () => {
    return (
        <div className={wrapper}>
            <div className={`${addCard} ${to_card}`}></div>
            <div className={`${addCard} ${to_favorites}`}></div>
            <div className={`${addCard} ${to_update}`}></div>
        </div>
    );
}

export default Hover;