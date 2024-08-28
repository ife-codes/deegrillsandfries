import React from "react";

const Review = ({ data }) => {
    return (
        <div className="reviews-boxes sb-flex gp-20">
            {data.map((review) => (
                <div key={review.id} className="review wrap-flex gp-30">
                    <div className="text wrap-flex gp-20">
                        <p className="quote">"{review.title}"</p>
                        <p>{review.description}</p>
                    </div>
                    <div className="user">
                        <img src={review.path} width="80px" alt="user" />
                        <div className="userinfo">
                            <h4>{review.name}</h4>
                            <p>{review.city}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Review;
