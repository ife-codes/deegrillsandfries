import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer pad">
            <div className="socials">
                <h3 className="all-flex gp-10">
                    <img
                        className="logo"
                        src="./logo.png"
                        alt="Logo"
                        width="50px"
                    />
                    <span>DEEGRILLSANDFRIES</span>
                </h3>
                <p>
                    In the new era of technology we look a in the future with
                    certainty and pride to for our company. we've got you
                    covered with amazing grills and fries that will blow up your
                    taste and make you crave for more, so order now while stock
                    lasts
                </p>
                <div className="contact">
                    <div className="social-links">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="link"
                        >
                            <img src="./icons/twitter.png" width="50px" alt="Facebook" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="link"
                        >
                            <img src="./icons/twitter.png" width="50px" alt="Instagram" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="link"
                        >
                            <img src="./icons/twitter.png" width="50px" alt="Twitter" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="link"
                        >
                            <img src="./icons/twitter.png" width="50px" alt="Facebook" />
                        </a>
                    </div>
                    <div className="whatsapp">
                        <h3>whatsapp number</h3>
                        <p className="phone-number">+234 7083 238 668</p>
                    </div>
                </div>
            </div>
            <div className="pages wrap-flex gp-30">
                <h3>Pages</h3>
                <ul className="wrap-flex gp-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="instagram wrap-flex gp-30">
                <h2>Follow us on instagram</h2>
                <img src="./images/grid.png" alt="" />
            </div>
        </footer>
    );
};

export default Footer;
