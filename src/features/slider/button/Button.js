import React from 'react';
import s from './Button.module.css';


const Button = () => {
    const {
        button
    } = s;
    return (
        <button className={button}>
            BUY NOW
        </button>
    );
}

export default Button;