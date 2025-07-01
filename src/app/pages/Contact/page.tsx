"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiLogoGithub, BiLogoLinkedinSquare, BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState("");
  const [messageStatus, setMessageStatus] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    if (value.length <= 10) setPhone(value);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_8sxcetl",        // ✅ Your EmailJS Service ID
        "template_ji78dps",       // ✅ Updated Template ID
        formRef.current,
        "u7ylTiBGnr3rzj1Az"       // ✅ Your EmailJS Public Key
      )
      .then(() => {
        setMessageStatus("Message sent successfully!");
        formRef.current?.reset();
        setPhone("");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setMessageStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <section className="contact py-5" id="Contact" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="container">

          <h2 className="title text-center mb-4">
            <span>
              Contact
            </span>
          </h2>

          <div className="row g-4 align-items-start">
            {/* Left Contact Info */}
            <div className="col-12 col-lg-6">
              <div className="p-4 shadow rounded-4 bg-white h-100 border border-light">
                <h3 className="fw-semibold fs-4 text-dark mb-2" style={{ textTransform: "capitalize" }}>
                  Let's Get In Touch
                </h3>
                <p className="mb-4 text-secondary" style={{ fontSize: "1rem", fontWeight: "400" }}>
                  We're here for any suggestion or just to have a chat.
                </p>

                {/* Contact Block Wrapper */}
                <div className="d-flex flex-wrap align-items-center mb-4 border-bottom pb-3 gap-3">
                  {/* Icon Box */}
                  <div
                    className="text-primary flex-shrink-0"
                    style={{
                      backgroundColor: "#e6f2ff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1Da1F2";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#e6f2ff";
                      e.currentTarget.style.color = "#1Da1F2";
                    }}
                  >
                    <BiLogoGithub size={22} />
                  </div>
                  {/* Text Content */}
                  <div>
                    <p className="mb-1 fw-semibold text-dark fs-6 fs-md-5" style={{ textTransform: "capitalize" }}>GitHub</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-medium" style={{ color: "#0d6efd", fontSize: "1rem" }}>
                      Samir2061
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex flex-wrap align-items-center mb-4 border-bottom pb-3 gap-3">
                  <div
                    className="text-primary flex-shrink-0"
                    style={{
                      backgroundColor: "#e6f2ff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1Da1F2";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#e6f2ff";
                      e.currentTarget.style.color = "#1Da1F2";
                    }}
                  >
                    <BiEnvelope size={22} />
                  </div>
                  <div>
                    <p className="mb-1 fw-semibold text-dark fs-6 fs-md-5" style={{ textTransform: "capitalize" }}>Email</p>
                    <a href="mailto:sameerchhetri494@gmail.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-medium" style={{ color: "#0d6efd", fontSize: "1rem" }}>
                      sameerchhetri494@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="d-flex flex-wrap align-items-center mb-4 border-bottom pb-3 gap-3">
                  <div
                    className="text-primary flex-shrink-0"
                    style={{
                      backgroundColor: "#e6f2ff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1Da1F2";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#e6f2ff";
                      e.currentTarget.style.color = "#1Da1F2";
                    }}
                  >
                    <BiLogoLinkedinSquare size={22} />
                  </div>
                  <div>
                    <p className="mb-1 fw-semibold text-dark fs-6 fs-md-5" style={{ textTransform: "capitalize" }}>LinkedIn</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-medium" style={{ color: "#0d6efd", fontSize: "1rem" }}>
                      Samir Oli
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center mb-4 border-bottom pb-3 gap-3">
                  <div
                    className="text-primary flex-shrink-0"
                    style={{
                      backgroundColor: "#e6f2ff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1Da1F2";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#e6f2ff";
                      e.currentTarget.style.color = "#1Da1F2";
                    }}
                  >
                    <BsTelephone size={20} />
                  </div>
                  <div>
                    <p className="mb-1 fw-semibold text-dark fs-6 fs-md-5" style={{ textTransform: "capitalize" }}>Phone</p>
                    <a href="tel:9813493115" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-medium" style={{ color: "#0d6efd", fontSize: "1rem" }}>
                      9813493115
                    </a>
                  </div>
                </div>

                {/* 👉 Social Icons Row */}
                <div className="d-flex gap-3 mt-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-primary d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-info d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-dark d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                  >
                    <FaTiktok size={18} />
                  </a>
                  <a
                    href="https://wa.me/9813493115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-success d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>

              </div>
            </div>



            {/* Right Contact Form */}
            <div className="col-12 col-lg-6">
              <div className="p-4 shadow rounded-4 bg-white border border-light">
                <h3 className="fw-bold fs-4 text-dark mb-3 text-capitalize">
                  Message <span className="text-primary">Me!</span>
                </h3>

                <form ref={formRef} onSubmit={sendEmail} className="text-start">
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label fw-semibold text-capitalize" style={{ fontSize: "1rem" }}>
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Your full name"
                      required
                      style={{ fontSize: "1rem", fontWeight: "400" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="emailAddress" className="form-label fw-semibold text-capitalize" style={{ fontSize: "1rem" }}>
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="yourname@example.com"
                      required
                      style={{ fontSize: "1rem", fontWeight: "400" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label fw-semibold text-capitalize" style={{ fontSize: "1rem" }}>
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control form-control-lg"
                      placeholder="e.g. 98XXXXXXXX"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      pattern="^(98|97)[0-9]{8}$"
                      title="Phone number must start with 98 or 97 and be 10 digits long"
                      style={{ fontSize: "1rem", fontWeight: "400" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold text-capitalize" style={{ fontSize: "1rem" }}>
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="title"
                      className="form-control form-control-lg"
                      placeholder="What is this about?"
                      required
                      style={{ fontSize: "1rem", fontWeight: "400" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="projectDetails" className="form-label fw-semibold text-capitalize" style={{ fontSize: "1rem" }}>
                      Project Details <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      name="message"
                      className="form-control"
                      rows={6}
                      placeholder="Please describe your project requirements in detail"
                      required
                      style={{ fontSize: "1rem", fontWeight: "400" }}
                    ></textarea>
                  </div>

                  <div className="text-center mb-2">
                    <button type="submit" className="btn btn-primary px-5 py-2 rounded fw-semibold fs-6 shadow">
                      Send Me
                    </button>
                  </div>

                  {messageStatus && (
                    <p className={`text-center fw-semibold ${messageStatus.includes("successfully") ? "text-success" : "text-danger"}`}>
                      {messageStatus}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div className="shadow rounded-4 overflow-hidden p-3">
                <iframe
                  className="w-100 rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.697266116633!2d82.167308!3d28.378684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a3b407db6603%3A0xb6d486f10ad016fb!2z4KS44KS-4KSo4KSq4KWAIOCkquCkuOCkguCkv-CkqCDgpKrgpYvgpLAg4KS44KSw4KSv4KWN4KSwIOCkvuCkguCkquClgOCkviDgpLngpK_gpYfgpJw!5e0!3m2!1sen!2snp!4v1719741212345!5m2!1sen!2snp"
                  height="450"
                  style={{
                    border: 0,
                    display: "block",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>

  );
};

export default Contact;
