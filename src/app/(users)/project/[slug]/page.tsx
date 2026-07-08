import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Tag } from "lucide-react";
import { getProjectBySlug, projects } from "../../../../lib/project";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Project`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-[#f5f7fa] py-16 font-[Poppins,sans-serif]">
      <div className="mx-auto max-w-7xl px-3">
        {/* Back link */}
        <Link
          href="/project"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold !no-underline text-[#0f95fe] transition-colors hover:gap-3 hover:text-[#0c449a]"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — image */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-xl border border-[#f0f0f0] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <img
                src={project.image}
                alt={project.title}
                className="h-[280px] w-full object-con sm:h-[380px] lg:h-[460px]"
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#dee2e6] bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0f95fe]">
              <Tag size={12} strokeWidth={2.5} />
              {project.category}
            </span>

            <h1 className="mb-1 text-3xl font-bold text-gray-900 sm:text-4xl">
              {project.title}
            </h1>

           

            <p className="mb-10 text-[1.5rem] leading-relaxed text-[#6c757d]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#0f95fe] px-6 py-2 text-sm font-semibold !text-white !no-underline shadow-[0_8px_20px_rgba(15,149,254,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1380d4] hover:shadow-[0_10px_24px_rgba(15,149,254,0.35)]"
              >
                Visit Website
                <ExternalLink size={16} />
              </Link>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}