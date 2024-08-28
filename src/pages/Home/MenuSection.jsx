import React from "react";
import MenuComponent from "./MenuComponent";

const MenuSection = () => {
    const data = [
        {
            id: 1,
            path: "./icons/breakfast.png",
            title: "Breakfast",
            description:
                "We serve popcorn, and other soft snacks packed with coffee for the breakfast feel",
        },
        {
            id: 2,
            path: "./icons/meal.png",
            title: "Main meal",
            description: "The main meal is even more better with asun meat, grilled fish, fried chicken e.t.c",
        },
        {
            id: 3,
            path: "./icons/drinks.png",
            title: "Drinks",
            description: "We have drinks that will cool you down and push the food down though your chest",
        },
        {
            id: 4,
            path: "./icons/desert.png",
            title: "Desert",
            description: "These are other snacks that will be served like puffpuff, meat pie, sausage small chops e.tc",
        },
    ];
    return (
        <section className="menu-section pad wrap-flex gp-50">
            <h1>Browse our menu</h1>
            <MenuComponent data={data} />
        </section>
    );
};

export default MenuSection;
