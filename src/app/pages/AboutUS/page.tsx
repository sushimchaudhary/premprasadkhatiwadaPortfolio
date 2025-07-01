"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
export default function AboutMeSection() {


    const typing1Ref = useRef(null);

    useEffect(() => {


        const typed1 = new Typed(typing1Ref.current, {
            strings: ["Front-End Developer", "Graphic Designer", "Programmer", "Student"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        // Cleanup on unmount
        return () => {
            typed1.destroy();
        };
    }, []);



    return (
        <section className="bg-white px-3 px-md-5 py-5">
            <div
                className="container py-5 shadow rounded"
                style={{
                    boxShadow: '0 0 35px rgba(0, 0, 0, 0.1)', // 👈 यो custom shadow
                    borderRadius: '12px', // optional: rounded effect enhance
                }}
            >                <h2 className="title d-lg-none text-center">
                    <span className="text-dark">
                        About <b className="color1">Me</b>
                    </span>
                </h2>

                <div className="row align-items-center justify-content-between gx-lg-4 gy-4 gy-lg-0">
                    {/* Left Side: Image */}
                    <div className="col-lg-4">
                        <img
                            src="/About.jpg"
                            alt="Samir Chhetri"
                            width={400}
                            height={400}
                            className="img-fluid w-100 rounded shadow"
                            style={{
                                maxHeight: '500px', // ⬅️ height बढाइएको
                                objectFit: 'cover',
                                objectPosition: 'top center'
                            }}
                        />
                    </div>


                    {/* Right Side: Text & CV */}
                    <div className="col-lg-8 text-start mt-4 mt-lg-0">
                        <p className="d-none d-lg-block fw-bold text-uppercase text-primary mb-3 fs-2" style={{ letterSpacing: '1px' }}>
                            About Me
                        </p>

                        <div
                            className="fs-5 fw-medium mb-2"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                color: '#222', // consistent dark
                            }}
                        >
                            I'm a{' '}
                            <span
                                className="typing-1 text-capitalize fw-semibold"
                                style={{ color: '#0d6efd' }}
                                ref={typing1Ref}
                            ></span>
                        </div>
                        <p
                            className="text-muted"
                            style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.8',
                                fontFamily: 'Poppins, sans-serif',
                                textAlign: 'justify' // 👈 यो थपिएको
                            }}
                        >
                            I am a <strong>Frontend Developer</strong> with a passion for creating <strong>interactive</strong> and
                            <strong> responsive</strong> web applications. I have experience working with <strong>HTML</strong>, <strong>CSS</strong>,
                            <strong> Bootstrap</strong>, <strong>Tailwind CSS</strong>, <strong>Sass/SCSS</strong>, <strong>JavaScript</strong>,
                            <strong> React Js</strong>, <strong>Next Js</strong>, <strong>Git</strong>, and <strong>GitHub</strong>.
                            I am a <strong>quick learner</strong> and always eager to expand my knowledge and skill set. I am a
                            <strong> team player</strong> and excited to collaborate on creating amazing applications.
                        </p>


                        <a
                            href="/Samir-CV.pdf"
                            download
                            className="btn btn-primary text-uppercase fw-bold rounded px-4 py-2 mt-3 shadow-sm"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>



    );
}
