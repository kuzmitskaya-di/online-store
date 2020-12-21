import React from 'react';
import s from './Navbar.module.css';

const {navbar, logo, navbar_logo, navbar_logo_green, menu, menu_link, menu_link_green, navigation_button, shopping_card_button,
    quantity, nav_but, basket, circle, search, burger_menu} = s;

const Navbar = () => {
    return (
        <nav className={navbar}>
            <div className={logo}>
                <span className={navbar_logo}><span className={navbar_logo_green}>RENOSHOP</span>BEE</span>
            </div>
            <div className={menu}>
                <a href="#" className={`${menu_link} ${menu_link_green}`}>HOME</a>
                <a href="#" className={menu_link}>WOMEN</a>
                <a href="#" className={menu_link}>MEN</a>
                <a href="#" className={menu_link}>KIDS</a>
                <a href="#" className={menu_link}>JEWELLERY</a>
                <a href="#" className={menu_link}>ACCESSORIES</a>
            </div>
            <div className={navigation_button}>
                <div className={shopping_card_button}>
                    <div className={quantity}>
                    <button href="#" className={`${nav_but} ${basket}`}></button>
                        <div className={circle}>3</div>
                    </div>
                </div>
                <button href="#" className={`${nav_but} ${search}`}></button>
                <button href="#" className={`${nav_but} ${burger_menu}`}></button>
            </div>
        </nav>
    );
}

export default Navbar;