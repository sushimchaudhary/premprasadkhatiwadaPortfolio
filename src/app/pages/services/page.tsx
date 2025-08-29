"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    icon: "bi bi-code-slash",
    title: "Web Development",
    description:
      "Web development is like building and maintaining websites. It involves creating web pages using HTML, CSS, and JavaScript.",
  },
  {
    icon: "bi bi-cart-plus",
    title: "E-Commerce Website",
    description:
      "Built multiple ecommerce platforms, contributing to both frontend and backend in professional environments.",
  },
  {
    icon: "bi bi-palette",
    title: "Graphic Design",
    description:
      "Graphic design is the art of creating visual content to communicate ideas by combining text, imagery, and layout.",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>

      <section
        className="py-5"
        style={{
           background: "linear-gradient(135deg, #f5f7fa 0%, #f5f7fa 100%)",
          fontFamily: "Poppins, sans-serif",
        }}
        id="Services"
      >
        <div className="container ">
          <h2
            className=" title text-center fw-bold mb-5"
            style={{
              fontSize: "2.5rem",
              color: "#0c449a",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
            data-aos="fade-down"
          >
            My <span style={{ color: "#ee1035ff" }}>Services</span>
          </h2>

          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div
                className="col-md-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className="card h-100 text-center border-0 shadow position-relative"
                  style={{
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow: "0 10px 35px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(238, 16, 53, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 35px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  {/* Gradient top deshing bar */}
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x rounded-bottom-pill"
                    style={{
                      width: "60%",
                      height: "8px",
                      background:"linear-gradient(to right, #ee1035ff, #0c449a)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  ></div>

                  <div className="card-body py-5 px-4">
                    <div
                      className="mb-4 d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        background: "#fff0f3",
                        boxShadow: "0 0 15px rgba(238, 16, 53, 0.2)",
                      }}
                    >
                      <i
                        className={service.icon}
                        style={{ fontSize: "2rem", color: "#ee1035ff" }}
                      ></i>
                    </div>
                    <h5
                      className="fw-bold mb-3"
                      style={{
                        color: "#0c449a",
                        fontSize: "1.4rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {service.title}
                    </h5>
                    <p
                      className="text-muted"
                    style={{ fontSize: "0.95rem", fontWeight: "400" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}