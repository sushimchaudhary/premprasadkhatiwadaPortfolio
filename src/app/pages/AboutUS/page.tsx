"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

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
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: true,
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
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <h2
          className="title section-title"
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
        </h2>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <div
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
                display: "block",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* Text */}
          <div
            className="about-text"
            style={{
              animation: "fadeInUp 1.2s ease forwards",
              opacity: 0,
              transform: "translateY(30px)",
              color: "#222",
              fontSize: "1.125rem",
              lineHeight: "1.8",
            }}
          >
            <p
              className="intro"
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
                  textShadow: "4 1 2px #ee1035ff",
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
              <strong>React.js</strong>, and <strong>Node.js</strong>.
              Proficient in modern tools and libraries including{" "}
              <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,{" "}
              <strong>Bootstrap</strong>, <strong>Sass/SCSS</strong>,{" "}
              <strong>JavaScript</strong>, and <strong>Git/GitHub</strong>. I’m
              a fast learner, collaborative team player, and deeply focused on
              writing clean, maintainable code that delivers real-world impact.
            </p>

            <a
              href="/sushim-CV.pdf"
              download
              className="btn btn-danger"
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
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 20px #115693ff",
                transition: "all 0.4s ease",
                animation: "pulse 2s infinite ease-in-out",
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                btn.style.transform = "scale(1.05)";
                btn.style.boxShadow = "0 0 30px #113F67)";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.style.transform = "scale(1)";
                btn.style.boxShadow = "0 0 20px #113F67";
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Merged styles into one <style jsx> */}
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 1 0 20px #113f67;
          }
          50% {
            box-shadow: 0 0 20px #113f67;
          }
          100% {
            box-shadow: 0 0 20px #113f67;
          }
        }
      `}</style>
    </section>
  );
}
