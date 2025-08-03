"use client";

import "bootstrap-icons/font/bootstrap-icons.css";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
export default function HomeSection() {
  const typing1Ref = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(typing1Ref.current, {
      strings: ["MERN-Stack Developer", "Graphic Designer", "Programmer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup on unmount
    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <section id="home" className="py-5 bg-light ">
      <div className="container py-5">
        <div className="d-flex flex-column-reverse flex-md-row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-md-8 text-start mb-4 mb-md-0 px-0">
            <div
              className="text-uppercase fw-semibold fs-5 mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "1px",
                color: "#0c449aff", // Bootstrap primary
              }}
            >
              Hello, It's Me
            </div>

            <div
              className="fw-bold display-5 mb-1"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#111", // dark heading
              }}
            >
              Sushim Chaudhary
            </div>

            <div
              className="fs-5 fw-medium mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#222", // consistent dark
              }}
            >
              I'm a{" "}
              <span
                className="typing-1 text-capitalize fw-semibold"
                style={{ color: "#ee1035ff" }}
                ref={typing1Ref}
              ></span>
            </div>

            <div
              className="fs-6 mb-2 fw-normal"
              style={{
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.5px",
                color: "#444",
              }}
            >
              From{" "}
              <span className="fw-semibold" style={{ color: "#222" }}>
                Mourighat
              </span>
            </div>

            <div
              className="fs-6 mb-3 fw-normal"
              style={{
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.3px",
                color: "#444",
              }}
            >
              👋 Hi, I'm a passionate Frontend & MERN Stack Developer from
              Dang, Mourighat, Nepal — I craft responsive, high-performance web
              applications that are both functional and beautifully designed.
              With a strong foundation in MongoDB, Express.js, React, and
              Node.js, I bring ideas to life with clean code, seamless user
              experiences, and a love for solving real-world problems.
            </div>

            <div className="mt-4 d-flex flex-row flex-md-row align-items-start gap-3 text-start align-items-center">
              <a
                href="#"
                className="btn fw-semibold"
                style={{
                  background: "linear-gradient(135deg, #113F67, #58A0C8 )",
                  border: "none",
                  padding: "12px 30px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 20px #58A0C8",
                  transition: "all 0.4s ease",
                  animation: "pulse 2s infinite ease-in-out",
                  fontFamily: "Poppins, sans-serif",
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget;
                  btn.style.transform = "scale(1.05)";
                  btn.style.boxShadow = "0 0 30px #58A0C8";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget;
                  btn.style.transform = "scale(1)";
                  btn.style.boxShadow = "0 0 20px #58A0C8";
                }}
              >
                Hire Me
              </a>

              <div className="d-flex gap-3 fs-4 social-icons">
                <a href="https://www.facebook.com/sushim.ch" title="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://github.com/sushimchaudhary" title="GitHub">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/sushim-chaudhary-458930349/ " title="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

                <style jsx>{`
                  .social-icons a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: #fff;
                    border: none;
                    border-radius: 50%;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* always visible shadow */
                    transition: transform 0.3s ease;
                    color: inherit;
                    text-decoration: none;
                  }

                  .social-icons a:hover {
                    transform: scale(1.1);
                  }

                  .social-icons a:nth-child(1) {
                    color: #0c449aff;
                  }

                  .social-icons a:nth-child(2) {
                    color: #000;
                  }

                  .social-icons a:nth-child(3) {
                    color: #0c449aff;
                  }
                `}</style>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0 ">
            <div
              style={{
                display: "inline-block",
                padding: "7px",
                borderRadius: "50%",
                background: "#0c449a",
              }}
            >
              <div
                style={{
                  padding: "4px",
                  borderRadius: "50%",
                  background: "#fff",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="sushim chaudhary"
                  width={400}
                  height={800}
                  className="img-fluid rounded-circle shadow"
                  style={{
                    maxHeight: "400px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
