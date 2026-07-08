"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../lib/project";

export default function ProjectsPreview() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  // Only show the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="Services"
      className="bg-gradient-to-br from-[#f5f7fa] to-[#f5f7fa] font-[Poppins,sans-serif] py-[70px]"
    >
      <div className="mx-auto max-w-7xl px-3">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="!text-[2.6rem] !font-bold !text-[#0f95ff] uppercase tracking-[1.5px] mb-4">
            Pro <span className="text-[#ee1035]">ject</span>
          </h2>

          {/* Modern Decorative Underline */}
          <div className="flex justify-center gap-2 items-center mb-5">
            <div className="w-[50px] h-[3px] bg-[#ee1035] rounded-[2px]" />
            <div className="w-[10px] h-[3px] bg-[#0f95ff] rounded-[2px]" />
            <div className="w-[6px] h-[3px] bg-[#ee1035] opacity-35 rounded-[2px]" />
          </div>

          {/* Short & Sweet Description */}
          <p className="text-[#6c757d] mx-auto max-w-[700px] text-[1.1rem] leading-[1.6] font-normal">
            A showcase of my recent works, blending{" "}
            <span className="text-[#0f95ff] font-semibold">creative design</span>{" "}
            with
            <span className="text-[#ee1035] font-semibold"> modern technology</span>{" "}
            to build impactful digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:px-4">
          {featuredProjects.map((project, index) => (
            <div
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
              key={project.slug}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="group bg-white rounded-[4px] border border-[#f0f0f0] shadow-sm overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt={project.title}
                  />
                </div>

                <div className="p-3 flex flex-col flex-1 border-t border-[#dee2e6]">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold m-0 text-gray-900 text-[1.2rem]">
                      {project.title}
                    </h4>
                    <span className="bg-[#f8f9fa] text-[#6c757d] px-[10px] py-[3px] text-[0.6rem] font-bold rounded-[4px] uppercase border border-[#dee2e6] whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  {/* Description clamped to 3 lines */}
                  <p className="text-[#6c757d] text-sm flex-grow mb-3 text-start leading-[1.6] line-clamp-3">
                    {project.description}
                  </p>

                  {/* Two buttons: See More (internal) + Visit Website (external) */}
                  <div className="flex gap-2">
                    <Link
                      href={`/project/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center !no-underline text-center bg-[#0f95fe] text-white! font-semibold rounded-[4px] py-[6px] text-sm transition-all duration-300 hover:bg-[#1380d4] hover:brightness-110"
                      aria-label={`See more about ${project.title}`}
                    >
                      See More
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 !no-underline text-center border-2 border-[#0f95fe] text-[#0f95fe]! font-semibold rounded-[4px] px-3 py-[6px] text-sm transition-all duration-300 hover:bg-[#0f95fe] hover:!text-white"
                      aria-label={`Visit the website for ${project.title}`}
                    >
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5" data-aos="fade-up">
          <Link
            href="/project"
            className="inline-block py-1.5 px-4 !no-underline bg-transparent text-[#0f95fe]! font-bold text-base border-2 border-[#0f95fe] rounded-[4px] uppercase tracking-[0.5px] transition-all duration-300 hover:bg-[#0f95fe] hover:shadow-[0_8px_20px_rgba(14,150,254,0.3)]"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}