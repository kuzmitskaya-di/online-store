import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.logo}>
                <span className={s.navbar_logo}><span className={s.navbar_logo_green}>RENOSHOP</span>BEE</span>
            </div>
            <div className={s.menu}>
                <a href="#" className={`${s.menu_link} ${s.menu_link_green}`}>HOME</a>
                <a href="#" className={s.menu_link}>WOMEN</a>
                <a href="#" className={s.menu_link}>MEN</a>
                <a href="#" className={s.menu_link}>KIDS</a>
                <a href="#" className={s.menu_link}>JEWELLERY</a>
                <a href="#" className={s.menu_link}>ACCESSORIES</a>
            </div>
            <div className={s.navigation_button}>
                <div className={s.shopping_card_button}>
                    <div className={s.quantity}>
                    <button href="#" className={`${s.nav_but} ${s.basket}`}></button>
                        <div className={s.circle}>3</div>
                    </div>
                </div>
                <button href="#" className={`${s.nav_but} ${s.search}`}></button>
                <button href="#" className={`${s.nav_but} ${s.burger_menu}`}></button>
            </div>
        </nav>
    );
}

export default Navbar;