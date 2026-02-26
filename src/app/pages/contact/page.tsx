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
        "service_eag2w6n",
        "template_wwwi88e",
        formRef.current,
        "0hMkyRs62bH2eLeUe"
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
      <section
        className="contact py-5"
        id="Contact"
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#f9fbfd",
        }}
      >
        <div className="container">
          <h2
            className="title text-center mb-5"
            style={{ fontWeight: "700", fontSize: "2.5rem", color: "#0e96fe" }}
          >
            Contact <span style={{ color: "#ee1035ff" }}>Me</span>
          </h2>

          <div className="row g-5 align-items-start">
            {/* Left Contact Info */}
            <div className="col-12 col-lg-6">
              <div
                className="p-4 shadow-sm rounded-2 bg-white h-100 border border-0"
                style={{
                  boxShadow: "0 8px 24px rgba(49, 120, 244, 0.12)",
                  transition: "transform 0.3s ease",
                }}
              >
                <h3
                  className="fw-semibold fs-4 text-dark mb-4"
                  style={{
                    textTransform: "capitalize",
                    letterSpacing: "0.05em",
                  }}
                >
                  Let's Get In Touch
                </h3>
                <p
                  className="mb-5 text-secondary"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                >
                  Whether you want to say hello, discuss a project, or have a
                  suggestion, I am here to connect.
                </p>

                {/* Contact Info Blocks */}
                {[
                  {
                    icon: <BiLogoGithub size={24} />,
                    label: "GitHub",
                    link: "https://github.com/sushimchaudhary",
                    value: "sushimchaudhary",
                    color: "#171515",
                    hoverBg: "#24292e",
                    hrefBlank: true,
                  },
                  {
                    icon: <BiEnvelope size={24} />,
                    label: "Email",
                    link: "mailto:sushimchaudhary1@gmail.com",
                    value: "sushimchaudhary1@gmail.com",
                    color: "#0072c6",
                    hoverBg: "#0e96fe",
                    hrefBlank: true,
                  },
                  {
                    icon: <BiLogoLinkedinSquare size={24} />,
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/sushim-chaudhary-458930349/",
                    value: "Sushim Chaudhary",
                    color: "#0a66c2",
                    hoverBg: "#0e96fe",
                    hrefBlank: true,
                  },
                  {
                    icon: <BsTelephone size={22} />,
                    label: "Phone",
                    link: "tel:9809508957",
                    value: "9809508957",
                    color: "#0a66c2",
                    hoverBg: "#0e96fe",
                    hrefBlank: false,
                  },
                ].map(
                  (
                    { icon, label, link, value, color, hoverBg, hrefBlank },
                    idx
                  ) => (
                    <div
                      key={idx}
                      className="d-flex flex-wrap align-items-center mb-4 border-bottom pb-3 gap-3"
                      style={{ cursor: "default" }}
                    >
                      <div
                        className="flex-shrink-0 d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: color + "22",
                          borderRadius: "50%",
                          width: "44px",
                          height: "44px",
                          color: color,
                          transition: "all 0.3s ease",
                          userSelect: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = hoverBg;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = color + "22";
                          e.currentTarget.style.color = color;
                        }}
                      >
                        {icon}
                      </div>
                      <div>
                        <p
                          className="mb-1 fw-semibold text-dark fs-6"
                          style={{ textTransform: "capitalize" }}
                        >
                          {label}
                        </p>
                        <a
                          href={link}
                          target={hrefBlank ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="text-decoration-none fw-medium"
                          style={{
                            color: "#0e96fe",
                            fontSize: "1.05rem",
                            userSelect: "text",
                          }}
                        >
                          {value}
                        </a>
                      </div>
                    </div>
                  )
                )}

                {/* Social Icons Row */}
                <div className="d-flex gap-3 mt-4">
                  {[
                    {
                      href: "https://www.facebook.com/sushim.ch",
                      icon: <FaFacebookF size={18} />,
                      bgColor: "#4267B2",
                      hoverBg: "#314e86",
                    },
                    {
                      href: "https://www.tiktok.com/@su___shi__m",
                      icon: <FaTiktok size={18} />,
                      bgColor: "#000",
                      hoverBg: "#222",
                    },
                    {
                      href: "https://wa.me/9809508957",
                      icon: <FaWhatsapp size={18} />,
                      bgColor: "#25D366",
                      hoverBg: "#1fa851",
                    },
                  ].map(({ href, icon, bgColor, hoverBg }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "44px",
                        height: "44px",
                        backgroundColor: bgColor,
                        color: "white",
                        transition: "all 0.3s ease",
                        userSelect: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          hoverBg;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          bgColor;
                      }}
                      aria-label={`Social icon ${idx}`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="col-12 col-lg-6">
              <div
                className="p-3 shadow-sm rounded-2 bg-white border border-0"
                style={{
                  boxShadow: "0 8px 24px rgba(49, 120, 244, 0.12)",
                }}
              >
                <h3
                  className="fw-bold fs-4 text-dark mb-0 text-capitalize"
                  style={{ letterSpacing: "0.03em" }}
                >
                  Message <span style={{ color: "#ee1035ff" }}>Me!</span>
                </h3>

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="px-2 py-5 glass-form rounded-2 "
                >
                  {[
                    {
                      id: "fullName",
                      name: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your full name",
                      required: true,
                    },
                    {
                      id: "emailAddress",
                      name: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "yourname@example.com",
                      required: true,
                    },
                    {
                      id: "phoneNumber",
                      name: "phoneNumber",
                      label: "Phone Number",
                      type: "text",
                      placeholder: "e.g. 98XXXXXXXX",
                      value: phone,
                      pattern: "^(98|97)[0-9]{8}$",
                      title:
                        "Phone number must start with 98 or 97 and be 10 digits long",
                      required: true,
                      onChange: handlePhoneChange,
                    },
                    {
                      id: "subject",
                      name: "title",
                      label: "Subject",
                      type: "text",
                      placeholder: "What is this about?",
                      required: true,
                    },
                  ].map(
                    (
                      {
                        id,
                        name,
                        label,
                        type,
                        placeholder,
                        required,
                        value,
                        pattern,
                        title,
                        onChange,
                      },
                      idx
                    ) => (
                      <div className="form-floating mb-4" key={idx}>
                        <input
                          type={type}
                          id={id}
                          name={name}
                          className="form-control styled-input"
                          placeholder={placeholder}
                          required={required}
                          value={value}
                          pattern={pattern}
                          title={title}
                          onChange={onChange}
                        />
                        <label htmlFor={id}>
                          {label}
                          {required && <span className="text-danger">*</span>}
                        </label>
                      </div>
                    )
                  )}

                  <div className="form-floating mb-4">
                    <textarea
                      id="projectDetails"
                      name="message"
                      className="form-control styled-input"
                      placeholder="Your project description"
                      rows={6}
                      required
                    ></textarea>
                    <label htmlFor="projectDetails">
                      Project Details <span className="text-danger">*</span>
                    </label>
                  </div>

                  <div className="text-center mb-3">
                    <button type="submit" className="btn submit-btn px-5 py-2">
                      Send Me
                    </button>
                  </div>

                  {messageStatus && (
                    <p
                      className={`text-center fw-semibold ${
                        messageStatus.includes("successfully")
                          ? "text-success"
                          : "text-danger"
                      }`}
                      style={{ fontSize: "1rem" }}
                    >
                      {messageStatus}
                    </p>
                  )}

                  <style jsx>{`
                    .glass-form {
                      background: rgba(255, 255, 255, 0.7);
                      backdrop-filter: blur(10px);
                      border: 1px solid rgba(255, 255, 255, 0.25);
                    }
                    .styled-input {
                      font-size: 1rem;
                      border-radius: 3px;
                      border: 1px solid #d1d9e6;
                      transition: all 0.3s ease;
                      background-color: #f9fbfd;
                    }
                    .styled-input:focus {
                      border-color: #3178f4;
                      box-shadow: 0 0 10px rgba(49, 120, 244, 0.3);
                    }
                    .form-floating > label {
                      font-size: 0.95rem;
                      color: #666;
                    }
                    .submit-btn {
                   
                      background: #0e96fe;
                      color: white;
                      font-weight: 600;
                      font-size: 1.1rem;
                      border-radius: 4px;
                      border: none;
                      transition: transform 0.3s ease, box-shadow 0.3s ease;
                      box-shadow: 0 0 15px rgba(88, 160, 200, 0.5);
                      animation: pulse 2s infinite ease-in-out;
                      text-transform: uppercase;
                    }
                    .submit-btn:hover {
                      transform: scale(1.05);
                      box-shadow: 0 0 25px rgba(17, 63, 103, 0.4);
                    }
                    @keyframes pulse {
                      0%,
                      100% {
                        box-shadow: 0 0 15px rgba(88, 160, 200, 0.5);
                      }
                      50% {
                        box-shadow: 0 0 25px rgba(17, 63, 103, 0.6);
                      }
                    }
                  `}</style>
                </form>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div
                className="shadow rounded-2 overflow-hidden p-3"
                style={{
                  boxShadow: "0 12px 30px rgba(49, 120, 244, 0.15)",
                }}
              >
                <iframe
                  className="w-100 rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d556.6704630128265!2d82.6910100399936!3d27.846242622605537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997a5007cb4c56b%3A0x953d9eef8d9576cd!2sSushim%20Developer!5e1!3m2!1sen!2snp!4v1753958779113!5m2!1sen!2snp"
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