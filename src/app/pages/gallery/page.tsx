"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Image } from "antd";

const images = [
  "/profile.jpg",
  "/sushim1.jpg",
  "/sushim2.jpg",
  "/sushim3.jpg",
  "/sushim4.jpg",
  "/sushim5.jpg",
  "/sushim6.jpg",
  "/sushim7.jpg",
];

const Gallery = () => {
  return (
    <section
      className="gallery py-5"
      id="Gallery"
      style={{ background: "#f5f7fa" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 700,
              color: "#0f95ff",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "16px",
            }}
          >
            My <span style={{ color: "#ee1035" }}>Gallery</span>
          </h2>
          <div className="d-flex justify-content-center gap-2 align-items-center mb-4">
            <div
              style={{
                width: "50px",
                height: "3px",
                background: "#ee1035",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                width: "10px",
                height: "3px",
                background: "#0f95ff",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "3px",
                background: "#ee1035",
                opacity: 0.35,
                borderRadius: "2px",
              }}
            />
          </div>
          <p
            className="mx-auto text-muted"
            style={{
              maxWidth: "600px",
              fontSize: "1.05rem",
              lineHeight: "1.6",
            }}
          >
            Capturing the beauty of{" "}
            <span style={{ color: "#0f95ff", fontWeight: "600" }}>
              places I've explored
            </span>{" "}
            and the
            <span style={{ color: "#ee1035", fontWeight: "600" }}>
              {" "}
              moments I've lived
            </span>
            . Click to relive the journey with{" "}
            <span style={{ color: "#0f95ff", fontWeight: "600" }}>
              Zoom & Preview
            </span>
            .
          </p>
        </div>

        {/* Masonry / Pinterest style grid */}
        <Image.PreviewGroup>
          <div className="masonry-grid">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                className="masonry-item shadow-sm bg-white"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index}`}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "2px",
                  }}
                  preview={{
                    mask: (
                      <div className="custom-mask">
                        <i className="bi bi-eye me-2"></i> View
                      </div>
                    ),
                  }}
                />
              </motion.div>
            ))}
          </div>
        </Image.PreviewGroup>

        <style jsx global>{`
          .masonry-grid {
            column-count: 4;
            column-gap: 20px;
          }

          @media (max-width: 992px) {
            .masonry-grid {
              column-count: 3;
            }
          }

          @media (max-width: 768px) {
            .masonry-grid {
              column-count: 2;
            }
          }

          @media (max-width: 480px) {
            .masonry-grid {
              column-count: 1;
            }
          }

          .masonry-item {
            break-inside: avoid;
            margin-bottom: 20px;
            border-radius: 4px;
            border: 1px solid #eee;
            padding: 10px;
            overflow: hidden;
          }

          .masonry-item .ant-image {
            width: 100%;
          }

          /* Ant Design Mask (Hover Effect) */
          .custom-mask {
            font-weight: 600;
            font-size: 1rem;
            color: #fff;
          }

          .ant-image-mask {
            border-radius: 2px;
            background: rgba(
              15,
              149,
              255,
              0.4
            ) !important; /* Brand Blue Mask */
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;