import React from "react";

const ErrorPage = () => {
    return (
        <main className="error pad wrap-flex gp-30">
            <h1>404 NOT FOUND</h1>
            <h3>You have stumbled across a 404 page</h3>
            <p>
                <span>Try going back </span>
                <a href="/">home</a>
            </p>
        </main>
    );
};

export default ErrorPage;
