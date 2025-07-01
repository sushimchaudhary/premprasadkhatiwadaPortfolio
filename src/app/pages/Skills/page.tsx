'use client';

import React, { useRef } from 'react';

const skillsData = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap", "SCSS", "SASS", "Tailwind", "RESPONSIVE DESIGN" ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Figma", "Postman"],
  },
];

const SkillsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="skills text-dark py-5" id="Skills" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="title mb-4">
          <span className="text-dark">My Skills</span>
        </div>

        {/* Scrollable container only on mobile */}
        <div className="scroll-container position-relative d-md-none">
          <div className="scroll-wrapper" ref={scrollRef}>
            <div className="row flex-nowrap g-4">
              {skillsData.map((category, index) => (
                <div key={index} className="col-10" style={{ minWidth: '300px' }}>
                  <div
                    className="card h-100 shadow-sm p-4 border-0"
                    style={{
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <h3 className="skill-title text-center">{category.title}</h3>
                    {Array.from({ length: Math.ceil(category.skills.length / 2) }, (_, i) => (
                      <ul key={i} className="skill-list d-flex justify-content-between px-2" style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ flex: 1 }}>
                          {category.skills[i * 2] && (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.993a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.525 7.464a.75.75 0 0 0-1.06 1.06l2.505 2.505z" />
                              </svg>
                              {category.skills[i * 2]}
                            </>
                          )}
                        </li>
                        <li style={{ flex: 1, textAlign: 'end' }}>
                          {category.skills[i * 2 + 1] && (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.993a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.525 7.464a.75.75 0 0 0-1.06 1.06l2.505 2.505z" />
                              </svg>
                              {category.skills[i * 2 + 1]}
                            </>
                          )}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons below cards on right */}
          <div className="scroll-buttons d-flex justify-content-end mt-3 gap-3">
            <button className="scroll-btn mx-1 fs-1" onClick={() => scrollByAmount(-300)}>&#8249;</button>
            <button className="scroll-btn mx-1 fs-1" onClick={() => scrollByAmount(300)}>&#8250;</button>
          </div>
        </div>

        {/* Regular grid for desktop */}
        <div className="row g-4 d-none d-md-flex">
          {skillsData.map((category, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-sm p-4 border-0"
                style={{ boxShadow: '0 0 10px rgba(0,0,0,0.15)' }}
              >
                <h3 className="skill-title text-center">{category.title}</h3>
                {Array.from({ length: Math.ceil(category.skills.length / 2) }, (_, i) => (
                  <ul key={i} className="skill-list d-flex justify-content-between px-2" style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ flex: 1 }}>
                      {category.skills[i * 2] && (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.993a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.525 7.464a.75.75 0 0 0-1.06 1.06l2.505 2.505z" />
                          </svg>
                          {category.skills[i * 2]}
                        </>
                      )}
                    </li>
                    <li style={{ flex: 1, textAlign: 'end' }}>
                      {category.skills[i * 2 + 1] && (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.993a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.525 7.464a.75.75 0 0 0-1.06 1.06l2.505 2.505z" />
                          </svg>
                          {category.skills[i * 2 + 1]}
                        </>
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

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
          color: #fff;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: all 0.3s ease;
          cursor: pointer;
          user-select: none;
        }

        .scroll-btn:hover {
          opacity: 1;
          transform: scale(1.1);
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
