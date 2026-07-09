"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certificates = [
  {
    title: "DIT (Diploma in Information Technology)",
    institute: "Adarsha Model Secondary School, Rapti-2, Dang Nepal",
    duration: "23 Nov, 2021 - 18 Nov, 2024",
    icon: "bi bi-award",
    color: "#0c449a",
    image: "/certificates/dit.pdf",
  },
  {
    title: "Web Design / Mern-Stack",
    institute: "Broadway Infosys, Kathmandu, Nepal",
    duration: "17 Nov, 2024 - 17 Apr, 2025",
    icon: "bi bi-code-square",
    color: "#ee1035",
    image: "/certificates/mern.pdf",
  },
  {
    title: "Computer Basic & Diploma",
    institute: "Good Vision Computer Training Center, Dang Nepal",
    duration: "1 Aug, 2023 - 28 Apr, 2024",
    icon: "bi bi-laptop",
    color: "#0f95ff",
    image: "/certificates/computer.pdf",
  },
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="Certificates"
      className="py-5 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        fontFamily: "var(--font-mukta), sans-serif",
      }}
    >
      <div className=" mx-auto max-w-7xl px-3">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          
        </div>


        <div className="text-center mb-5" data-aos="fade-down">
            
           <h2 className="fw-bold mb-3" style={{ fontSize: "2.8rem", color: "#0e96fe", letterSpacing: "1px" }}>
            Academic <span style={{ color: "#ee1035" }}>Milestones</span>
          </h2>
          <p className="mx-auto text-muted" style={{ maxWidth: "600px", fontSize: "1.5rem", lineHeight: "1.6" }}>
            A journey of continuous learning and skill acquisition.
          </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", alignItems: "center" }}>
              <div style={{ width: "50px", height: "3px", background: "#ee1035", borderRadius: "2px" }} />
              <div style={{ width: "10px", height: "3px", background: "#0f95ff", borderRadius: "2px" }} />
              <div style={{ width: "6px", height: "3px", background: "#ee1035", opacity: 0.35, borderRadius: "2px" }} />
            </div>
          </div>

        {/* Certificate Grid */}
        <div className="row g-4 justify-content-center">
          {certificates.map((cert, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div 
                className="card h-100 border-0 shadow-sm certificate-card" 
                onClick={() => setSelectedImg(cert.image)} // Fix: Modal open garna lai yo change gariyo
                style={{ cursor: "pointer" }}
              >
                <div className="card-body p-4 text-center d-flex flex-column align-items-center">
                  <div 
                    className="icon-box mb-4" 
                    style={{ 
                      backgroundColor: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`
                    }}
                  >
                    <i className={`${cert.icon}`} style={{ color: cert.color }}></i>
                  </div>

                  <h4 className="card-title fw-bold mb-3">{cert.title}</h4>
                  
                  <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: "0.95rem" }}>
                    <i className="bi bi-geo-alt-fill me-1" style={{ color: "#ee1035" }}></i>
                    {cert.institute}
                  </p>

                  <div className="date-badge" style={{ color: cert.color, border: `1px solid ${cert.color}20` }}>
                    <i className="bi bi-calendar3 me-2"></i>
                    {cert.duration}
                  </div>
                </div>
                <div className="bottom-line" style={{ background: cert.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PDF Popup Modal --- */}
      {selectedImg && (
        <div className="certificate-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={selectedImg} 
              title="Certificate PDF"
              className="pdf-viewer"
            ></iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        .certificate-card {
          border-radius: 10px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          background: #fff;
        }

        .certificate-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
        }

        .icon-box {
          width: 70px; height: 70px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem; transition: all 0.3s ease;
        }

        .certificate-card:hover .card-title { color: #ee1035; }

        .date-badge {
          background: #f8f9fa; padding: 8px 16px;
          border-radius: 10px; font-size: 0.85rem; font-weight: 600;
        }

        .bottom-line {
          height: 4px; width: 40px; margin: 0 auto 20px;
          border-radius: 10px; transition: width 0.4s ease;
        }

        .certificate-card:hover .bottom-line { width: 100%; border-radius: 0; margin-bottom: 0; }

        /* Modal Styles */
        .certificate-modal {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999; padding: 20px;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.3s ease;
        }

        .modal-content-wrapper {
          width: 100%; max-width: 900px;
          background: #fff; border-radius: 12px;
          overflow: hidden; animation: zoomIn 0.3s ease;
        }

        .pdf-viewer {
          width: 100%; height: 85vh; border: none;
        }

        .close-btn {
          position: absolute; top: 20px; right: 30px;
          color: white; font-size: 40px; cursor: pointer;
          z-index: 10001;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.9); } to { transform: scale(1); } }
      `}</style>
    </section>
  );
}