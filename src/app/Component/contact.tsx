"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiLogoLinkedinSquare, BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

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
        "service_z2p7ey7",
        "template_ryx3msc",
        formRef.current,
        "ryHvP3IeUyGWib4si"
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
    <section
      className="contact relative overflow-hidden bg-transparent py-16 text-slate-800"
      id="Contact"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Subtle #b30302 ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 25%, rgba(179, 3, 2, 0.06) 0%, transparent 15%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center" data-aos="fade-down">
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-[1.5px] text-slate-900 md:text-[2.6rem]">
            Contact <span className="text-[#b30302]">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[3px] w-[50px] rounded-[2px] bg-[#b30302]" />
            <div className="h-[3px] w-[12px] rounded-[2px] bg-[#8f0201]" />
            <div className="h-[3px] w-[6px] rounded-[2px] bg-[#b30302]/35" />
          </div>
        </div>

        <div className="row g-5 align-items-start">
          {/* Left Contact Info — No Card */}
          <div className="col-12 col-lg-6">
            <div className="py-2 md:pe-4">
              <h3 className="fw-semibold fs-2 mb-3 text-slate-900">
                Let&apos;s Get In Touch
              </h3>
              <p
                className="mb-4 text-slate-600"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                Whether you want to say hello, discuss operations or logistics,
                or have a suggestion, I am here to connect.
              </p>

              {/* Contact Info Blocks */}
              {[
                {
                  icon: <BiEnvelope size={24} />,
                  label: "Email",
                  link: "mailto:prem.khatiwada2052@gmail.com",
                  value: "prem.khatiwada2052@gmail.com",
                  color: "#b30302",
                  hoverBg: "#b30302",
                  hrefBlank: true,
                },
                {
                  icon: <BsTelephone size={22} />,
                  label: "Phone",
                  link: "tel:9745462746",
                  value: "9745462746",
                  color: "#b30302",
                  hoverBg: "#b30302",
                  hrefBlank: false,
                },
                {
                  icon: <BiLogoLinkedinSquare size={24} />,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/prem-prasad-khatiwada-ba16453a7/",
                  value: "Prem Prasad Khatiwada",
                  color: "#0a66c2",
                  hoverBg: "#0a66c2",
                  hrefBlank: true,
                },
                {
                  icon: <FaFacebookF size={20} />,
                  label: "Facebook",
                  link: "https://www.facebook.com/prema.khativada.2025",
                  value: "Prem Prasad Khatiwada",
                  color: "#4267B2",
                  hoverBg: "#4267B2",
                  hrefBlank: true,
                },
              ].map(
                (
                  { icon, label, link, value, color, hoverBg, hrefBlank },
                  idx
                ) => (
                  <div
                    key={idx}
                    className="d-flex flex-wrap align-items-center mb-4 gap-3 border-b border-slate-200/90 pb-3"
                  >
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center"
                      style={{
                        backgroundColor: color + "18",
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
                        e.currentTarget.style.backgroundColor = color + "18";
                        e.currentTarget.style.color = color;
                      }}
                    >
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="fw-semibold fs-6 mb-1 text-slate-900">
                        {label}
                      </p>
                      <a
                        href={link}
                        target={hrefBlank ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="fw-medium break-all !no-underline transition-colors hover:underline"
                        style={{
                          color: "#b30302",
                          fontSize: "1.02rem",
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
              <div className="d-flex mt-4 gap-3">
                {[
                  {
                    href: "https://www.facebook.com/prema.khativada.2025",
                    icon: <FaFacebookF size={16} />,
                    bgColor: "#b30302",
                    hoverBg: "#8f0201",
                    label: "Facebook",
                  },
                  {
                    href: "https://www.linkedin.com/in/prem-prasad-khatiwada-ba16453a7/",
                    icon: <BiLogoLinkedinSquare size={18} />,
                    bgColor: "#b30302",
                    hoverBg: "#8f0201",
                    label: "LinkedIn",
                  },
                  {
                    href: "https://wa.me/9779745462746",
                    icon: <FaWhatsapp size={17} />,
                    bgColor: "#b30302",
                    hoverBg: "#8f0201",
                    label: "WhatsApp",
                  },
                ].map(({ href, icon, bgColor, hoverBg, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle !no-underline"
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: bgColor,
                      color: "white",
                      transition: "all 0.3s ease",
                      userSelect: "none",
                      boxShadow: "0 4px 12px rgba(179, 3, 2, 0.25)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        hoverBg;
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        bgColor;
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)";
                    }}
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contact Form — No Card */}
          <div className="col-12 col-lg-6">
            <div className="py-2 md:ps-4">
              <h3 className="fw-bold fs-3 mb-2 text-slate-900">
                Message <span className="text-[#b30302]">Me!</span>
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="pt-3">
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
                    placeholder: "e.g. 97XXXXXXXX",
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
                        {required && (
                          <span className="text-[#b30302]">*</span>
                        )}
                      </label>
                    </div>
                  )
                )}

                <div className="form-floating mb-4">
                  <textarea
                    id="contactMessage"
                    name="message"
                    className="form-control styled-input"
                    placeholder="Write your message here"
                    rows={6}
                    required
                  ></textarea>
                  <label htmlFor="contactMessage">
                    Message <span className="text-[#b30302]">*</span>
                  </label>
                </div>

                <div className="mb-1 text-center">
                  <button
                    type="submit"
                    className="btn submit-btn px-5 py-2"
                  >
                    Send Me
                  </button>
                </div>

                {messageStatus && (
                  <p
                    className={`fw-semibold mt-3 text-center ${
                      messageStatus.includes("successfully")
                        ? "text-success"
                        : "text-[#b30302]"
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    {messageStatus}
                  </p>
                )}

                <style jsx>{`
                  .styled-input {
                    font-size: 1rem;
                    border-radius: 6px;
                    border: 1px solid #cbd5e1;
                    transition: all 0.3s ease;
                    background-color: rgba(255, 255, 255, 0.85);
                  }
                  .styled-input:focus {
                    border-color: #b30302;
                    box-shadow: 0 0 10px rgba(179, 3, 2, 0.22);
                    background-color: #ffffff;
                  }
                  .form-floating > label {
                    font-size: 0.95rem;
                    color: #64748b;
                  }
                  .submit-btn {
                    background: #b30302;
                    color: white;
                    font-weight: 600;
                    font-size: 1.05rem;
                    border-radius: 6px;
                    border: none;
                    transition: transform 0.3s ease, box-shadow 0.3s ease,
                      background-color 0.3s ease;
                    box-shadow: 0 6px 20px rgba(179, 3, 2, 0.3);
                    animation: pulse 2.2s infinite ease-in-out;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                  }
                  .submit-btn:hover {
                    background: #960201;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(179, 3, 2, 0.42);
                  }
                  @keyframes pulse {
                    0%,
                    100% {
                      box-shadow: 0 6px 18px rgba(179, 3, 2, 0.28);
                    }
                    50% {
                      box-shadow: 0 8px 24px rgba(179, 3, 2, 0.42);
                    }
                  }
                `}</style>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;