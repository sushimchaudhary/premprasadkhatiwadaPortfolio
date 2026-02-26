"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      className="gallery py-5"
      id="Gallery"
      style={{ background: "#f5f7fa" }}
    >
      <div className="container position-relative">
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

        {/* Swiper with Ant Design Image Preview Group */}
        <Image.PreviewGroup>
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            className="mySwiper pb-5"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="gallery-card shadow-sm bg-white"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #eee",
                    padding: "10px",
                  }}
                >
                  <div
                    className="img-wrapper"
                    style={{
                      height: "280px",
                      overflow: "hidden",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f0f2f5",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Gallery ${index}`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain", // "cover" ko sato "contain" use gareko image center ma nabhaccine gari basna lai
                        display: "block",
                      }}
                      preview={{
                        mask: (
                          <div className="custom-mask">
                            <i className="bi bi-eye me-2"></i> View
                          </div>
                        ),
                      }}
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Image.PreviewGroup>

        {/* Custom Navigation Buttons */}
        <div className="nav-controls d-none d-md-flex">
          <button ref={prevRef} className="custom-arrow prev">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button ref={nextRef} className="custom-arrow next">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <style jsx global>{`
          .gallery-card .ant-image {
            width: 100%;
            height: 100%;
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

          .custom-arrow {
            position: absolute;
            top: 55%;
            transform: translateY(-50%);
            width: 45px;
            height: 45px;
            background: #ffffff;
            border: 1px solid #eee;
            color: #0f95ff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 100;
            transition: all 0.3s ease;
          }

          .custom-arrow.prev {
            left: -60px;
          }
          .custom-arrow.next {
            right: -60px;
          }

          .custom-arrow:hover {
            background: #0f95ff;
            color: #fff;
            border-color: #0f95ff;
          }

          @media (max-width: 1250px) {
            .custom-arrow.prev {
              left: 10px;
            }
            .custom-arrow.next {
              right: 10px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;
