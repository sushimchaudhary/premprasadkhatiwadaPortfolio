"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef } from "react";

function Header() {
  useEffect(() => {
    // 👇 Bootstrap JS client-side मा मात्र लोड गर्नुहोस्
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const navRef = useRef<HTMLElement>(null); // ✅ Define here first

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY > 300) {
        navRef.current.classList.add("sticky");
      } else {
        navRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-light border-bottom py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  boxSizing: "content-box",
                  color: "#ee1035ff",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    paddingLeft: "100%",
                    animation: "marquee 30s linear infinite",
                  }}
                >
                  👋 Welcome to my website! I'm Sushim Chaudhary, a passionate
                  beginner MERN STACK Developer and Graphic Designer from Dang,
                  Mourighat, Nepal, currently based in Kathmandu.
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>

      <nav
        ref={navRef}
        className="navbar navbar-expand-lg py-3 bg-light"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "500",
          fontSize: "1rem",
          color: "#0c449a",
          // backgroundColor: "transparent",
          borderBottom: "1px solid #dbe9ff",
        }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="/"
            style={{
              fontWeight: "600",
              fontSize: "1.5rem",
              color: "#ee1035ff !important",
            }}
          >
            Sushim Chaudhary
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasNavbarLabel"
                style={{
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#0c449a",
                }}
              >
                Sushim Chaudhary
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 gap-4 align-items-lg-start align-items-center">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pages/AboutUS">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pages/Services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pages/Skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pages/Team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pages/Gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pages/Contact">
                    Contact
                  </a>
                </li>
              </ul>
              <style jsx global>{`
                .navbar-nav .nav-link {
                  font-size: 1rem;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.3px;
                  color: #333 !important;
                  transition: color 0.3s ease;
                }

                .navbar-nav .nav-link.active {
                  color: #0c449a !important;
                }

                .navbar-nav .nav-link:hover {
                  color: #0c449a !important;
                }

                .sticky {
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  z-index: 1030;
                  background-color: #0c449a !important; /* changed here */
                  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                  animation: slideDown 0.3s ease-in-out;
                }

                @media (min-width: 992px) {
                  .sticky .navbar-nav .nav-link,
                  .sticky .navbar-nav .nav-link.active,
                  .sticky .navbar-brand {
                    color: white !important;
                  }
                }

                /* ✅ Add for logo and toggle icon to be white always when sticky */
                .sticky .navbar-brand {
                  color: white !important;
                }

                .sticky .navbar-toggler {
                  border-color: white !important;
                }

                .sticky .navbar-toggler-icon {
                  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30'
      xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29'
      stroke-width='2' stroke-linecap='round' stroke-miterlimit='10'
      d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
                }

                @keyframes slideDown {
                  from {
                    transform: translateY(-100%);
                  }
                  to {
                    transform: translateY(0);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
