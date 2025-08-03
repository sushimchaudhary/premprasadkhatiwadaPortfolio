"use client";
import React, { useEffect, useState, useRef } from "react";

// Counter data with icons
const countersData = [
  {
    id: 1,
    title: "Projects Completed",
    count: 5,
    icon: "bi-check2-circle",
  },
  {
    id: 2,
    title: "YEARS OF EXPERIENCE",
    count: 2,
    icon: "bi-clock-history",
  },
  {
    id: 3,
    title: "TOTAL REPOSITORIES",
    count: 15,
    icon: "bi-github",
  },
  {
    id: 4,
    title: "Hours Worked",
    count: 1500,
    icon: "bi-hourglass-split",
  },
];

// Counter component with IntersectionObserver scroll trigger
const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    let increment = target / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, [hasStarted, target]);

  return (
    <h2 ref={ref} className="fw-bold" style={{ color: "#ee1035ff" }}>
      {count}+
    </h2>
  );
};

export default function CounterSection() {
  return (
    <section
      className="py-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-5">
        <div className="row text-center">
          {countersData.map(({ id, title, count, icon }) => (
            <div key={id} className="col-12 col-md-3 mb-4">
              <div
                className="p-4 rounded h-100 d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "120px" }}
              >
                {/* Icon block */}
                <div
                  className="rounded-circle border d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#0c449aff",
                    borderColor: "#ddd",
                  }}
                >
                  <i
                    className={`bi ${icon}`}
                    style={{ fontSize: "1.5rem", color: "#fff" }}
                  ></i>
                </div>

                <Counter target={count} />
                <p
                  className="mt-2 fw-semibold text-uppercase"
                  style={{ color: "#e0e7ff" }}
                >
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
