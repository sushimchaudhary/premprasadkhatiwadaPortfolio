"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export default function SkillsCarouselSection() {
  return (
    <section className="skills py-5" id="Skills">
      <div className="container px-2">
        <h2
          className=" title text-center fw-bold mb-5"
          style={{ fontSize: "2.5rem", color: "#0d3b66" }}
        >
          My <span style={{ color: "#ee1035ff" }}>Skills</span>
        </h2>

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
            <div key={index}>
              <div
                className="card p-4 shadow rounded-4"
                style={{
                  backgroundColor: "#ffffffcc",
                  border: "1px solid #ddd",
                  maxWidth: "100%",
                  minHeight: "320px", // 👈 Fixed height
                  height: "100%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h5 className="fw-semibold mb-4" style={{ color: "#0c449a" }}>
                  {category.title}
                </h5>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark shadow-sm px-3 py-2 rounded-pill"
                      style={{ fontSize: "0.9rem" }}
                    >
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
        .react-multiple-carousel__arrow--right,
        .react-multiple-carousel__arrow--left {
          display: none !important;
        }

        .react-multi-carousel-dot-list li button {
          width: 14px !important;
          height: 14px !important;
          background: #ccc !important;
          border-radius: 50% !important;
          transition: background-color 0.3s ease;
        }

        .react-multi-carousel-dot-list
          li.react-multi-carousel-dot--active
          button {
          background: #ee1035ff !important;
        }
      `}</style>
    </section>
  );
}