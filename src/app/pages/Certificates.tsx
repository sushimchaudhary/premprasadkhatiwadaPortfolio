"use client";

import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const Certificates = () => {
  const certificates = [
    {
      title: "DIT (Diploma in Information Technology)",
      institute: "Adarsha Model Secondary School, Rapti-2, Dang Nepal",
      duration: "23 November, 2021 / 18 November, 2024",
    },
    {
      title: "Web Design / Mern-Stack",
      institute: "Broadway Infosys, Kathmandu, Nepal",
      duration: "17 November, 2024 / 17 April, 2025",
    },
    {
      title: "Computer Basic & Diploma",
      institute: "Good Vision Computer Training Center Rapti Rural Municipality-4 Dang Nepal",
      duration: "1 August, 2023 / 28 April, 2024",
    },
  ];

  return (
    <section className="certificates py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container">
        <div className="title mb-4 text-center">
          <span className="h4 fw-bold text-uppercase" style={{ color: "#0c449aff" }}>
            Certificates
          </span>
        </div>

        <div className="row certificates__box g-4">
          {certificates.map(({ title, institute, duration }, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div
                className="box p-3 rounded h-100 certificate-card transition"
                style={{
                  minHeight: 130,
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  boxShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h2
                  className="text-center pt-2"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "#0c449aff",
                    textTransform: "uppercase",
                  }}
                >
                  {title}
                </h2>

                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div className="certificates_d text-start">
                    <p
                      className="mb-1"
                      style={{
                        color: "#555",
                        fontSize: "0.95rem",
                        textTransform: "capitalize",
                      }}
                    >
                      {institute}
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "0.85rem", fontWeight: "400" }}
                    >
                      {duration}
                    </p>
                  </div>
                  <div
                    className="certificates_icons fs-4 text-danger icon-hover transition"
                    style={{ cursor: "pointer", color: "#e50914" }}
                  >
                    <BsPlusCircle />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline hover effect */}
      <style jsx>{`
        .icon-hover:hover {
          color: #0c449a !important;
        }
        .certificate-card:hover {
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12),
            0 3px 12px rgba(0, 0, 0, 0.08) !important;
          transform: translateY(-4px);
          transition: all 0.3s ease;
        }
        .transition {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
