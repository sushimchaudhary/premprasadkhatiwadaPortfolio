"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  const typing1Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed1 = new Typed(typing1Ref.current!, {
      strings: ["Full-STACK Developer"],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <section
      className="about-section"
      style={{
        background: "#f5f7fa",
        fontFamily: "Poppins, sans-serif",
        padding: "60px 0",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="container"
          style={{ maxWidth: "1300px", margin: "0 auto" }}
        >
          {/* Title */}
          <div className="text-center mb-5" data-aos="fade-down">
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
              About <span style={{ color: "#ee1035" }}>Me</span>
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                alignItems: "center",
              }}
            >
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
          </div>

          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
                overflow: "hidden",
              }}
            >
              <img
                src="/sushim1.jpg"
                alt="Sushim Chaudhary"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              />
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                color: "#222",
                fontSize: "1.125rem",
                lineHeight: "1.8",
              }}
            >
              <p
                className="font-bold uppercase tracking-[1.5px] mb-[15px] text-[#0f95ff] text-xl md:text-[1.75rem]"
                style={{
                  lineHeight: "1.2",
                }}
              >
                I'm a{" "}
                <span
                  ref={typing1Ref}
                  className="text-[#ee1035ff] font-[650] text-2xl md:text-[1.85rem]"
                  style={{
                    textShadow: "0 1px 2px rgba(238,16,53,0.5)",
                  }}
                ></span>
              </p>

                       <div className="mb-4 text-justify font-['Poppins',sans-serif] text-xl font-light leading-[1.8] text-[#1b1c1f]">
 at <strong>Sempa Tech</strong>, where I build fast and reliable web applications. I work mainly with <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>, along with tools like <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Bootstrap</strong>. I also build backend APIs using <strong>Python</strong> with <strong>FastAPI</strong> and <strong>Django</strong>, and stay organized with <strong>Git/GitHub</strong>. I learn quickly, work well in teams, and always aim to write clean, easy-to-maintain code.
</div>

              <motion.a
                href="/certificates/sushim.cv.pdf"
                download
                className="btn submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(153deg, #0f95ff, #0f95ff)",
                  border: "none",
                  padding: "5px 30px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  borderRadius: "4px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  boxShadow: "0 0 6px #0f95ff",
                  transition: "all 0.4s ease",
                  display: "inline-block",
                }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .submit-btn {
            background: #0e96fe;
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
            border-radius: 4px;
            border: none;
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
            box-shadow: 0 0 15px rgba(88, 160, 200, 0.5);
            animation: pulse 2s infinite ease-in-out;
            text-transform: uppercase;
          }
          .submit-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(17, 63, 103, 0.4);
          }
        `}
      </style>
    </section>
  );
}
