import React from 'react';
import s from './Hover.module.css';


const Hover = () => {
    const {
        wrapper,
        addCard,
        to_card,
        to_favorites,
        to_update
    } = s;
    return (
        <nav className={wrapper}>
            <li className={`${addCard} ${to_card}`}/>
            <li className={`${addCard} ${to_favorites}`}/>
            <li className={`${addCard} ${to_update}`}/>
        </nav>
    );
}

export default Hover;