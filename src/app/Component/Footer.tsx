"use client";

import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(""); 

  const logoColor = "#30a3fe";
  const textColor = "#0e95fe";

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

  const handleSubscribe = (e) => {
    e.preventDefault();

   
    if (!email) {
      setError("Email is required!"); 
      return;
    }

    setError("");
    setStatus("Thank you for subscribing!");
    setEmail("");

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <>
      <footer
        className="bg-[#212529] text-white pt-5 pb-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="container px-4 px-lg-5">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="mb-4 d-flex align-items-center">
                <img
                  src={"/logo.png"}
                  alt="Logo"
                  style={{
                    width: "150px",
                    height: "auto",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
              </div>
              <p
                className="text-white small mb-4"
                style={{ maxWidth: "420px", lineHeight: "1.8" }}
              >
                Join our newsletter for regular updates on full-stack
                development and modern UI/UX design.
              </p>

              <form onSubmit={handleSubscribe} className="row g-2" noValidate>
                <div className="col-sm-7 col-9">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (e.target.value) setError("");
                    }}
                    className={`form-control bg-[#303437] border-0 text-white shadow-none py-1.5 px-3 ${error ? "border border-danger" : ""}`}
                    placeholder="example@email.com"
                    style={{ backgroundColor: "#14171A", borderRadius: "4px" }}
                  />
                </div>
                <div className="col-sm-4 col-3">
                  <button
                    type="submit"
                    className="btn w-80 py-1.5 fw-small transition-all"
                    style={{
                      backgroundColor: logoColor,
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Error Message */}
              {error && (
                <p className="mt-2 small text-danger fw-bold transition-all">
                  {error}
                </p>
              )}

              {/* Success Message */}
              {status && (
                <p
                  className="mt-2 small transition-all"
                  style={{ color: logoColor }}
                >
                  {status}
                </p>
              )}
            </div>

            {/* Links Grid Section */}
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6 col-sm-4">
                  <h6
                    className="fw-bold mb-4 small text-uppercase"
                    style={{ color: textColor }}
                  >
                    Work
                  </h6>
                  <ul className="list-unstyled small text-white">
                    <li className="mb-3">
                      <a
                        href="/pages/services"
                        className="text-reset text-decoration-none footer-link"
                      >
                        Services
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="/pages/project"
                        className="text-reset text-decoration-none footer-link"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="/pages/skills"
                        className="text-reset text-decoration-none footer-link"
                      >
                        Skills
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-4">
                  <h6
                    className="fw-bold mb-4 small text-uppercase"
                    style={{ color: textColor }}
                  >
                    Company
                  </h6>
                  <ul className="list-unstyled small text-white">
                    <li className="mb-3">
                      <a
                        href="/pages/about-us"
                        className="text-reset text-decoration-none footer-link"
                      >
                        About Me
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        href="/pages/gallery"
                        className="text-reset text-decoration-none footer-link"
                      >
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
               <div className="col-12 col-sm-4 mt-4 mt-sm-0">
                  <h6
                    className="fw-bold mb-4 small text-uppercase"
                    style={{ color: textColor }}
                  >
                    Support
                  </h6>
                  <ul className="list-unstyled small text-white">
                    <li className="mb-3">
                      <a
                        href="/pages/contact"
                        className="text-reset text-decoration-none footer-link"
                      >
                        Contact
                      </a>
                    </li>
                    {/* Email Section */}
                    <li className="mb-3">
                      <a
                        href="mailto:sushimchaudhary1@gmail.com"
                        className="text-reset text-decoration-none footer-link d-block"
                      >
                        sushimchaudhary1@gmail.com
                      </a>
                    </li>
                    {/* Phone Section */}
                    <li className="mb-3">
                      <a
                        href="tel:+9779809508957"
                        className="text-reset text-decoration-none footer-link d-block"
                      >
                        +977 9809508957
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-5 border-white opacity-25" />

          {/* Bottom Bar */}
          <div className="row align-items-center text-center text-md-start gy-4">
            <div className="col-md-6">
              <p className="text-white small mb-0">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-white">Sushim Chaudhary</span>. All rights
                reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                <a
                  href="https://www.facebook.com/sushim.ch"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://wa.me/9809508957"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@su___shi__m"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <FaTiktok size={18} />
                </a>
                <a
                  href="https://github.com/sushimchaudhary"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .footer-link {
            transition: all 0.3s ease;
            display: inline-block;
          }
          .footer-link:hover {
            color: white !important;
            transform: translateX(5px);
          }
          .social-hover:hover {
            color: ${logoColor} !important;
            transform: translateY(-3px);
            transition: all 0.3s ease;
          }
          .transition-all {
            transition: all 0.3s ease;
          }
          .btn:hover {
            filter: brightness(1.1);
            transform: translateY(-1px);
          }
        `}</style>
      </footer>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn position-fixed shadow-lg rounded-circle d-flex align-items-center justify-content-center border-0"
          style={{
            bottom: "30px",
            right: "20px",
            zIndex: 1000,
            width: "40px",
            height: "40px",
            backgroundColor: logoColor,
            color: "white",
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
