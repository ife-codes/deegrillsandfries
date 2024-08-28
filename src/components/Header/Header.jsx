import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState("close");
    return (
        <header className="header pad sb-flex">
            <h3 className="all-flex gp-10">
                <img
                    className="logo"
                    src="./logo.png"
                    alt="Logo"
                    width="50px"
                />
                <span>DEEGRILLSANDFRIES</span>
            </h3>
            <div  className={open === "open" ? "hamburger active" : "hamburger"}
                onClick={() =>
                    open === "open" ? setOpen("close") : setOpen("open")
                }
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={open === "open" ? "nav-active" : "all-flex gp-30"}>
                <ul className="all-flex gp-20">
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
            </nav>
        </header>
    );
};

export default Header;
