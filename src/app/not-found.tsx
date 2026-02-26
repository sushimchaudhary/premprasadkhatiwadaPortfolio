"use client";

import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

export default function NotFound() {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-light text-center position-relative overflow-hidden">
        <div
          className="position-absolute select-none d-flex align-items-center justify-content-center"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",

            opacity: 0.15,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <img
            src="/notfound.png"
            alt="404 Background"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="position-relative" style={{ zIndex: 10 }}>
          <h2 className="display-4 font-weight-bold text-dark mb-3">
            Oops! Page Not Found
          </h2>
          <p
            className="lead text-muted mb-5 mx-auto"
            style={{ maxWidth: "500px" }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Please try going back to the
            homepage.
          </p>

          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
            {/* Home Button - Using your primary blue color */}
            <Link
              href="/"
              className="btn btn-lg d-inline-flex align-items-center gap-2 px-4 shadow-sm"
              style={{
                backgroundColor: "#0e96fe",
                color: "#fff",
                border: "none",
                transition: "all 0.3s ease",
              }}
            >
              <BiHome size={20} />
              Go to Homepage
            </Link>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="btn btn-lg btn-outline-secondary d-inline-flex align-items-center gap-2 px-4 shadow-sm"
            >
              <BsArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
        }
        .btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}
