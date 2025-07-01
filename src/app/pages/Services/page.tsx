"use client";
import React from "react";
import Head from "next/head";

// 👇 Services Data (Inline JSON)
const servicesData = [
    {
        icon: "bi bi-code-slash", // Bootstrap icon alternative for code
        title: "Web Development",
        description:
            "Web development is like building and maintaining websites. It involves creating web pages using languages like HTML, CSS, and JavaScript. Developers use these tools to design how a website looks and make it interactive.",
    },
    {
        icon: "bi bi-cart-plus", // Bootstrap icon for cart
        title: "E-Commerce Website",
        description:
            "I have also build ecommerce websites in my personal project and company. Where I worked on multiple team in company where my contribute is both side frontend and backend.",
    },
    {
        icon: "bi bi-palette", // Bootstrap icon for design
        title: "Graphic Design",
        description:
            "Graphic design is the art and practice of creating visual content to communicate ideas and information. It involves combining text, images, and other elements to produce effective and visually appealing designs..",
    },

];

export default function Services() {
    return (
        <>
            {/* ✅ Head section for CDN CSS imports */}
            <Head>
                {/* Bootstrap */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                {/* Boxicons */}
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                {/* Font Awesome */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
                    rel="stylesheet"
                />
                {/* Bootstrap Icons */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                    rel="stylesheet"
                />

            </Head>

            {/* ✅ SERVICES SECTION */}
            <section className="services-section py-5" id="Services">
                <div className="container">
                    <h2 className="title  text-center">
                        <span className="text-dark">
                            Services
                        </span>
                    </h2>
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div  className="service-card text-center h-100 p-4 rounded border-0">
                                                <div className="service-icon mb-3">
                                        <i className={service.icon} style={{ fontSize: "2rem" }}></i>
                                    </div>
                                    <h5 className="service-title mb-2">{service.title}</h5>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>




        </>
    );
}
