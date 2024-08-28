import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <section className="landing pad all-flex">
            <div className="wrap-flex gp-30 txt-ct dark">
                <h1 className="large-font">
                    Best Grills And Fries
                    <br /> For Your Taste
                </h1>
                <p>
                    Discover delectable cuisine and unforgettable moments in our
                    <br /> welcoming culinary haven
                </p>
                <Link to="/menu">
                    <button className="landing-btn">Explore menu</button>
                </Link>
            </div>
        </section>
    );
};

export default Landing;
