import React from "react";

const About = () => {
    return (
        <main className="about pad">
            <h1 className="txt-ct">About Our Food</h1>
            <section className="about-food">
                <img src="./images/about.png" alt="Hot Dog" width="500px" />
                <div className="text">
                    <h1>Our food contains pure nutrients.</h1>
                    <p>
                        When we grill or fry we use the best practices we don't
                        burn food, we don't use wrong equipments, we also add
                        vegetables that makes the body healthy.
                    </p>
                    <p>
                        Our grills are not just about chickens, fishes and
                        fries. It is nutritious, healthy and mos of all
                        delicious. From the vegetables to the seasonings to the
                        ingredients we use fresh and neat ingredients.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;
