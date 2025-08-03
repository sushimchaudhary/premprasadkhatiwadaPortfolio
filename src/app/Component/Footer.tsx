"use client";

import React, { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleScroll);
    return () => window.removeEventListener("scroll", toggleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="pt-5 text-white"
        style={{
          background: "linear-gradient(135deg, #0c449a, #071c3e)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="container">
          <div className="row pb-5">
            {/* Branding & Socials */}
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold mb-3">Sushim Chaudhary</h4>
              <p className="small text-light">
                Full Stack Developer blending intuitive design with robust backend logic to deliver seamless, high-performance web applications.
              </p>
              <div className="d-flex gap-3 mt-3">
                {[
                  { icon: <FaFacebookF />, bg: "#3b5998", link: "#" },
                  { icon: <FaInstagram />, bg: "#E1306C", link: "#" },
                  { icon: <FaTiktok />, bg: "#000", link: "#" },
                  { icon: <FaWhatsapp />, bg: "#25D366", link: "https://wa.me/9809508957" },
                ].map(({ icon, bg, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center text-white"
                    style={{
                      backgroundColor: bg,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      fontSize: "1rem",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
              <ul className="list-unstyled small">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/pages/AboutUS" },
                  { label: "Services", href: "/pages/Services" },
                  { label: "Skills", href: "/pages/Skills" },
                  { label: "Team", href: "/pages/Team" },
                  { label: "Gallery", href: "/pages/Gallery" },
                  { label: "Contact", href: "/pages/Contact" },
                ].map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="d-block text-light text-decoration-none py-1"
                      style={{ transition: "color 0.3s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc107")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#f8f9fa")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Email:{" "}
                  <a
                    href="mailto:sushimchaudhary1@gmail.com"
                    className="text-white text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc107")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    sushimchaudhary1@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:9809508957"
                    className="text-white text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc107")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                   9809508957
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-light opacity-35" />

<div className="text-center pb-4 small text-light">
  &copy; {new Date().getFullYear()}{" "}
  <span className="fw-bold text-danger p-1">Sushim Chaudhary</span> &mdash; All rights reserved.
</div>


        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed shadow rounded-circle"
          style={{
            bottom: "30px",
            right: "20px",
            zIndex: 1000,
            width: "42px",
            height: "42px",
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
