"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function HomeSection() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const particles: {
      element: HTMLDivElement;
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      radius: number;
    }[] = [];
    const particleCount = 12;
    const colors = [
      "rgba(179, 3, 2, 0.22)",
      "rgba(15, 149, 254, 0.18)",
      "rgba(30, 41, 59, 0.14)",
    ];

    const heroRect = heroRef.current.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 6 + 4;
      const startX = Math.random() * heroRect.width;
      const startY = Math.random() * heroRect.height;

      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = "50%";
      particle.style.filter = "blur(1.5px)";
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.pointerEvents = "none";

      heroRef.current.appendChild(particle);
      particles.push({
        element: particle,
        x: startX,
        y: startY,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        radius: size / 2,
      });
    }

    let animationId: number;
    const animateParticles = () => {
      if (!heroRef.current) return;
      const currentRect = heroRef.current.getBoundingClientRect();

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (
          particle.x < particle.radius ||
          particle.x > currentRect.width - particle.radius
        ) {
          particle.speedX *= -1;
        }
        if (
          particle.y < particle.radius ||
          particle.y > currentRect.height - particle.radius
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
      url: "https://www.facebook.com/prema.khativada.2025",
      color: "#0f95fe",
    },
    
    {
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/prem-prasad-khatiwada-ba16453a7/",
      color: "#0a66c2",
    },
   
    {
      icon: "bi-whatsapp",  
    url: "https://wa.me/9779745462746",
      color: "#25D366",
    },
     
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-transparent text-slate-800"
    >
      {/* Subtle ambient accents without solid background fill */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 18% 35%, rgba(179, 3, 2, 0.06) 0%, transparent 42%)",
            animation: "moveGradient 18s infinite alternate ease-in-out",
          }}
        />
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            background:
              "radial-gradient(circle at 82% 70%, rgba(15, 149, 254, 0.05) 0%, transparent 42%)",
            animation: "moveGradient2 22s infinite alternate ease-in-out",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8">
        {/* Image on Left, Content on Right on desktop */}
        <div className="flex flex-col items-center md:flex-row">
          {/* Left Image Container */}
          <div className="mb-4 w-full py-7 text-center md:mb-0 md:w-5/12 md:pe-8">
            <div className="relative mx-auto aspect-square w-full max-w-[450px]">
              {/* Outer #b30302 ambient glow */}
              <div
                className="absolute inset-0 h-full w-full rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(179, 3, 2, 0.22) 0%, transparent 70%)",
                  animation: "pulse 5s infinite ease-in-out",
                }}
              />

              {/* #b30302 gradient ring */}
              <div
                className="relative z-10 h-full w-full rounded-full p-1.5"
                style={{
                  background:
                    "linear-gradient(135deg, #b30302, rgba(179, 3, 2, 0.4), rgba(15, 149, 254, 0.25))",
                  boxShadow: "0 12px 35px rgba(179, 3, 2, 0.22)",
                }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-[#b30302]/70 bg-white/80 p-1.5 backdrop-blur-[5px]">
                  <Image
                    src="/prem1.png"
                    alt="Prem Prasad Khatiwada"
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="block aspect-square w-full rounded-full object-cover shadow transition-[filter] duration-500 [filter:grayscale(15%)_contrast(108%)] hover:[filter:grayscale(0%)_contrast(110%)]"
                  />
                </div>
              </div>

              {/* #b30302 status indicator dot */}
              <div
                className="absolute bottom-2 end-2 h-[30px] w-[30px] rounded-full border-2 border-white bg-[#b30302]"
                style={{
                  zIndex: 20,
                  animation: "blink 2.4s infinite",
                  boxShadow: "0 0 14px rgba(179, 3, 2, 0.75)",
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="mb-4 w-full text-start md:mb-0 md:w-7/12 md:ps-8">
            <div className="mb-3 text-[1.05rem] font-semibold tracking-[2px] text-[#b30302]">
              <span className="animate__animated animate__fadeInDown inline-block">
                HELLO, It&apos;s me
              </span>
            </div>

            <h1 className="mb-3 text-4xl font-bold leading-[1.2] text-slate-900 md:text-5xl">
              <span className="animate__animated animate__fadeIn inline-block">
                Prem
              </span>{" "}
              <span className="animate__animated animate__fadeIn inline-block text-[#b30302]">
                Prasad Khatiwada
              </span>
            </h1>

            <div className="mb-4 text-justify font-['Poppins',sans-serif] text-xl font-normal leading-[1.8] text-slate-600">
              I’m passionate about Operations Management, with a focus on keeping
              things organized, improving efficiency, and making everyday work
              run smoothly. I enjoy solving problems, managing processes, and
              finding better ways to get things done.
            </div>

            <div className="mt-4 flex flex-row flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded font-['Poppins',sans-serif] font-semibold tracking-[1px] text-white transition-all duration-[400ms] hover:-translate-y-0.5 !no-underline"
                style={{
                  background: "#b30302",
                  padding: "8px 30px",
                  fontSize: "1.05rem",
                  boxShadow: "0 6px 20px rgba(179, 3, 2, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(179, 3, 2, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(179, 3, 2, 0.3)";
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 h-full w-full bg-white opacity-0 transition-all group-hover:opacity-15" />
              </Link>

              <div className="social-icons flex gap-3 text-2xl">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 shadow-sm backdrop-blur-[5px] transition-all duration-300 hover:-translate-y-1 hover:border-[#b30302]/40 hover:bg-white"
                    style={{ color: social.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 6px 16px ${social.color}35`;
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
        </div>
      </div>

      <style jsx global>{`
        @keyframes moveGradient {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(14px, 14px);
          }
        }
        @keyframes moveGradient2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-14px, -14px);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.65;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.95;
          }
          100% {
            transform: scale(1);
            opacity: 0.65;
          }
        }
        @keyframes blink {
          0% {
            opacity: 0.35;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.35;
          }
        }
      `}</style>
    </section>
  );
}