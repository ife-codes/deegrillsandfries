import React from "react";

const MenuList = ({ data }) => {
    return (
        <div className="menus">
            {data.map((menu) => (
                <div className="menu">
                    <img src={menu.path} alt={menu.name} />
                    <p className="price">
                        <span className="n">N</span>
                        <span>{menu.price}</span>
                    </p>
                    <h3>{menu.name}</h3>
                    <p>{menu.desc}</p>
                    <a href="https://web.whatsapp.com" target="_blank" className="link-to-order">
                        <button className="order-btn">Order Now</button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
