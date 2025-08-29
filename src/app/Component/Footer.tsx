"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

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
            <div className="col-md-4 mb-4 text-center text-md-start">
              <h4 className="fw-bold mb-3">Sushim Chaudhary</h4>
              <p className="small text-light">
                Full Stack Developer blending intuitive design with robust backend logic to deliver seamless, high-performance web applications.
              </p>
              <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
                {[
                  { icon: <FaFacebookF />, bg: "#3b5998", link: "https://www.facebook.com/sushim.ch" },
                  { icon: <FaTiktok />, bg: "#000", link: "https://www.tiktok.com/@su___shi__m" },
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
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4 text-center">
              <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
              <ul className="list-unstyled small d-flex flex-column align-items-center">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/pages/about-us" },
                  { label: "Services", href: "/pages/services" },
                  { label: "Skills", href: "/pages/skills" },
                  { label: "Team", href: "/pages/team" },
                  { label: "Gallery", href: "/pages/gallery" },
                  { label: "Contact", href: "/pages/contact" },
                ].map(({ label, href }, index) => (
                  <li key={index} className="mb-1">
                    <a href={href} className="footer-hover-animated">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4 text-center text-md-start">
              <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Email:{" "}
                  <a href="mailto:sushimchaudhary1@gmail.com" className="footer-hover-animated">
                    sushimchaudhary1@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:9809508957" className="footer-hover-animated">
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

      {/* Footer Hover Animation CSS */}
      <style jsx global>{`
        .footer-hover-animated {
          color: #f8f9fa;
          text-decoration: none;
          font-weight: 400;
          position: relative;
          transition: all 0.3s;
        }

        .footer-hover-animated::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: #ff2007ff;
          transition: width 0.4s ease;
        }

        .footer-hover-animated:hover {
          color: #ff2007ff;
          font-weight: 700;
        }

        .footer-hover-animated:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Footer;
