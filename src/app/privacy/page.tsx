"use client";
import React from "react";

const PrivacyPolicy = () => {
  const brandColor = "#30a3fe";

  return (
    <div className="bg-gray text-white min-vh-100 py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4" style={{ color: brandColor }}>Privacy Policy</h1>
            <p className="text-secondary mb-5">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-5">
              <h4 className="text-white mb-3">1. Information We Collect</h4>
              <p className="text-secondary">We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us via email. This may include your name, email address, and phone number.</p>
            </section>

            <section className="mb-5">
              <h4 className="text-white mb-3">2. How We Use Your Information</h4>
              <ul className="text-secondary">
                <li className="mb-2">To provide and maintain our services.</li>
                <li className="mb-2">To notify you about changes to our projects.</li>
                <li className="mb-2">To send newsletters if you have opted-in.</li>
              </ul>
            </section>

            <section className="mb-5">
              <h4 className="text-white mb-3">3. Data Security</h4>
              <p className="text-secondary">The security of your data is important to us. We use standard security measures to protect your personal information from unauthorized access.</p>
            </section>

            <a href="/" className="btn btn-outline-light px-4 py-2 mt-4" style={{ borderRadius: "8px" }}>Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;