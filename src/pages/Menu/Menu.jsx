import React from "react";
import MenuList from "./MenuList";

const Menu = () => {
    const data = [
        {
            id: 1,
            price: 5000,
            name: "Grilled Chicken",
            desc: "Made with chicken, pepper, oil and other ingredients, grilled",
            path: "./images/grilledchicken.png",
        },
        {
            id: 2,
            price: 5000,
            name: "Fish and fries",
            desc: "Enjoy fried french fries, plantain, salad, fish in a fish shaped tray",
            path: "./images/chickenandchips.png",
        },
        {
            id: 3,
            price: 5000,
            name: "Grilled Fish",
            desc: "Enjoy the taste of grilled fish accompanied with other diced ingredients",
            path: "./images/grilledfish.png",
        },
        {
            id: 4,
            price: 5000,
            name: "Corn",
            desc: "Fill your stomach with specially grilled corn from deegrillsandfries",
            path: "./images/corn.png",
        },
        {
            id: 5,
            price: 5000,
            name: "Fried chicken",
            desc: "how is it different from grillled chicken? This chicken comes with a juicy texture.",
            path: "./images/juicychicken.png",
        },
        {
            id: 6,
            price: 5000,
            name: "Suyah",
            desc: "Get a taste of suyah from deegrillsandfries and you'll never go to aboki again",
            path: "./images/suyah.png",
        },
        {
            id: 7,
            price: 5000,
            name: "Mixed grills",
            desc: "The perfect mix of grilled meat, chicken seasoned with the best grilling ingredients",
            path: "./images/meatandchickensuyah.png",
        },
        {
            id: 8,
            price: 5000,
            name: "Grilled meat",
            desc: "Made with fresh and juicy meat, pepper, oil and other ingredients",
            path: "./images/grilledmeat.png",
        },
    ];
    return (
        <main className="menu-page pad wrap-flex gp-30">
            <div className="menu-heading wrap-flex gp-20">
                <h1>Our Menu</h1>
                <p>
                    We consider all the drivers of change gives you the
                    components you need to change to create a truly happens.
                </p>
            </div>
            <MenuList data={data} />
        </main>
    );
};

export default Menu;
