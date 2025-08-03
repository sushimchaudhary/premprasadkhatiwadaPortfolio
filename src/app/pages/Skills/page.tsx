"use client";

import React, { useRef } from "react";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Bootstrap",
      "SCSS",
      "SASS",
      "Tailwind",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Figma", "Postman", "Thunder Client"],
  },
];

const SkillsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="Skills"
      className="py-5 text-dark"
      style={{
        
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container">
        <h2
          className="title text-center fw-bold mb-5"
          style={{ fontSize: "2.2rem", color: "#0d3b66" }}
        >
          My <span style={{ color: "#ee1035ff" }}>Skills</span>
        </h2>

        {/* Scrollable on mobile */}
        <div className="scroll-container position-relative d-md-none">
          <div className="scroll-wrapper" ref={scrollRef}>
            <div className="row flex-nowrap g-4">
              {skillsData.map((category, index) => (
                <div
                  key={index}
                  className="col-10"
                  style={{ minWidth: "300px" }}
                >
                  <div
                    className="card border-0 shadow h-100 p-4 rounded-4"
                    style={{ backgroundColor: "#ffffffcc" }}
                  >
                    <h5
                      className="text-center fw-semibold mb-4"
                      style={{ color: "#0c449a" }}
                    >
                      {category.title}
                    </h5>

                    {Array.from(
                      { length: Math.ceil(category.skills.length / 2) },
                      (_, i) => (
                        <ul
                          key={i}
                          className="d-flex justify-content-between px-2 list-unstyled mb-2"
                        >
                          <li style={{ flex: 1 }}>
                            {category.skills[i * 2] && (
                              <span className="badge bg-gradient text-dark rounded-pill px-3 py-2 bg-light shadow-sm">
                                {category.skills[i * 2]}
                              </span>
                            )}
                          </li>
                          <li style={{ flex: 1, textAlign: "right" }}>
                            {category.skills[i * 2 + 1] && (
                              <span className="badge bg-gradient text-dark rounded-pill px-3 py-2 bg-light shadow-sm">
                                {category.skills[i * 2 + 1]}
                              </span>
                            )}
                          </li>
                        </ul>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-buttons d-flex justify-content-end mt-3 gap-3">
            <button className="scroll-btn" onClick={() => scrollByAmount(-300)}>
              &#8249;
            </button>
            <button className="scroll-btn" onClick={() => scrollByAmount(300)}>
              &#8250;
            </button>
          </div>
        </div>

        {/* Grid view for desktop */}
        <div className="row g-4 d-none d-md-flex">
          {skillsData.map((category, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="card h-100 p-4 shadow border-0 rounded-4"
                style={{ backgroundColor: "#ffffffcc" }}
              >
                <h5
                  className="text-center fw-semibold mb-4"
                  style={{ color: "#0c449aff" }}
                >
                  {category.title}
                </h5>

                {Array.from(
                  { length: Math.ceil(category.skills.length / 2) },
                  (_, i) => (
                    <ul
                      key={i}
                      className="d-flex justify-content-between px-2 list-unstyled mb-2"
                    >
                      <li style={{ flex: 1 }}>
                        {category.skills[i * 2] && (
                          <span className="badge bg-gradient text-dark rounded-pill px-3 py-2 bg-light shadow-sm">
                            {category.skills[i * 2]}
                          </span>
                        )}
                      </li>
                      <li style={{ flex: 1, textAlign: "right" }}>
                        {category.skills[i * 2 + 1] && (
                          <span className="badge bg-gradient text-dark rounded-pill px-3 py-2 bg-light shadow-sm">
                            {category.skills[i * 2 + 1]}
                          </span>
                        )}
                      </li>
                    </ul>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .scroll-wrapper {
          overflow-x: auto;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
        .scroll-btn {
          background: #0d6efd;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background 0.3s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .scroll-btn:hover {
          transform: scale(1.1);
          background: #084298;
        }
        @media (min-width: 768px) {
          .scroll-buttons {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
