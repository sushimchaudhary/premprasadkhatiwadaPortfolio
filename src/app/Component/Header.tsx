"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

declare global {
  interface Window {
    bootstrap: any;
  }
}

export default function Navbar() {
 const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme, resolvedTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  const mainLinks = [
    { name: "Home", href: "/" },

    {
      name: "Services",
      href: "/services",
    },

    { name: "Project", href: "/project" },
    {
      name: "More",
      href: "#",
      dropdown: [
        { name: "About", href: "/about-us" },
        { name: "Skill", href: "/skills" },
        // { name: "gallery", href: "/gallery" },
      ],
    },
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

  useEffect(() => {
  setMounted(true);
}, []);

  // Import Bootstrap JS dynamically
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Close offcanvas on link click (mobile)
  const handleLinkClick = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas) {
      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
      bsOffcanvas?.hide();
    }
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Marquee */}
      <div className="bg-light border-bottom py-2">
        <div className="container">
          <div
            style={{whiteSpace: "nowrap", overflow: "hidden",boxSizing: "content-box",color: "#ee1035ff",
            }}
          >
            <div
              style={{ display: "inline-block",paddingLeft: "100%",animation: "marquee 30s linear infinite",
              }}
            >
              👋 Welcome to my website! I&apos;m Sushim Chaudhary, a passionate
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
        className="navbar navbar-expand-lg custom-navbar d-flex align-items-center justify-content-between px-3"
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
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
          <ul className="navbar-nav d-none d-lg-flex ms-4 flex-row gap-4 align-items-center">
            {mainLinks.map((item) =>
              item.dropdown ? (
                <li
                  key={item.name}
                  className="nav-item dropdown-wrapper"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`nav-link fw-bold d-flex align-items-center gap-1 ${
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                        ? "active"
                        : ""
                    }`}
                  >
                    {item.name}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transition: "transform 0.2s ease",
                        transform:
                          activeDropdown === item.name
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`custom-dropdown ${
                      activeDropdown === item.name ? "show" : ""
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`dropdown-item-link ${
                          pathname === sub.href ? "active" : ""
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
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
              ),
            )}

            {/* Contact CTA Button */}
            <li className="nav-item ms-2 ">
              <Link
                href="/pages/contact"
                className={`contact-cta-btn ${
                  pathname === "/pages/contact" ? "cta-active" : ""
                }`}
              >
                Contact
              </Link>
            </li>

             {/* <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="theme-toggle-btn"
              aria-label="Toggle Dark Mode"
            >
              {mounted && (resolvedTheme === "dark" ? (
                <Sun size={20} color="#ffbd44" />
              ) : (
                <Moon size={20} color="#0c449a" />
              ))}
            </button> */}
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

            <div className="offcanvas-body d-flex flex-column m-2 py-4 gap-2">
              <ul className="navbar-nav w-100 text-start">
                {mainLinks.map((item) =>
                  item.dropdown ? (
                    <li key={item.name} className="nav-item w-100">
                      <button
                        className={`mobile-dropdown-toggle nav-link fw-bold w-100 text-start d-flex justify-content-between align-items-center ${
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/")
                            ? "active"
                            : ""
                        }`}
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          style={{
                            transition: "transform 0.2s ease",
                            transform:
                              activeDropdown === item.name
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {activeDropdown === item.name && (
                        <ul className="mobile-sub-nav ps-3">
                          {item.dropdown.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className={`nav-link py-1 ${
                                  pathname === sub.href ? "active" : ""
                                }`}
                                onClick={handleLinkClick}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={item.name} className="nav-item w-100">
                      <Link
                        href={item.href}
                        className={`nav-link fw-bold ${
                          pathname === item.href ? "active" : ""
                        }`}
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ),
                )}

                {/* Contact CTA Mobile */}
                <li className="nav-item w-100 mt-3">
                  <Link
                    href="/pages/contact"
                    className="contact-cta-btn-mobile"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Styles */}
        <style jsx global>{`


/* Theme Toggle Button Style */
          .theme-toggle-btn {
            background: rgba(14, 150, 254, 0.1);
            border: 1px solid rgba(14, 150, 254, 0.2);
            padding: 8px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .theme-toggle-btn:hover {
            background: rgba(14, 150, 254, 0.2);
            transform: scale(1.1);
          }

          /* Dark Mode support for navbar */
          [data-theme='dark'] .custom-navbar {
            background-color: #121212 !important;
            border-bottom: 1px solid #333;
          }

          [data-theme='dark'] .custom-navbar.sticky {
            background-color: #1a1a1a !important;
          }

          [data-theme='dark'] .nav-link {
            color: #ffffff !important;
          }

          [data-theme='dark'] .custom-dropdown {
            background: #1e1e1e;
            border-color: #333;
          }

          [data-theme='dark'] .dropdown-item-link {
            color: #ddd;
          }


          /* ── Base Navbar ── */
          .custom-navbar {
            background-color: #ffff;
            transition:
              background-color 0.3s ease,
              backdrop-filter 0.3s ease,
              box-shadow 0.3s ease;
            height: 80px;
          }

          /* Sticky huda black background banaune setup */
          .custom-navbar.sticky {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            z-index: 9999 !important;

            /* Background black banako */
            background-color: #f5f7fa !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
            height: 70px !important;
            transition: all 0.3s ease-in-out;
          }

          /* Sticky huda links lai white banaune */
          .custom-navbar.sticky .nav-link {
            color: black !important;
          }

          /* Sticky huda active link ko color thikai rakhne ya adjust garnu */
          .custom-navbar.sticky .nav-link.active {
            color: #0e96fe !important; /* Tapai ko primary blue color */
          }

          /* Sticky huda Logo ya brand text yadi image hoina vane white banauna */
          .custom-navbar.sticky .navbar-brand {
            color: black !important;
          }

          /* Sticky huda toggler icon (mobile) lai white frame dine */
          .custom-navbar.sticky .navbar-toggler {
            filter: invert(1);
          }

          /* Container lai transparent nai rakhne */
          .custom-navbar.sticky .container {
            background: transparent !important;
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }

          /* ── Desktop Nav Links ── */
          .navbar-nav .nav-link {
            color: #0e96fe;
            position: relative;
            text-decoration: none !important;
            transition: color 0.2s ease;
            padding-bottom: 4px;
          }

          /* No underline by default, no hover underline */
          .navbar-nav .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0%;
            height: 2px;
            background-color: #0e96fe;
            transition: none;
          }

          /* Only active link gets underline */
          .navbar-nav .nav-link.active::after {
            width: 100%;
          }

          .navbar-nav .nav-link.active {
            color: #0e96fe;
          }

          /* Hover: only color change, NO underline */
          .navbar-nav .nav-link:hover {
            color: #0c449a;
          }
          .navbar-nav .nav-link:hover::after {
            width: 0% !important;
          }

          /* ── Dropdown Wrapper ── */
          .dropdown-wrapper {
            position: relative;
          }

          .custom-dropdown {
            position: absolute;
            top: calc(100% + 3px);
            left: 20%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(14, 150, 254, 0.15);
            border-radius: 5px;
            
            min-width: 150px;
            padding: 1px 0;
            opacity: 0;
            pointer-events: none;
            transform: translateX(-50%) translateY(-8px);
            transition:
              opacity 0.2s ease,
              transform 0.2s ease;
            z-index: 1000;
          }

          .custom-dropdown.show {
            opacity: 1;
            pointer-events: all;
            transform: translateX(-50%) translateY(0);
          }

          .dropdown-item-link {
            display: block;
            padding: 9px 20px;
            color: black;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none !important;
            transition:
              background 0.2s ease,
              color 0.2s ease;
            border-left: 3px solid transparent;
          }

          .dropdown-item-link:hover {
            background: rgba(14, 150, 254, 0.08);
            color: #0e96fe;
            border-left-color: #0e96fe;
          }

          .dropdown-item-link.active {
            color: #0e96fe;
            border-left-color: #0e96fe;
            background: rgba(14, 150, 254, 0.06);
          }

          /* ── Contact CTA Button ── */
          .contact-cta-btn {
            display: inline-block;
            padding: 4px 22px;
            background:#0f95fe;
            color: white !important;
            font-weight: 700;
            font-size: 0.9rem;
            border-radius: 4px;
            text-decoration: none !important;
            box-shadow: 0 4px 15px rgba(14, 150, 254, 0.3);
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              background 0.2s ease;
            letter-spacing: 0.02em;
          }

          .contact-cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(14, 150, 254, 0.45);
            background:#0f95fe
            color: black !important;
          }

          .contact-cta-btn.cta-active {
            background: linear-gradient(135deg, #0c449a, #0e96fe);
            box-shadow: 0 4px 20px rgba(14, 150, 254, 0.5);
          }

          /* ── Mobile Offcanvas ── */
          .offcanvas.offcanvas-end {
            width: 60% !important;
            height: 100vh;
            background: #eaeaf3ff;
            color: #0c449a;
          }

          .offcanvas-body .nav-link {
            font-size: 1.1rem;
            color: #0f95fe;
            transition: color 0.2s ease;
            text-decoration: none !important;
            padding: 8px 8px;
          }

          

          .offcanvas-body .nav-link:hover {
            color: #0c449a;
          }

          .offcanvas-header {
            border-bottom: 1px solid rgba(14, 150, 254, 0.2);
          }

          .offcanvas-body .navbar-nav .nav-item {
            margin-bottom: 0.5rem;
          }

          .offcanvas-backdrop.show {
            background: rgba(0, 0, 0, 0.3);
          }

          /* Mobile dropdown toggle button */
          .mobile-dropdown-toggle {
            background: none;
            border: none;
            cursor: pointer;
          }

          .mobile-sub-nav {
            list-style: none;
            padding: 0;
            margin: 0 0 8px 12px;
            border-left: 2px solid rgba(14, 150, 254, 0.3);
          }

          .mobile-sub-nav .nav-link {
            font-size: 0.95rem !important;
            color: #0c449a !important;
          }

          /* Contact CTA Mobile */
          .contact-cta-btn-mobile {
            
            display: inline-block;
            padding: 4px 22px;
            background:#0f95fe;
            color: white !important;
            font-weight: 700;
            font-size: 0.9rem;
            border-radius: 4px;
            text-decoration: none !important;
            box-shadow: 0 4px 15px rgba(14, 150, 254, 0.3);
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              background 0.2s ease;
            letter-spacing: 0.02em;
          
           
          }
        `}</style>
      </nav>
    </>
  );
}
