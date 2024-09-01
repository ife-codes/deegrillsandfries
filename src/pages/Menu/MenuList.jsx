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
                    <a href="https://web.facebook.com/profile.php?id=100067892690813&mibextid=LQQJ4d&rdid=SDUodCOq2FFgtHps&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1Gg9gRAQkpz4qn2u%2F%3Fmibextid%3DLQQJ4d%26_rdc%3D1%26_rdr" target="_blank" className="link-to-order">
                        <button className="order-btn">Order Now</button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
