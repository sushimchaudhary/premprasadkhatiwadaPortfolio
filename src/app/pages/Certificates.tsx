"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const certificates = [
  {
    title: "DIT (Diploma in Information Technology)",
    institute: "Adarsha Model Secondary School, Rapti-2, Dang Nepal",
    duration: "23 November, 2021 / 18 November, 2024",
    icon: "bi bi-award",
  },
  {
    title: "Web Design / Mern-Stack",
    institute: "Broadway Infosys, Kathmandu, Nepal",
    duration: "17 November, 2024 / 17 April, 2025",
    icon: "bi bi-brush",
  },
  {
    title: "Computer Basic & Diploma",
    institute:
      "Good Vision Computer Training Center Rapti Rural Municipality-4 Dang Nepal",
    duration: "1 August, 2023 / 28 April, 2024",
    icon: "bi bi-laptop",
  },
];

export default function Certificates() {
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
          background: "linear-gradient(135deg, #f9fafaff 0%, #edf0f4ff 100%)",
          fontFamily: "Poppins, sans-serif",
        }}
        id="Certificates"
      >
        <div className="container">
          <h2
            className="title text-center fw-bold mb-5"
            style={{
              fontSize: "2.5rem",
              color: "#0c449a",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
            data-aos="fade-down"
          >
            My <span style={{ color: "#ee1035ff" }}>Certificates</span>
          </h2>

          <div className="row g-4">
            {certificates.map((cert, index) => (
              <div
                className="col-md-4"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div
                  className="card h-100 text-center border-0 shadow"
                  style={{
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxShadow: "0 10px 35px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(12, 68, 154, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 35px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div className="card-body py-5 px-4">
                    <div
                      className="mb-4 d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        background: "#e6f0ff",
                        boxShadow: "0 0 15px rgba(12, 68, 154, 0.2)",
                      }}
                    >
                      <i
                        className={cert.icon}
                        style={{ fontSize: "2rem", color: "#0c449a" }}
                      ></i>
                    </div>
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "#0c449a", fontSize: "1.3rem" }}
                    >
                      {cert.title}
                    </h5>
                    <p className="text-muted mb-1">{cert.institute}</p>
                    <small
                      style={{
                        color: "#ee1035ff",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      {cert.duration}
                    </small>
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
