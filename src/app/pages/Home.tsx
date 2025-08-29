"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HomeSection() {
  const typing1Ref = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(typing1Ref.current, {
      strings: ["MERN-Stack Developer", "Student", ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      cursorChar: '|',
      smartBackspace: true
    });

    // Add floating particles effect
    const particles = [];
    const particleCount = 30;
    const colors = ['rgba(88, 160, 200, 0.6)', 'rgba(17, 63, 103, 0.6)', 'rgba(238, 16, 53, 0.6)'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      // particle.style.opacity = Math.random() * 0.5 + 0.1;
      particle.style.filter = 'blur(1px)';
      
      // Position randomly in the hero section
      const heroRect = heroRef.current.getBoundingClientRect();
      particle.style.left = `${Math.random() * heroRect.width}px`;
      particle.style.top = `${Math.random() * heroRect.height}px`;
      
      heroRef.current.appendChild(particle);
      particles.push({
        element: particle,
        x: parseFloat(particle.style.left),
        y: parseFloat(particle.style.top),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        radius: parseFloat(particle.style.width) / 2
      });
    }

    let animationId;
    const animateParticles = () => {
      const heroRect = heroRef.current.getBoundingClientRect();
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < particle.radius || particle.x > heroRect.width - particle.radius) {
          particle.speedX *= -1;
        }
        if (particle.y < particle.radius || particle.y > heroRect.height - particle.radius) {
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
      particles.forEach(particle => {
        if (particle.element.parentNode === heroRef.current) {
          heroRef.current.removeChild(particle.element);
        }
      });
    };
  }, []);

  return (
    <section 
      id="home" 
      className="py-5 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a192f, #172a45)',
        color: '#e6f1ff'
      }}
      ref={heroRef}
    >
      {/* Animated gradient background */}
      <div className="position-absolute w-100 h-100 top-0 start-0">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(88, 160, 200, 0.15) 0%, transparent 40%)',
          animation: 'moveGradient 15s infinite alternate ease-in-out'
        }}></div>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 80% 70%, rgba(238, 16, 53, 0.1) 0%, transparent 40%)',
          animation: 'moveGradient2 18s infinite alternate ease-in-out'
        }}></div>
      </div>

      <div className="container py-5 position-relative">
        <div className="d-flex flex-column-reverse flex-md-row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-md-7 text-start mb-4 mb-md-0 px-0 pe-md-4">
            <div
              className="text-uppercase fw-semibold mb-3"
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "2px",
                color: "#58A0C8",
                fontSize: "1.1rem"
              }}
            >
              <span className="d-inline-block animate__animated animate__fadeInDown">HELLO, I'M</span>
            </div>

            <h1
              className="fw-bold mb-3 display-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#fff",
                lineHeight: "1.2",
                textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="d-inline-block animate__animated animate__fadeIn">Sushim</span>{" "}
              <span className="d-inline-block animate__animated animate__fadeIn" style={{ color: '#58A0C8' }}>Chaudhary</span>
            </h1>

            <div
              className="fs-3 fw-medium mb-3"
              style={{
                fontFamily: "'Poppins', sans-serif",
                minHeight: '60px'
              }}
            >
              <span className="d-inline-block me-2">I'm a</span>
              <span
                className="typing-1 text-capitalize fw-semibold"
                style={{ 
                  color: "#ee1035",
                  textShadow: '0 0 8px rgba(238, 16, 53, 0.6)'
                }}
                ref={typing1Ref}
              ></span>
            </div>

            <div
              className="fs-6 mb-4 fw-light"
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.5px",
                color: "#ccd6f6",
                lineHeight: "1.8"
              }}
            >
              Passionate developer from Mourighat, Nepal specializing in creating 
              high-performance web applications with cutting-edge technologies. 
              I combine technical expertise with creative design to deliver 
              exceptional digital experiences.
            </div>

            <div className="mt-4 d-flex flex-row flex-wrap align-items-center gap-4">
              <a
                href="pages/Contact"
                className="btn btn-primary fw-semibold position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #58A0C8, #0c449a)",
                  border: "none",
                  padding: "14px 32px",
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  color: "#fff",
                  letterSpacing: "1px",
                  fontFamily: "'Poppins', sans-serif",
                  zIndex: 1,
                  transition: "all 0.4s ease",
                  boxShadow: "0 4px 20px rgba(88, 160, 200, 0.4)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 30px rgba(88, 160, 200, 0.7)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(88, 160, 200, 0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span className="position-relative z-index-1">Hire Me</span>
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-0 hover-opacity-10 transition-all"></span>
              </a>

              <div className="d-flex gap-3 fs-4 social-icons">
                {[
                  { icon: 'bi-facebook', url: 'https://www.facebook.com/sushim.ch', color: '#1877f2' },
                  { icon: 'bi-github', url: 'https://github.com/sushimchaudhary', color: '#fff' },
                  { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/sushim-chaudhary-458930349/', color: '#0a66c2' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(5px)',
                      color: social.color,
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
            <div className="position-relative" style={{ maxWidth: '400px', margin: '0 auto' }}>
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                style={{
                  background: 'radial-gradient(circle, rgba(88, 160, 200, 0.4) 0%, transparent 70%)',
                  animation: 'pulse 4s infinite ease-in-out',
                  zIndex: 0
                }}
              ></div>
              <div 
  className="position-relative z-index-1"
  style={{
    padding: '8px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(88, 160, 200, 0.5), rgba(238, 16, 53, 0.3))',
    boxShadow: '0 0 40px rgba(88, 160, 200, 0.3)'
  }}
>
  <div
    style={{
      padding: '6px',
      borderRadius: '50%',
      background: 'rgba(10, 25, 47, 0.7)',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}
  >
    <img
      src="/profile.jpg"
      alt="Sushim Chaudhary"
      className="img-fluid rounded-circle shadow"
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '400px',
        objectFit: 'cover',
        display: 'block',
        filter: 'grayscale(20%) contrast(110%)',
        transition: 'filter 0.5s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = 'grayscale(0%) contrast(110%)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = 'grayscale(20%) contrast(110%)';
      }}
    />
  </div>
</div>
              <div 
                className="position-absolute bottom-0 end-0 bg-primary rounded-circle"
                style={{
                  width: '30px',
                  height: '30px',
                  zIndex: 2,
                  animation: 'blink 2s infinite',
                  boxShadow: '0 0 15px #58A0C8'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes moveGradient {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        @keyframes moveGradient2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-20px, -20px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        
        @keyframes blink {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        .typing-1::after {
          content: '|';
          animation: blink-caret 0.7s infinite;
        }
        
        @keyframes blink-caret {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}