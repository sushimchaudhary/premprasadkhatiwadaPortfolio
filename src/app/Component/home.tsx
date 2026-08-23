"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HomeSection() {
  const typing1Ref = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(typing1Ref.current, {
      strings: ["Full-Stack Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    if (!heroRef.current) return;

    const particles = [];
    const particleCount = 30;
    const colors = [
      "rgba(88, 160, 200, 0.6)",
      "rgba(17, 63, 103, 0.6)",
      "rgba(238, 16, 53, 0.6)",
    ];

    const heroRect = heroRef.current.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = "50%";
      particle.style.filter = "blur(1px)";
      particle.style.left = `${Math.random() * heroRect.width}px`;
      particle.style.top = `${Math.random() * heroRect.height}px`;

      heroRef.current.appendChild(particle);
      particles.push({
        element: particle,
        x: parseFloat(particle.style.left),
        y: parseFloat(particle.style.top),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        radius: parseFloat(particle.style.width) / 2,
      });
    }

    let animationId;
    const animateParticles = () => {
      if (!heroRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (
          particle.x < particle.radius ||
          particle.x > heroRect.width - particle.radius
        ) {
          particle.speedX *= -1;
        }
        if (
          particle.y < particle.radius ||
          particle.y > heroRect.height - particle.radius
        ) {
          particle.speedY *= -1;
        }

        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });

      animationId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      typed1.destroy();
      cancelAnimationFrame(animationId);
      particles.forEach((particle) => {
        if (particle.element.parentNode === heroRef.current) {
          heroRef.current.removeChild(particle.element);
        }
      });
    };
  }, []);

  const socials = [
    {
      icon: "bi-facebook",
      url: "https://www.facebook.com/sushim.ch",
      color: "#0f95fe",
    },
    {
      icon: "bi-github",
      url: "https://github.com/sushimchaudhary",
      color: "#fff",
    },
    {
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/sushim-chaudhary-458930349/",
      color: "#0f95fe",
    },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden text-[#e6f1ff]"
      style={{ background: "linear-gradient(135deg, #0a192f, #172a45)" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 h-full w-full">
        <div
          className="absolute inset-0 h-full w-full"
          // style={{
          //   background:
          //     "radial-gradient(circle at 20% 30%, rgba(88, 160, 200, 0.15) 0%, transparent 40%)",
          //   animation: "moveGradient 15s infinite alternate ease-in-out",
          // }}
        />
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 80% 70%, rgba(238, 16, 53, 0.1) 0%, transparent 40%)",
            animation: "moveGradient2 18s infinite alternate ease-in-out",
          }}
        />
      </div>

      <div className="  mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col-reverse items-center md:flex-row">
          {/* Left Content */}
          <div className="mb-4 w-full text-start md:mb-0 md:w-7/12 md:pe-8">
            <div className="mb-3 text-[1.1rem] font-semibold uppercase tracking-[2px] text-[#0f95fe]">
              <span className="animate__animated animate__fadeInDown inline-block">
                HELLO, I'M
              </span>
            </div>

            <h1
              className="mb-3 text-4xl font-bold leading-[1.2] text-white md:text-5xl"
              style={{ textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
            >
              <span className="animate__animated animate__fadeIn inline-block">
                Sushim
              </span>{" "}
              <span className="animate__animated animate__fadeIn inline-block text-[#0f95fe]">
                Chaudhary
              </span>
            </h1>

            <div className="mb-3 min-h-[60px] font-['Poppins',sans-serif] text-3xl font-medium">
              <span className="me-2 inline-block">I'm a</span>
              <span
                ref={typing1Ref}
                className="typing-1 text-capitalize font-semibold text-[#ee1035]"
                style={{ textShadow: "0 0 8px rgba(238,16,53,0.6)" }}
              />
            </div>
            <div className="mb-4 text-justify font-['Poppins',sans-serif] text-xl font-light leading-[1.8] text-[#ccd6f6]">
              Hi, I'm a Web Developer based in Mourighat, Nepal. I craft
              high-performance, visually stunning websites at Sempa Tech. My
              goal is simple: to help your business stand out by building
              digital experiences that are not just fast and clean, but designed
              to convert and grow.
            </div>

            <div className="mt-4 flex flex-row flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded font-['Poppins',sans-serif] font-semibold tracking-[1px] text-white transition-all duration-[400ms] hover:-translate-y-0.5 !no-underline"
                style={{
                  background: "#0f95fe",
                  padding: "5px 30px",
                  fontSize: "1.1rem",
                  boxShadow: "0 4px 20px rgba(88,160,200,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 30px rgba(88,160,200,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(88,160,200,0.4)";
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 h-full w-full bg-white opacity-0 transition-all group-hover:opacity-10" />
              </Link>

              <div className="social-icons flex gap-3 text-3xl">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-[5px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                    style={{ color: social.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* Right Image Container */}
          <div className="mb-4 w-full py-7 text-center md:mb-0 md:w-5/12">
            <div className="relative mx-auto aspect-square w-full max-w-[450px]">
              <div
                className="absolute inset-0 h-full w-full rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(88,160,200,0.4) 0%, transparent 70%)",
                  animation: "pulse 4s infinite ease-in-out",
                }}
              />
              <div
                className="relative z-10 h-full w-full rounded-full p-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(88,160,200,0.5), rgba(238,16,53,0.3))",
                  boxShadow: "0 0 40px rgba(88,160,200,0.3)",
                }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-[rgba(10,25,47,0.7)] p-1.5 backdrop-blur-[5px]">
                  <Image
                    src="/coding.png"
                    alt="Sushim Chaudhary"
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="block aspect-square w-full rounded-full object-cover shadow transition-[filter] duration-500 [filter:grayscale(20%)_contrast(110%)] hover:[filter:grayscale(0%)_contrast(110%)]"
                  />
                </div>
              </div>
              {/* Blue dot indicator */}
              <div
                className="absolute bottom-2 end-2 h-[30px] w-[30px] rounded-full bg-[#0f95fe]"
                style={{
                  zIndex: 2,
                  animation: "blink 2s infinite",
                  boxShadow: "0 0 15px #58A0C8",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes moveGradient {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(20px, 20px);
          }
        }
        @keyframes moveGradient2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-20px, -20px);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
        @keyframes blink {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }
        .typing-1::after {
          content: "|";
          animation: blink-caret 0.7s infinite;
        }
        @keyframes blink-caret {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
