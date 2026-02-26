"use client";
import React from "react";

const TermsAndConditions = () => {
  const brandColor = "#30a3fe";

  return (
    <div className="bg-black text-white min-vh-100 py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4" style={{ color: brandColor }}>Terms & Conditions</h1>
            <p className="text-secondary mb-5">By using this website, you agree to comply with the following terms.</p>

            <section className="mb-5">
              <h4 className="text-white mb-3">1. Intellectual Property</h4>
              <p className="text-secondary">All content, including code, designs, and logos on this site, are the property of <strong>Sushim Chaudhary</strong> unless otherwise stated. Unauthorized use is prohibited.</p>
            </section>

            <section className="mb-5">
              <h4 className="text-white mb-3">2. User Conduct</h4>
              <p className="text-secondary">Users are expected to use the website and contact forms for legitimate professional inquiries only. Spamming or malicious activities are strictly forbidden.</p>
            </section>

            <section className="mb-5">
              <h4 className="text-white mb-3">3. Limitation of Liability</h4>
              <p className="text-secondary">We are not responsible for any damages resulting from the use or inability to use the materials on this website.</p>
            </section>

            <a href="/" className="btn btn-outline-light px-4 py-2 mt-4" style={{ borderRadius: "8px" }}>Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;