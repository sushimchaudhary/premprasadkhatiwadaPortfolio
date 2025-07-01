"use client";

import React, { useEffect, useState } from "react";
import {
  FaArrowUp,

  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style jsx global>{`
        .social-icon {
          background-color: white;
          color: #1da1f2;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .social-icon:hover {
          transform: scale(1.1);
          opacity: 0.9;
        }

        .footer-link {
          color: #f8f9fa;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: capitalize;
          font-family: "Poppins", sans-serif;
          display: block;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #ffc107;
          text-decoration: underline;
        }

        .footer-contact a {
          font-weight: 500;
          font-family: "Poppins", sans-serif;
          font-size: 0.875rem;
          text-transform: none;
          transition: color 0.3s;
        }

        .footer-contact a:hover {
          color: #ffc107;
        }
      `}</style>

      <footer
        className="bg-primary text-white pt-5 pb-4 mt-5"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="container text-center text-md-start">
          <div className="row">
            {/* About Me */}
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold text-uppercase">Samir Chhetri</h5>
              <p className="text-light small">
                Passionate web developer crafting clean and responsive websites
                using modern tools and technologies.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  style={{
                    backgroundColor: "#3b5998", // Facebook हलुका निलो
                    width: "40px",
                    height: "40px",
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-danger d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-dark d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                >
                  <FaTiktok size={18} />
                </a>
                <a
                  href="https://wa.me/9813493115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-success d-flex align-items-center justify-content-center rounded-circle"
                  style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>

            </div>

            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-semibold text-uppercase">Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/pages/AboutUS" className="footer-link">About</a></li>
                <li><a href="/pages/Services" className="footer-link">Services</a></li>
                <li><a href="/pages/Skills" className="footer-link">Skills</a></li>
                <li><a href="/pages/Team" className="footer-link">Team</a></li>
                <li><a href="#" className="footer-link">Projects</a></li>
                <li><a href="/pages/Gallery" className="footer-link">Gallery</a></li>
                <li><a href="/pages/Contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-3 footer-contact">
              <h6 className="fw-semibold text-uppercase">Contact</h6>
              <ul className="list-unstyled small">
                <li>
                  Email:{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=sameerchhetri494@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "none" }}>
                    sameerchhetri494@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:9813493115"
                    className="text-light text-decoration-none"
                    aria-label="Call Samir"
                  >
                    9813493115
                  </a>
                </li>
              </ul>
            </div>


          </div>
        </div>

        <hr className="border-light my-3" />

        <div
          className="container text-center"
          role="button"
          onClick={scrollToTop}
        >
          <p className="mb-0 text-muted small fw-medium text-uppercase">
            Created By <span className="text-white fw-semibold">SAMIRCHETTRI</span> | © 2025 All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed shadow-sm rounded"
          style={{
            bottom: "30px",
            right: "20px",
            zIndex: 1000,
            borderRadius: "50%",
            padding: "10px 12px",
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
