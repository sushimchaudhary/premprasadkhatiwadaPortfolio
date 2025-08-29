"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Extend window for Bootstrap
declare global {
  interface Window {
    bootstrap: any;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about-us" },
    { name: "Services", href: "/pages/services" },
    { name: "Skills", href: "/pages/skills" },
    { name: "Team", href: "/pages/team" },
    { name: "Project", href: "/pages/project" },
    { name: "Gallery", href: "/pages/gallery" },
    { name: "Contact", href: "/pages/contact" },
  ];

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("sticky");
        } else {
          navRef.current.classList.remove("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Import Bootstrap JS dynamically
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Close offcanvas on link click (mobile)
  const handleLinkClick = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas);
      bsOffcanvas?.hide();
    }
  };

  return (
    <>
      {/* 🔵 Top Marquee */}
      <div className="bg-light border-bottom py-2">
        <div className="container">
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

      {/* Navbar */}
      <nav
        ref={navRef}
        className="navbar navbar-expand-lg custom-navbar d-flex align-items-center justify-content-between px-3 "
      >
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <img
              src="/logo.png"
              alt="Sushim Chaudhary"
              style={{
                height: "100%",
                width: "150px",
                objectFit: "contain",
                transition: "all 0.3s ease",
              }}
            />
          </Link>

          {/* Desktop Links */}
          <ul className="navbar-nav d-none d-lg-flex ms-4 flex-row gap-4 ">
            {links.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link fw-bold ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Offcanvas Mobile Menu */}
          <div
            className="offcanvas offcanvas-end d-lg-none"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header border-bottom">
              <Link href="/" className="navbar-brand d-flex align-items-center">
                <img
                  src="/logo.png"
                  alt="Sushim Chaudhary"
                  style={{
                    height: "100%",
                    width: "150px",
                    objectFit: "contain",
                    transition: "all 0.3s ease",
                  }}
                />
              </Link>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body d-flex flex-column m-2 py-4 gap-4">
              <ul className="navbar-nav w-100 text-start">
                {links.map((item) => (
                  <li key={item.name} className="nav-item w-100">
                    <Link
                  href={item.href}
                  className={`nav-link fw-bold ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Styles */}
        <style jsx global>{`
          /* Sticky Navbar with blur */
          .custom-navbar.sticky {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1030;
            background-color: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s ease-in-out;
            height: 80px;
            transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }

          /* Offcanvas style */
          .offcanvas.offcanvas-end {
            width: 60% !important;
            height: 100vh;
            background: #eaeaf3ff;
            color: #0c449a;
          }

          .offcanvas-body .nav-link {
            font-size: 1.2rem;
            color: #124fb8ff;
            transition: color 0.3s ease;
          }

          .offcanvas-body .nav-link:hover {
            color: #0d3accff;
          }

          .offcanvas-header {
            border-bottom: 1px solid #043a81ff;
          }

          .offcanvas-body .navbar-nav .nav-item {
            margin-bottom: 1rem;
          }

          .offcanvas-backdrop.show {
            background: rgba(0, 0, 0, 0.3);
          }

          /* Desktop nav link default */
          .navbar-nav .nav-link {
            color: #0c449a;
            position: relative;
            text-decoration: none !important; /* 🚫 disable browser underline */
            transition: color 0.3s ease;
          }

          /* Underline with ::after (blue only) */
          .navbar-nav .nav-link::after {
            content: "";
            position: absolute;
            left: 5;
            bottom: -2px;
            width: 0%;
            height: 2px;
            background-color: #0d46ccff; /* blue underline */
            transition: width 0.3s ease;
          }

          /* Hover state */
          .navbar-nav .nav-link:hover {
            color: #ee1035ff; /* red text on hover */
          }
          .navbar-nav .nav-link:hover::after {
            width: 100%; /* expand underline */
          }

          /* Sticky navbar override (force blue underline even sticky) */
          .custom-navbar.sticky .navbar-nav .nav-link::after {
            background-color: #0d46ccff !important;
          }
        `}</style>
      </nav>
    </>
  );
}
