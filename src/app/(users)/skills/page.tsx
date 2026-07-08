"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  LayoutTemplate,
  DatabaseZap,
  Wrench,
  Code2,
  Palette,
  FileJson,
  Atom,
  Layers,
  Wind,
  Server,
  Zap,
  Database,
  Globe,
  GitBranch,
  Figma,
  Send,
  Triangle,
  type LucideIcon,
} from "lucide-react";

type Skill = { name: string; icon: LucideIcon; color: string };

type Category = {
  title: string;
  icon: LucideIcon;
  description: string;
  accent: string;
  skills: Skill[];
};

const skillsData: Category[] = [
  {
    title: "Frontend Development",
    icon: LayoutTemplate,
    description: "Crafting intuitive and responsive user interfaces.",
    accent: "#0f95fe",
    skills: [
      { name: "HTML", icon: Code2, color: "#e34f26" },
      { name: "CSS", icon: Palette, color: "#264de4" },
      { name: "JavaScript", icon: FileJson, color: "#f0b90b" },
      { name: "React", icon: Atom, color: "#149eca" },
      { name: "Next.js", icon: Layers, color: "#111111" },
      { name: "Bootstrap", icon: LayoutTemplate, color: "#7952b3" },
      { name: "Tailwind", icon: Wind, color: "#06b6d4" },
    ],
  },
  {
    title: "Backend & Database",
    icon: DatabaseZap,
    description: "Building robust server-side logic and scalable databases.",
    accent: "#0c449a",
    skills: [
      { name: "Node.js", icon: Server, color: "#3c873a" },
      { name: "Express", icon: Zap, color: "#4a4a4a" },
      { name: "MongoDB", icon: Database, color: "#12924f" },
      { name: "MySQL", icon: Database, color: "#005c84" },
      { name: "REST APIs", icon: Globe, color: "#0f95fe" },
    ],
  },
  {
    title: "Tools & Design",
    icon: Wrench,
    description: "Using industry-standard tools for design and development.",
    accent: "#ee1035",
    skills: [
      { name: "Git", icon: GitBranch, color: "#f1502f" },
      { name: "Figma", icon: Figma, color: "#a259ff" },
      { name: "Postman", icon: Send, color: "#ff6c37" },
      { name: "Thunder Client", icon: Zap, color: "#f5a623" },
      { name: "Vercel", icon: Triangle, color: "#111111" },
    ],
  },
];

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="Skills" className="relative bg-[#f5f7fa] py-20">
      <div className="mx-auto max-w-7xl px-3">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center" data-aos="fade-down">
          <h2 className="!text-[2.6rem]  !font-bold !text-[#0f95ff] uppercase tracking-[1.5px] mb-4">
            My <span className="text-[#ee1035]">Skills</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-[3px] w-12 rounded-full bg-[#ee1035]" />
            <span className="h-[3px] w-2.5 rounded-full bg-[#0f95fe]" />
            <span className="h-[3px] w-1.5 rounded-full bg-[#ee1035]/35" />
          </div>

          <p className="mt-5 text-[24px] leading-relaxed text-gray-500">
  I use the latest web technologies to turn your ideas into functional, beautiful, and user-friendly websites.
</p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillsData.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="skill-card group relative flex flex-col rounded-xl border border-black/5 bg-white p-7 shadow-sm"
              >
                {/* Top accent bar */}
                <span
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: category.accent }}
                />

                {/* Category icon */}
                <div
                  className="skill-card-icon mb-5 flex h-14 w-14 items-center justify-center rounded-lg transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: `${category.accent}14` }}
                >
                  <CategoryIcon size={26} strokeWidth={2} color={category.accent} />
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#0c449a]">{category.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {category.description}
                </p>

                {/* Skill chips — full-color icon on each */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        data-aos="zoom-in"
                        data-aos-delay={index * 150 + 300 + skillIndex * 60}
                        data-aos-duration="500"
                        className="skill-badge inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-1.5 pr-3.5 text-xs font-semibold text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200"
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: `${skill.color}1f` }}
                        >
                          <SkillIcon size={12} strokeWidth={2.5} color={skill.color} />
                        </span>
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .skill-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(15, 149, 254, 0.12);
          border-color: rgba(15, 149, 254, 0.15);
        }
        .skill-badge {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .skill-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
        }

        .skill-card.aos-animate .skill-card-icon {
          animation: iconPop 0.5s ease 0.15s backwards;
        }

        @keyframes iconPop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          70% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-card,
          .skill-card *,
          .skill-badge {
            transition: none !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}