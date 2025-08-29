"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, Variants, easeOut } from "framer-motion";

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
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  // Framer Motion variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section
      className="gallery py-5"
      id="Gallery"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #f5f7fa 100%)",
      }}
    >
      <div className="container position-relative">
        <h2
          className="title text-center mb-4"
          style={{
            color: "#0c449a",
            fontSize: "2.5rem",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#0c449aff" }}>Gallery</span>
        </h2>

        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              const nav = swiper.params.navigation as NavigationOptions;
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
            }}
            className="mySwiper pb-5"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="shadow-sm rounded overflow-hidden p-3 bg-white"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="img-fluid w-100 rounded"
                    style={{ maxHeight: "100%", objectFit: "cover" }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom navigation arrows */}
        <button
          ref={prevRef}
          className="btn position-absolute top-50 start-0 translate-middle-y custom-arrow"
        >
          <i className="bi bi-arrow-left fs-3"></i>
        </button>

        <button
          ref={nextRef}
          className="btn position-absolute top-50 end-0 translate-middle-y custom-arrow"
        >
          <i className="bi bi-arrow-right fs-3"></i>
        </button>

        <style jsx>{`
          .custom-arrow {
            background: linear-gradient(45deg, #e50914, #0c449a);
            color: white;
            border: none;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            z-index: 10;
          }
          .custom-arrow:hover {
            background: linear-gradient(45deg, #0c449a, #e50914);
            transform: scale(1.15);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;