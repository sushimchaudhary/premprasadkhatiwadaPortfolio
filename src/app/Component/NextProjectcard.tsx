"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "../../lib/project";

export default function NextProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group block !no-underline"
      aria-label={`View next project: ${project.title}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mt-20 flex flex-col overflow-hidden rounded-xl border border-[#eaecef] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] sm:flex-row"
      >
        <div className="relative h-[220px] w-full overflow-hidden sm:h-auto sm:w-2/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2 p-8">
          <span className="text-xs font-bold uppercase tracking-wide text-[#0f95fe]">
            Next Project
          </span>
          <h3 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            {project.title}
          </h3>
          <p className="line-clamp-2 font-sans text-sm font-light leading-relaxed text-[#4b4f56]">
            {project.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0f95fe] transition-transform duration-300 group-hover:translate-x-1">
            View project
            <ArrowRight size={16} />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}