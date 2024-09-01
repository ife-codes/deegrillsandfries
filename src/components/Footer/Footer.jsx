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
                            href="https://x.com/deegrillsfries"
                            target="_blank"
                            className="link"
                        >
                            <img
                                src="./icons/twitter.png"
                                width="50px"
                                alt="Twitter"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/deegrillsandfries/"
                            target="_blank"
                            className="link"
                        >
                            <img
                                src="./icons/instagram.png"
                                width="50px"
                                alt="Instagram"
                            />
                        </a>
                        <a
                            href="https://web.facebook.com/profile.php?id=100067892690813&mibextid=LQQJ4d&rdid=SDUodCOq2FFgtHps&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1Gg9gRAQkpz4qn2u%2F%3Fmibextid%3DLQQJ4d%26_rdc%3D1%26_rdr"
                            target="_blank"
                            className="link"
                        >
                            <img
                                src="./icons/facebook.png"
                                width="50px"
                                alt="Facebook"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@deegrillsandfries"
                            target="_blank"
                            className="link"
                        >
                            <img
                                src="./icons/tiktok.png"
                                width="50px"
                                alt="Tiktok"
                            />
                        </a>
                    </div>
                    <div className="whatsapp">
                        <h3>whatsapp number</h3>
                        <p className="phone-number">08106548904</p>
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
