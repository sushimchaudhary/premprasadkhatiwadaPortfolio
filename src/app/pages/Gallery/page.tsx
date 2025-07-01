

// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "bootstrap/dist/css/bootstrap.min.css";

// const images = [
//   "/Samir.jpg",
//   "/Home.jpg",
//   "/Gallery1.jpg",
//   "/Gallery2.jpg",
//   // "/Gallery3.jpg",
//   "/Gallery4.jpg",
//   "/Gallery5.jpg",
//   "/Gallery6.jpg",
//   "/Gallery7.jpg",
 
// ];

// const Gallery = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [swiperReady, setSwiperReady] = useState(false);

//   useEffect(() => {
//     setSwiperReady(true);
//   }, []);

//   return (
//     <section className="gallery py-5" id="Gallery" style={{ backgroundColor: "#f1f5f9" }}>
//       <div className="container position-relative">
//         <h2 className="title text-center mb-4">
//           <span>
//             Gallery
//           </span>
//         </h2>

//         {swiperReady && (
//           <Swiper
//             modules={[Navigation]}
//             navigation={{
//               prevEl: prevRef.current,
//               nextEl: nextRef.current,
//             }}
//             onBeforeInit={(swiper) => {
//               swiper.params.navigation.prevEl = prevRef.current;
//               swiper.params.navigation.nextEl = nextRef.current;
//             }}
//             spaceBetween={20}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               576: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               992: { slidesPerView: 3 },
//             }}
//             className="mySwiper pb-5"
//           >
//             {images.map((src, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className="shadow-sm rounded overflow-hidden p-3 bg-white"
//                   style={{
//                     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   <img
//                     src={src}
//                     alt={`Gallery image ${index + 1}`}
//                     className="img-fluid w-100 rounded"
//                     style={{
//                       maxHeight: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}

//         {/* Custom Arrows */}
//         <button
//           ref={prevRef}
//           className="btn position-absolute top-50 start-0 translate-middle-y custom-arrow"
//         >
//           <i className="bi bi-arrow-left fs-3"></i>
//         </button>

//         <button
//           ref={nextRef}
//           className="btn position-absolute top-50 end-0 translate-middle-y custom-arrow"
//         >
//           <i className="bi bi-arrow-right fs-3"></i>
//         </button>

//         <style jsx>{`
//           .custom-arrow {
//             background-color: white;
//             border: 1px solid #ddd;
//             border-radius: 50%;
//             width: 48px;
//             height: 48px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//             transition: all 0.3s ease;
//             z-index: 10;
//           }
//           .custom-arrow:hover {
//             background: linear-gradient(45deg, #0d6efd, #0a58ca);
//             color: white;
//             border: none;
//             transform: scale(1.1);
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// };

// export default Gallery;
"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";  // <-- Import type here
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "/Samir.jpg",
  "/Home.jpg",
  "/Gallery1.jpg",
  "/Gallery2.jpg",
  // "/Gallery3.jpg",
  "/Gallery4.jpg",
  "/Gallery5.jpg",
  "/Gallery6.jpg",
  "/Gallery7.jpg",
];

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section
      className="gallery py-5"
      id="Gallery"
      style={{ backgroundColor: "#f1f5f9" }}
    >
      <div className="container position-relative">
        <h2 className="title text-center mb-4">
          <span>Gallery</span>
        </h2>

        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Type assertion added here:
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
                <div
                  className="shadow-sm rounded overflow-hidden p-3 bg-white"
                  style={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="img-fluid w-100 rounded"
                    style={{
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom Arrows */}
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
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            z-index: 10;
          }
          .custom-arrow:hover {
            background: linear-gradient(45deg, #0d6efd, #0a58ca);
            color: white;
            border: none;
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;
