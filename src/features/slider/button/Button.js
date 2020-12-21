import React from 'react';
import s from './Button.module.css';

const {button, button_text} = s;

const Button = () => {
    return (
      <button className={button}>
          <span className={button_text}>BUY NOW </span>
      </button>
    );
}

export default Button;