"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="about-section relative overflow-hidden bg-transparent py-16 text-slate-800"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto" style={{ maxWidth: "1300px" }}>
          {/* Title */}
          <div className="mb-12 text-center" data-aos="fade-down">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-[1.5px] text-slate-900 md:text-[2.6rem]">
              About <span className="text-[#b30302]">Me</span>
            </h2>

            <div className="flex items-center justify-center gap-2">
              <div className="h-[3px] w-[50px] rounded-[2px] bg-[#b30302]" />
              <div className="h-[3px] w-[12px] rounded-[2px] bg-[#8f0201]" />
              <div className="h-[3px] w-[6px] rounded-[2px] bg-[#b30302]/35" />
            </div>
          </div>

          {/* Left Content + Right Image on desktop */}
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:gap-10">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full text-start md:w-7/12 md:pe-6"
            >
              <div className="mb-4 text-justify font-['Poppins',sans-serif] text-xl font-normal leading-[1.85] text-slate-700">
                As an Operations Manager, I focus on keeping business operations
                efficient, organized, and productive. My strengths lie in{" "}
                <strong className="font-semibold text-[#b30302]">
                  Operations Planning
                </strong>
                ,{" "}
                <strong className="font-semibold text-[#b30302]">
                  Workflow Management
                </strong>
                ,{" "}
                <strong className="font-semibold text-[#b30302]">
                  Team Coordination
                </strong>
                ,{" "}
                <strong className="font-semibold text-[#b30302]">
                  Process Improvement
                </strong>
                , and{" "}
                <strong className="font-semibold text-[#b30302]">
                  Problem Solving
                </strong>
                . I enjoy managing day-to-day activities, coordinating teams,
                optimizing resources, and finding practical ways to improve
                performance. I value clear communication, strategic thinking, and
                teamwork, and I’m always looking for smarter ways to simplify
                processes, overcome challenges, and contribute to business
                growth.
              </div>

              <motion.a
                href="http://localhost:3000/certificates/sushim.cv.pdf"
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="mt-2 inline-flex items-center rounded-[6px] bg-[#b30302] px-7 py-2.5 text-sm font-bold uppercase tracking-[1px] text-white !no-underline shadow-[0_6px_20px_rgba(179,3,2,0.3)] transition-all duration-300 hover:bg-[#960201] hover:shadow-[0_8px_26px_rgba(179,3,2,0.45)]"
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Right: Image without double card or box background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex w-full items-center justify-center md:w-5/12"
            >
              <img
                src="/prem2.png"
                alt="Prem Prasad Khatiwada"
                className="max-h-[460px] w-auto max-w-full rounded-xl object-contain mix-blend-multiply drop-shadow-[0_14px_28px_rgba(179,3,2,0.16)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}