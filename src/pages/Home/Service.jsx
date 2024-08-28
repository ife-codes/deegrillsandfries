import React from "react";

const Service = ({ data }) => {
    return (
        <div className="services-boxes sb-flex gp-20">
            {data.map((service) => ( 
                <div className="service wrap-left-flex gp-20" key={service.id}>
                    <img src={service.path} width="230px" height="230px" alt="Service" />
                    <div className="text">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Service;
