"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const skillsData = [
  {
    title: "Frontend Development",
    icon: "bi bi-layout-text-sidebar-reverse",
    description: "Crafting intuitive and responsive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap", "Tailwind"],
  },
  {
    title: "Backend & Database",
    icon: "bi bi-database-fill-gear",
    description: "Building robust server-side logic and scalable databases.",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Design",
    icon: "bi bi-tools",
    description: "Using industry-standard tools for design and development.",
    skills: ["Git", "Figma", "Postman", "Thunder Client", "Vercel"],
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export default function SkillsCarouselSection() {
  return (
    <section className="skills py-5" id="Skills" style={{ background: "#f5f7fa" }}>
      <div className="container px-2">
        {/* Section Header */}
        <div className="text-center mb-5">
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
            My <span style={{ color: "#ee1035" }}>Skills</span>
          </h2>
          
          <div className="d-flex justify-content-center gap-2 align-items-center mb-4">
            <div style={{ width: "50px", height: "3px", background: "#ee1035", borderRadius: "2px" }} />
            <div style={{ width: "10px", height: "3px", background: "#0f95ff", borderRadius: "2px" }} />
            <div style={{ width: "6px", height: "3px", background: "#ee1035", opacity: 0.35, borderRadius: "2px" }} />
          </div>

          <p className="mx-auto text-muted" style={{ maxWidth: "600px", fontSize: "1.05rem", lineHeight: "1.6" }}>
            Harnessing the power of <span style={{color: "#0f95ff", fontWeight: "600"}}>modern frameworks</span> to transform complex ideas into 
            <span style={{color: "#ee1035", fontWeight: "600"}}> elegant digital realities</span>.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          containerClass="py-3 pb-5"
          itemClass="px-3"
        >
          {skillsData.map((category, index) => (
            <div key={index} className="h-100">
              <div className="skill-card card p-4 border-0 shadow-sm h-100">
                <div className="text-center mb-3">
                   <div className="icon-wrapper mb-3">
                      <i className={`${category.icon}`} style={{ fontSize: "2rem", color: "#0f95ff" }}></i>
                   </div>
                   <h5 className="fw-bold mb-2" style={{ color: "#0c449a" }}>
                    {category.title}
                  </h5>
                  <p className="text-muted small mb-4">{category.description}</p>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <style jsx global>{`
        /* Card Styles Fixed - No blue hover */
        .skill-card {
          border-radius: 4px !important;
          background: #ffffff !important;
          border: 1px solid #eee !important;
          transition: none !important; /* Transition hataiyo */
        }

        .skill-card:hover {
          background: #ffffff !important; /* Hover garda pani white nai rahancha */
          border: 1px solid #eee !important; /* Border pani same rahancha */
          transform: none !important; /* Movement remove gareko */
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; /* Static shadow */
        }

        .skill-badge {
          background: #f8f9fa;
          color: #444;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 4px;
          border: 1px solid #dee2e6;
        }

        /* Carousel Dot Styles */
        .react-multiple-carousel__arrow--right,
        .react-multiple-carousel__arrow--left {
          display: none !important;
        }

        .react-multi-carousel-dot-list li button {
          width: 10px !important;
          height: 10px !important;
          background: #ddd !important;
          border: none !important;
          margin: 0 5px;
        }

        .react-multi-carousel-dot-list li.react-multi-carousel-dot--active button {
          background: #ee1035 !important;
          width: 25px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}