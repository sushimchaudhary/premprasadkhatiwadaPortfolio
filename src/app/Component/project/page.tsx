"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern personal portfolio showcasing skills and projects.",
    image: "/project1.png",
    link: "https://sushimchaudhary.vercel.app/",
  },
  {
    title: "Bista Health Polyclinic",
    description:
      "Clinic appointment booking system with admin and doctor management.",
    image: "/project2.png",
    link: "https://bistahealthpolyclinic.com/",
  },
  {
    title: "Teach Space IT Company",
    description:
      "Software company website with services, courses and inquiry system.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
  },
  {
    title: "Channo Cottage",
    description:
      "A restaurant management system with ordering and booking features.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="container py-5">
      <h2
        className="title section-title"
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "2.8rem",
          color: "#0c449a",
          marginBottom: "50px",
          textTransform: "uppercase",
          letterSpacing: "3px",
          textShadow: "0 2px 5px rgba(12, 68, 154, 0.4)",
        }}
      >
        Pro<span style={{ color: "#ee1035ff" }}>ject</span>
      </h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div
            className="col-md-6 col-lg-6"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // Staggered animation
          >
            <div className="card project-card border-0 shadow-lg rounded-4 overflow-hidden h-100">
              <div className="img-wrapper">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold project-title">
                  {project.title}
                </h5>
                <p className="card-text text-muted flex-grow-1">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="btn custom-btn mt-3 align-self-start"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Equal height cards */
        .project-card {
          min-height: 200px; 
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          background-color: #fff;
        }

        .project-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        /* Image scale on hover */
        .img-wrapper {
          overflow: hidden;
        }

        .img-wrapper img {
          height: 220px;
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .img-wrapper img {
          transform: scale(1.05);
        }

        /* Button gradient */
        .custom-btn {
          background: linear-gradient(90deg, #0d1b75, #ff0000);
          border: none;
          color: #fff;
          font-weight: 500;
          transition: transform 0.3s;
          outline: none !important;
          box-shadow: none !important;
        }

        .custom-btn:hover,
        .custom-btn:focus,
        .custom-btn:active {
          transform: translateY(-2px);
        }

        /* Title no hover */
        .project-title {
          color: #000;
          transition: none;
        }

        .project-title:hover,
        .project-title:focus {
          color: #000;
          text-decoration: none;
        }

        /* Remove default link/hover styles */
        .project-card,
        .project-card * {
          outline: none !important;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
