import React from 'react';
import s from './Children.module.css';


const Children = (props) => {
    const {
        information,
        info_link
    } = s;
    return (
        <section className={information}>
            <a href="#" className={info_link}>{props.name}</a>
        </section>
    );
}

export default Children;
