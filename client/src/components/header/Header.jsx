import React from 'react';
import { Link } from "react-router-dom";

import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";

import "./Header.sass";

const Header = ({ cartItems }) => {

    const openMenu = () => {

        document.querySelector(".header__nav")
            .classList
            .toggle("nav_active");

        document.querySelector(".header__menu-button")
            .classList
            .toggle("header__menu-button_active");

        document.querySelector(".header")
            .classList
            .toggle("header_active");

        document.querySelector(".body")
            .classList
            .toggle("body_hidden");

    }

    return (

        <header className="header">
            <div className="header__content">
                <div className="header__row row">
                    <Link className="nav__link" to="/">
                        <img className="header__logo" src={logo} alt="logo" />
                    </Link>
                    <h2 className="header__title">React Shop</h2>
                    <nav className="header__nav nav">
                        <ul className="nav__list list">
                            <li className="nav__item">
                                <Link className="nav__link" to="/goods">Goods</Link>
                            </li>
                            <li className="nav__item">
                                <Link className="nav__link" to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link className="header__link-cart" to="/cart">
                        <div className="header__cart">
                            <input className="header__cart-image" type="image" src={cart} alt="cart" />
                            {
                                cartItems.length !== 0
                                    ?
                                    <h2 className="header__cart-counter">{cartItems.length}</h2>
                                    :
                                    ""
                            }
                        </div>
                    </Link>
                    <div className="header__menu-button" onClick={openMenu}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>

    );

}

export default Header;