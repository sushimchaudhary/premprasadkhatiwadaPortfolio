"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  duration: string;
  period: string;
  icon: LucideIcon;
  accent: string;
  highlights: string[];
};

const experienceData: ExperienceItem[] = [
  // {
  //   role: "Logistic Operation Manager",
  //   organization: "Yatri Nepal Pvt. Ltd.",
  //   location: "Putalisadak, Kathmandu",
  //   duration: "2 months",
  //   period: "September, 2026 - Now",
  //   icon: Briefcase,
  //   accent: "#b30302",
  //   highlights: [
  //     "Overseeing daily logistics and operational workflows",
  //     "Coordinating dispatch efficiency and resource allocation",
  //   ],
  // },
  {
    role: "Branch Manager",
    organization: "Nepal Can Move Pvt. Ltd.",
    location: "Kapan, Kathmandu",
    duration: "11 months",
    period: "September, 2024 - August, 2025",
    icon: Building2,
    accent: "#8f0201",
    highlights: [
      "Managed branch operations, staff coordination, and service quality",
      "Streamlined day-to-day delivery and hub workflows",
    ],
  },
  {
    role: "Procurement and Office Assistant",
    organization: "Hyanglafyafulla Construction Pvt. Ltd.",
    location: "Lalitpur",
    duration: "3 years, 1 month",
    period: "August, 2021 - September, 2024",
    icon: Briefcase,
    accent: "#b30302",
    highlights: [
      "Handled material procurement, vendor coordination, and office administration",
      "Maintained inventory records and supported site operations",
    ],
  },
  {
    role: "Assistant Sub Engineer",
    organization: "National Reconstruction Authority",
    location: "Okhaldhunga",
    duration: "1 year, 10 months",
    period: "September, 2019 - July, 2021",
    icon: Building2,
    accent: "#8f0201",
    highlights: [
      "Supported reconstruction field oversight and technical documentation",
      "Coordinated with local stakeholders and project teams",
    ],
  },
  {
    role: "Assistant Sub Engineer",
    organization: "Subisu Engineering Consultancy",
    location: "Itahari",
    duration: "11 months",
    period: "September, 2018 - August, 2019",
    icon: Briefcase,
    accent: "#b30302",
    highlights: [
      "Assisted with engineering surveys, planning, and technical reporting",
      "Collaborated with field and design teams on project deliverables",
    ],
  },
  {
    role: "Assistant Junior Engineer",
    organization: "Subisu Engineering Consultancy",
    location: "Itahari",
    duration: "11 months",
    period: "March, 2017 - August, 2018",
    icon: Building2,
    accent: "#8f0201",
    highlights: [
      "Assisted junior engineering tasks, site checks, and documentation",
      "Built strong foundational coordination across project workflows",
    ],
  },
  {
    role: "Assistant Sub Engineer",
    organization: "Nepal Red Cross Society",
    location: "Sindhupalchok",
    duration: "1 year, 5 months",
    period: "July, 2016 - February, 2017",
    icon: Briefcase,
    accent: "#b30302",
    highlights: [
      "Supported community engineering and recovery initiatives in Sindhupalchok",
      "Coordinated field assessments and reporting with relief teams",
    ],
  },
  {
    role: "Assistant Sub Engineer",
    organization: "Everest Engineering Consultancy",
    location: "Biratnagar",
    duration: "7 months",
    period: "July, 2015 - February, 2016",
    icon: Building2,
    accent: "#8f0201",
    highlights: [
      "Assisted in project planning, measurements, and technical preparation",
      "Worked alongside senior engineers on consultancy assignments",
    ],
  },
  {
    role: "Assistant Sub Engineer",
    organization: "Reinforce Engineering Service",
    location: "Kathmandu",
    duration: "7 months",
    period: "Engineering Experience",
    icon: Briefcase,
    accent: "#b30302",
    highlights: [
      "Supported structural and site coordination tasks in Kathmandu",
      "Maintained accurate technical records and daily progress updates",
    ],
  },
];

export default function ExperienceSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="Experience"
      className="relative overflow-hidden bg-transparent py-20 text-slate-800"
    >
      {/* Subtle #b30302 ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(179, 3, 2, 0.06) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center" data-aos="fade-down">
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-[1.5px] text-slate-900 md:text-[2.6rem]">
            Work <span className="text-[#b30302]">Experience</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-[3px] w-12 rounded-full bg-[#b30302]" />
            <span className="h-[3px] w-3 rounded-full bg-[#8f0201]" />
            <span className="h-[3px] w-1.5 rounded-full bg-[#b30302]/35" />
          </div>

          <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
            A progressive career across operations management, logistics,
            procurement, and field engineering.
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experienceData.map((item, index) => {
            const RoleIcon = item.icon;
            return (
              <div
                key={`${item.organization}-${item.role}-${index}`}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 120}
                className="experience-card group relative flex flex-col rounded-xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-[2px]"
              >
                {/* Top accent bar */}
                <span
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: item.accent }}
                />

                {/* Top row: Icon + Duration pill */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className="experience-card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ background: "rgba(179, 3, 2, 0.1)" }}
                  >
                    <RoleIcon size={22} strokeWidth={2.2} color="#b30302" />
                  </div>

                  <span className="rounded-full border border-[#b30302]/20 bg-[#b30302]/8 px-3 py-1 text-xs font-semibold text-[#b30302]">
                    {item.duration}
                  </span>
                </div>

                {/* Role & Organization */}
                <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#b30302]">
                  {item.role}
                </h3>
                <p className="mb-3 text-sm font-semibold text-[#b30302]">
                  {item.organization}
                </p>

                {/* Location & Period */}
                <div className="mb-4 space-y-1.5 text-xs font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-[#b30302]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="shrink-0 text-[#b30302]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Key responsibilities */}
                <ul className="mt-auto space-y-2 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-600">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-[#b30302]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .experience-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(179, 3, 2, 0.14);
          border-color: rgba(179, 3, 2, 0.35);
        }

        .experience-card.aos-animate .experience-card-icon {
          animation: iconPop 0.5s ease 0.12s backwards;
        }

        @keyframes iconPop {
          0% {
            transform: scale(0.75);
            opacity: 0;
          }
          70% {
            transform: scale(1.06);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-card,
          .experience-card * {
            transition: none !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}