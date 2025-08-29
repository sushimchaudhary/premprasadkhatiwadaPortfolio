"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  const typing1Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed1 = new Typed(typing1Ref.current!, {
      strings: [
        "MERN-STACK Developer",
        "Graphic Designer",
        "Programmer",
        "Student",
      ],
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
        background: "linear-gradient(135deg, #f5f7fa 0%, #f5f7fa 100%)",
        padding: "80px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Title */}
        <motion.h2
          className="title section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "2.8rem",
            color: "#0c449a",
            marginBottom: "50px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            textShadow: "0 2px 5px rgba(12, 68, 154, 0.4)",
          }}
        >
          About <span style={{ color: "#ee1035ff" }}>Me</span>
        </motion.h2>

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
                borderRadius: "20px",
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
              style={{
                fontWeight: "700",
                textTransform: "uppercase",
                color: "#0c449a",
                letterSpacing: "1.5px",
                fontSize: "1.75rem",
                marginBottom: "15px",
              }}
            >
              I'm a{" "}
              <span
                ref={typing1Ref}
                style={{
                  color: "#ee1035ff",
                  fontWeight: 650,
                  textShadow: "0 1px 2px rgba(238,16,53,0.5)",
                  fontSize: "1.85rem",
                }}
              ></span>
            </p>

            <p
              style={{
                marginBottom: "30px",
                fontSize: "1.1rem",
                lineHeight: "1.7",
              }}
            >
              I'm a passionate <strong>MERN Stack Developer</strong> driven by a
              mission to build sleek, high-performance web applications. I
              specialize in crafting interactive, scalable user experiences
              using <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
              <strong>React.js</strong>, and <strong>Node.js</strong>. Proficient
              in modern tools like <strong>Next.js</strong>,{" "}
              <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>,{" "}
              <strong>Sass/SCSS</strong>, and <strong>Git/GitHub</strong>. I’m a
              fast learner, collaborative team player, and deeply focused on
              writing clean, maintainable code.
            </p>

            <motion.a
              href="/sushim-cv.pdf"
              download
              className="btn btn-danger"
              whileHover={{ scale: 1.08, boxShadow: "0 0 30px #113F67" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(153deg, #113F67, #58A0C8)",
                border: "none",
                padding: "12px 30px",
                fontWeight: "600",
                fontSize: "1.1rem",
                borderRadius: "10px",
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0 0 20px #115693ff",
                transition: "all 0.4s ease",
                display: "inline-block",
              }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
