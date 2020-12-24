import React from 'react';
import s from './Button.module.css';

const {button, button_text} = s;

const Button = () => {
    return (
      <button className={button}>
          BUY NOW
      </button>
    );
}

export default Button;