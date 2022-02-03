import React from 'react';

import linkSanya from "../../img/link-sanya.png";
import linkGithub from "../../img/link-github.svg";

import "./Footer.sass";

const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer__row row">
                <p className="footer__text">
                    2021© Shop by Pro100CaHya
                </p>
                <a className="footer__link" href="https://pro100cahya.github.io/" target="_blank" rel="noopener noreferrer">
                    <img className="footer__logo" src={linkSanya} alt="link-to-sanya-site" />
                </a>
                <a className="footer__link" href="https://github.com/Pro100CaHya" target="_blank" rel="noopener noreferrer">
                    <img className="footer__logo" src={linkGithub} alt="link-to-sanya-github" />
                </a>
            </div>
        </footer>

    );

}

export default Footer;