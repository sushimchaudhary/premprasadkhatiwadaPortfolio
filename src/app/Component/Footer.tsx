"use client";

import { Linkedin } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(""); 

  const logoColor = "#b30302";
  const textColor = "#b30302";

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
        <div className=" mx-auto max-w-7xl px-3 text-xl">
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
              

  

              
            </div>

            {/* Links Grid Section */}
            <div className="col-lg-5 ">
              <div className="row">
               
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
                        href="/about-us"
                        className="text-reset text-decoration-none footer-link"
                      >
                        About Me
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
                        href="/contact"
                        className="text-reset text-decoration-none footer-link"
                      >
                        Contact
                      </a>
                    </li>
                    {/* Email Section */}
                    <li className="mb-3">
                      <a
                        href="mailto:prem.khatiwada2052@gmail.com"
                        className="text-reset text-decoration-none footer-link d-block"
                      >
                        prem.khatiwada2052@gmail.com
                      </a>
                    </li>
                    {/* Phone Section */}
                    <li className="mb-3">
                      <a
                        href="tel:+9779745462746"
                        className="text-reset text-decoration-none footer-link d-block"
                      >
                        +977 9745462746
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
  <span className="text-white">
    Developed by{" "}
    <a
      href="https://sushimchaudhary.com.np/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#b30302]! text-decoration-none fw-semibold"
    >
      sushim ch
    </a>
  </span>
    {" "}all rights reserved.
</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                <a
                  href="https://www.facebook.com/prema.khativada.2025"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://wa.me/9745462746"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@premkhatiwada_78"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <FaTiktok size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prem-prasad-khatiwada-ba16453a7/"
                  target="_blank"
                  className="text-white social-hover"
                >
                  <Linkedin size={18} />
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