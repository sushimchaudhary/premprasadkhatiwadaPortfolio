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
      "Web development is the craft of building powerful, responsive websites from the ground up. I work with modern technologies like HTML, CSS, JavaScript, and React to bring digital ideas to life. Every project is approached with a focus on clean code, smooth performance, and intuitive design. Whether it's a personal portfolio or a full-scale web application, I ensure every pixel and interaction feels intentional. My goal is to create websites that not only look great but also deliver real results for users and businesses alike.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    reverse: false,
  },
  {
   
    icon: "bi bi-cart-plus",
    title: "E-Commerce Website",
    description:
      "I specialize in building high-converting e-commerce platforms that make online shopping seamless and enjoyable. From product listings to checkout flows, every detail is crafted to maximize user engagement and drive sales. I've worked on both frontend and backend aspects of multiple commercial platforms in professional environments. My builds are optimized for speed, mobile responsiveness, and secure transactions. I understand that a great e-commerce experience builds trust — and trust turns visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    reverse: true,
  },
];

export default function Services() {

useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section
        id="Services"
        style={{
          background: "#f5f7fa",
          fontFamily: "Poppins, sans-serif",
          padding: "70px 0",
        }}
      >
        <div className="container">

          {/* Section Heading */}
          <div className="text-center mb-5" data-aos="fade-down">
            
            <h2
              style={{
                fontSize: "2.6rem",
                fontWeight: 700,
                color: "#0f95ff",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "16px",
              }}
            >
              My <span style={{ color: "#ee1035" }}>Services</span>
            </h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", alignItems: "center" }}>
              <div style={{ width: "50px", height: "3px", background: "#ee1035", borderRadius: "2px" }} />
              <div style={{ width: "10px", height: "3px", background: "#0f95ff", borderRadius: "2px" }} />
              <div style={{ width: "6px", height: "3px", background: "#ee1035", opacity: 0.35, borderRadius: "2px" }} />
            </div>
          </div>

          {/* Service Blocks */}
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`row align-items-center g-5 ${index !== servicesData.length - 1 ? "mb-5 pb-4" : ""}`}
              style={{
                borderBottom: index !== servicesData.length - 1 ? "1px solid #e2e6ef" : "none",
                paddingBottom: index !== servicesData.length - 1 ? "60px" : "0",
              }}
            >
              {/* Image Column */}
              <div
                className={`col-md-5 ${service.reverse ? "order-md-2" : "order-md-1"}`}
                data-aos={service.reverse ? "fade-left" : "fade-right"}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(12, 68, 154, 0.12)",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {/* Overlay badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      background: "linear-gradient(to right,  #0f95ff)",
                      color: "#fff",
                      padding: "3px 12px",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.title}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`col-md-7 ${service.reverse ? "order-md-1" : "order-md-2"}`}
                data-aos={service.reverse ? "fade-right" : "fade-left"}
                data-aos-delay="100"
              >
                

                {/* Icon + Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <i
                    className={service.icon}
                    style={{ fontSize: "1.5rem", color: "#ee1035" }}
                  />
                  <h4
                    style={{
                      fontWeight: 700,
                      color: "#0f95ff",
                      fontSize: "1.4rem",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h4>
                </div>

                {/* Accent line */}
                <div
                  style={{
                    width: "45px",
                    height: "3px",
                    background: "linear-gradient(to right, #ee1035, #0f95ff)",
                    borderRadius: "2px",
                    marginBottom: "20px",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.96rem",
                    lineHeight: "1.9",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}