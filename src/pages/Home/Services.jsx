import React from "react";
import Service from "./Service";

const Services = () => {
    const data = [
        {
            id: 1,
            path: "./images/caterings.png",
            title: "Caterings",
            desc:
                "We do catering services including serving, cooking e.t.c",
        },
        {
            id: 2,
            path: "./images/birthdays.png",
            title: "Birthdays",
            desc: "We also give birthday services",
        },
        {
            id: 3,
            path: "./images/weddings.png",
            title: "Weddings",
            desc: "We give wedding services",
        },
        {
            id: 4,
            path: "./images/events.png",
            title: "Events",
            desc: "We also come for large events and ceremonies",
        },
    ];
    return (
        <section className="services pad wrap-flex gp-50">
            <h1>We also offer unique services for your events</h1>
            <Service data={data} />
        </section>
    );
};

export default Services;
