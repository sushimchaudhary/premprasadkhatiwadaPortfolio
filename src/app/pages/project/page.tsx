"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Sempa Tech",
    category: "IT Company",
    description:
      "A professional software solutions and premium IT services platform.",
    image: "/project/sempa.png",
    link: "http://sempatech.com/",
  },
  {
    title: "Edify Nepal",
    category: "Blog & Portal",
    description:
      "An interactive blog portal focused on education and digital insights.",
    image: "/project/edifynepal.png",
    link: "https://edifynepal.com/",
  },
  {
    title: "Nepal Chunab",
    category: "Election Portal",
    description: "Real-time election tracking system with data visualization.",
    image: "/project/nepalchunab.png",
    link: "http://nepalchunab.vercel.app/",
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
      <div className="text-center mb-5" data-aos="fade-down">
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
            Pro <span style={{ color: "#ee1035" }}>ject</span>
          </h2>

          {/* Modern Decorative Underline */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "3px",
                background: "#ee1035",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                width: "10px",
                height: "3px",
                background: "#0f95ff",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "3px",
                background: "#ee1035",
                opacity: 0.35,
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Short & Sweet Description */}
          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "600px",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            A showcase of my recent works, blending{" "}
            <span style={{ color: "#0f95ff", fontWeight: "600" }}>
              creative design
            </span>{" "}
            with
            <span style={{ color: "#ee1035", fontWeight: "600" }}>
              {" "}
              modern technology
            </span>{" "}
            to build impactful digital experiences.
          </p>
        </div>
      </div>

      <div className="row g-4 justify-content-center px-lg-4">
        {projects.map((project, index) => (
          <div
            className="col-md-6 col-lg-4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="card project-card border-0 shadow-sm overflow-hidden h-100">
              <div className="img-wrapper position-relative">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
              </div>

              <div className="card-body p-3 d-flex flex-column border-top">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4
                    className="fw-bold m-0 text-dark"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {project.title}
                  </h4>
                  <span className="category-badge-inline">
                    {project.category}
                  </span>
                </div>
                <p
                  className="text-muted small flex-grow-1 mb-3 text-start"
                  style={{ lineHeight: "1.6" }}
                >
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="btn custom-btn py-1.5 w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .about-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #f5f7fa 100%);
          /* Default Mobile Padding */
          padding: 70px 20px;
        }

        /* Desktop (Large devices) ko lagi padding adjustment */
        @media (min-width: 992px) {
          .about-section {
            padding: 70px 50px; /* 20 bata 50 garidiyeko chha */
          }
        }

        .project-card {
          background: #ffffff;
          border-radius: 4px !important;
          transition: box-shadow 0.3s ease;
          border: 1px solid #f0f0f0 !important;
        }

        .project-card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1) !important;
        }

        .img-wrapper {
          height: 200px;
          overflow: hidden;
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-badge-inline {
          background: #f8f9fa;
          color: #6c757d;
          padding: 3px 10px;
          font-size: 0.6rem;
          font-weight: 700;
          border-radius: 4px;
          text-transform: uppercase;
          border: 1px solid #dee2e6;
          white-space: nowrap;
        }

        .custom-btn {
          background: #0f95fe;
          color: white !important;
          border: none;
          font-weight: 600;
          border-radius: 4px !important;
          transition: 0.3s ease;
        }

        .custom-btn:hover {
          background: #1380d4;
          filter: brightness(1.1);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
      </div>
    </section>
  );
}
