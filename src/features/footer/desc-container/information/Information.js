import React from 'react';
import s from './Information.module.css';


const Information = ({children}) => {
    const {
        information
    } = s;
    return (
        <section className={information}>
            {children}
        </section>
    );
}

export default Information;