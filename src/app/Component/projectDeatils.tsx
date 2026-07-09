"use client";

import { motion, type Variants } from "framer-motion";
import {
  ExternalLink,
  Tag,
  ShieldCheck,
  Code2,
  ClipboardList,
  CheckCircle2,
  Edit3,
  FileText,
  BarChart3,
  Component,
  Languages,
  type LucideIcon,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiShadcnui,
  SiAntdesign,
  SiFramer,
  SiAxios,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Project } from "../../lib/project";

// Normalizes a tech name for matching: lowercase, strip everything that
// isn't a letter/number. This is what lets "shadcn/ui", "Sadcn/ui", and
// "shadcnui" all resolve to the same icon without a giant exact-match map.
function normalize(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Real brand icons — only for tools that actually have one in simple-icons.
const BRAND_RULES: { match: string[]; Icon: IconType }[] = [
  { match: ["nextjs"], Icon: SiNextdotjs },
  { match: ["typescript"], Icon: SiTypescript },
  { match: ["tailwind"], Icon: SiTailwindcss },
  { match: ["framer"], Icon: SiFramer },
  { match: ["axios"], Icon: SiAxios },
  { match: ["python"], Icon: SiPython },
  { match: ["shadcn", "sadcn"], Icon: SiShadcnui },
  { match: ["antdesign", "antd"], Icon: SiAntdesign },
  { match: ["language", "i18n", "translator"], Icon: Languages }, 
];

// Everything else falls back to a semantically-close lucide icon rather
// than guessing at a brand icon that might not exist in the package.
const LUCIDE_RULES: { match: string[]; Icon: LucideIcon }[] = [
  { match: ["reacthookform"], Icon: ClipboardList },
  { match: ["zod"], Icon: CheckCircle2 },
  { match: ["recaptcha"], Icon: ShieldCheck },
  { match: ["ckeditor"], Icon: Edit3 },
  { match: ["jspdf"], Icon: FileText },
  { match: ["recharts"], Icon: BarChart3 },
  { match: ["lucide"], Icon: Component },
];

function resolveIcon(name: string): IconType | LucideIcon {
  const key = normalize(name);
  const brand = BRAND_RULES.find((rule) => rule.match.some((m) => key.includes(m)));
  if (brand) return brand.Icon;

  const fallback = LUCIDE_RULES.find((rule) => rule.match.some((m) => key.includes(m)));
  if (fallback) return fallback.Icon;

  return Code2;
}

function TechIcon({ name }: { name: string }) {
  const Icon = resolveIcon(name);
  return <Icon size={14} />;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center"
    >
      <motion.span
        variants={item}
        className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#dee2e6] bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0f95fe]"
      >
        <Tag size={12} strokeWidth={2.5} />
        {project.category}
      </motion.span>

      <motion.h1
        variants={item}
        className="mb-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl"
      >
        {project.title}
      </motion.h1>

      <motion.p
        variants={item}
        className="mb-6 text-justify font-sans text-lg font-light leading-[1.8] text-[#1b1c1f] sm:text-xl"
      >
        {project.description}
      </motion.p>

      {project.techStack.length > 0 && (
        <motion.div variants={item} className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1b1c1f] transition-colors hover:border-[#0f95fe] hover:text-[#0f95fe]"
              >
                <TechIcon name={tech} />
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div variants={item} className="flex flex-wrap gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[4px] bg-[#0f95fe] px-6 py-2 text-sm font-semibold !text-white !no-underline shadow-[0_8px_20px_rgba(15,149,254,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1380d4] hover:shadow-[0_10px_24px_rgba(15,149,254,0.35)]"
        >
          Visit Website
          <ExternalLink size={16} />
        </a>
      </motion.div>
    </motion.div>
  );
}