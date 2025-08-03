"use client";

import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const teamData = [
   {
    name: "Sushim Chaudhary",
    role: "MERN - Stack Developer",
    image: "/profile.jpg",
    icons: [
      { href: "https://github.com/sushimchaudhary", icon: "bi-github" },
      { href: "https://www.facebook.com/sushim.ch", icon: "bi-facebook" },
      { href: "https://www.linkedin.com/in/sushim-chaudhary-458930349/", icon: "bi-linkedin" },
    ],
  },
  {
    name: "Samir Chhetri",
    role: "Front - End Developer",
    image: "/Home.jpg",
    icons: [
      { href: "#", icon: "bi-github" },
      { href: "https://www.facebook.com/samir.chhetri.986942", icon: "bi-facebook" },
      { href: "#", icon: "bi-linkedin" },
    ],
  },
  {
    name: "Rohit Pd Tharu",
    role: "Front - End Developer",
    image: "/rohit.jpg",
    icons: [
      { href: "#", icon: "bi-github" },
      { href: "https://www.facebook.com/lalpuriha.rohit", icon: "bi-facebook" },
      { href: "#", icon: "bi-linkedin" },
    ],
  },
 

  {
    name: "Rabin Chaudhary",
    role: "Front - End Developer",
    image: "/Rabin.jpg",
    icons: [
      { href: "#", icon: "bi-github" },
      { href: "https://www.facebook.com/derr.comrade.3597", icon: "bi-facebook" },
      { href: "#", icon: "bi-linkedin" },
    ],
  },
];

export default function TeamsSection() {
  return (
    <section className="teams py-5" id="Teams">
      <div className="container" style={{ paddingLeft: "6px", paddingRight: "6px" }}>
        <h2 className=" title text-center fw-bold mb-4" style={{ fontSize: "2.5rem", color: "#0d3b66" }}>
          My <span style={{ color: "#ee1035ff" }}>Team</span>
        </h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          containerClass="owl-theme py-3 pb-5"
          itemClass="px-2"
        >
          {teamData.map((member, index) => (
            <div key={index}>
              <div
                className="cards rounded p-3 h-100"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
                  maxWidth: "100%",
                  width: "100%",
                  maxHeight: "100%",
                  margin: "0 auto",
                }}
              >
                <div className="boxs text-center">
                  {/* Profile Image with red outer ring */}
                  <div
                    style={{
                      background: "#ee1035ff",
                      borderRadius: "50%",
                      padding: "5px",
                      display: "inline-block",
                    }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-circle mx-auto d-block"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>

                  <div className="text h5 fw-bold mb-1 mt-3" style={{ color: "#0d3b66" }}>
                    {member.name}
                  </div>
                  <p className="text-muted mb-3" style={{ fontSize: "1rem" }}>
                    {member.role}
                  </p>

                  <ul className="Teams__social__media__icons list-inline mb-0">
                    {member.icons.map((icon, i) => (
                      <li className="list-inline-item mx-2" key={i}>
                        <a
                          href={icon.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#1Da1F2",
                            fontSize: "1.4rem",
                            transition: "color 0.3s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#e50914")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#1Da1F2")}
                          aria-label={icon.icon.replace("bi-", "")}
                        >
                          <i className={`bi ${icon.icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        /* Hide left and right arrows */
        .react-multiple-carousel__arrow--right,
        .react-multiple-carousel__arrow--left {
          display: none !important;
        }

        /* Carousel dots - red themed */
        .react-multi-carousel-dot-list li button {
          width: 16px !important;
          height: 16px !important;
          background: #ddd !important;
          border-radius: 50% !important;
          opacity: 1 !important;
          transition: background-color 0.3s ease;
        }

        .react-multi-carousel-dot-list li.react-multi-carousel-dot--active button {
          background: #e50914 !important; /* Active red dot */
        }
      `}</style>
    </section>
  );
}
