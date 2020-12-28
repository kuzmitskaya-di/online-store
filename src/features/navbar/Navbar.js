import React from 'react';
import s from './Navbar.module.css';

const {navbar, logo, navbar_logo, navbar_logo_green, menu, menu_link, menu_link_green, navigation_button, shopping_card_button,
    quantity, nav_but, basket, circle, search, burger_menu} = s;

const Navbar = () => {
    return (
        <nav className={navbar}>
            <section className={logo}>
                <span className={navbar_logo}><span className={navbar_logo_green}>RENOSHOP</span>BEE</span>
            </section>
            <menu className={menu}>
                <a href="#" className={`${menu_link} ${menu_link_green}`}>HOME</a>
                <a href="#" className={menu_link}>WOMEN</a>
                <a href="#" className={menu_link}>MEN</a>
                <a href="#" className={menu_link}>KIDS</a>
                <a href="#" className={menu_link}>JEWELLERY</a>
                <a href="#" className={menu_link}>ACCESSORIES</a>
            </menu>
            <main className={navigation_button}>
                <section className={shopping_card_button}>
                    <div className={quantity}>
                    <button className={`${nav_but} ${basket}`}/>
                        <div className={circle}>3</div>
                    </div>
                </section>
                <button className={`${nav_but} ${search}`}/>
                <button className={`${nav_but} ${burger_menu}`}/>
            </main>
        </nav>
    );
}

export default Navbar;