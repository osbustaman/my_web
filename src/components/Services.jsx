import React from 'react'

export const Services = () => {
    const services = [
        { title: "Backend Development", description: "Expert in Python, Django, Flask" },
        { title: "AWS Cloud Solutions", description: "Infrastructure, EC2, RDS" },
        { title: "Frontend Development", description: "React, jQuery" },
    ];

    return (
        <section>
            <h2>My Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
