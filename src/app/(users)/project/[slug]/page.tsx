import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, projects } from "../../../../lib/project";
import ProjectDetails from "../../../Component/projectDeatils";
import NextProjectCard from "../../../Component/NextProjectcard";

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

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject =
    projects.length > 1
      ? projects[(currentIndex + 1) % projects.length]
      : null;
  const prevProject =
    projects.length > 1
      ? projects[(currentIndex - 1 + projects.length) % projects.length]
      : null;

  return (
    <section className="bg-[#f5f7fa] py-8 font-sans">
      <div className="mx-auto max-w-7xl px-3">
        {/* Header row: back link */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 text-sm font-semibold !no-underline text-[#0f95fe] transition-colors hover:gap-3 hover:text-[#0c449a]"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>

        {/* Grid container मा grid-cols-[1.5fr_1fr] प्रयोग गर्नुहोस् */}
<div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.4fr_1fr] ">
  
  {/* Left — image */}
 <div className="lg:sticky lg:top-24 lg:self-start">
  {/* aspect-video ले राम्रो रेसियो दिन्छ */}
  <div className="relative w-full overflow-hidden rounded-xl border border-[#f0f0f0] bg-gray-50 shadow-[0_8px_30px_rgba(0,0,0,0.06)] aspect-video">
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(min-width: 1024px) 60vw, 100vw"
      // object-contain ले इमेजलाई काट्दैन, पुरा देखाउँछ
      className="object-center" 
      priority
    />
  </div>
</div>

  {/* Right — content */}
  <ProjectDetails project={project} />
  
</div>
        {/* Previous & Next Buttons - Moved outside the grid and centered */}
        {(prevProject || nextProject) && (
          <div className="mt-1 flex items-center justify-center gap-4">
            {prevProject && (
              <Link
                href={`/project/${prevProject.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#dee2e6] bg-white px-4 py-2.5 text-sm font-semibold !text-[#1b1c1f] !no-underline shadow-sm transition-all duration-300 hover:gap-3 hover:border-[#0f95fe] hover:text-[#0f95fe]"
              >
                <ArrowLeft size={16} />
                Previous
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/project/${nextProject.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#dee2e6] bg-white px-4 py-2.5 text-sm font-semibold !text-[#1b1c1f] !no-underline shadow-sm transition-all duration-300 hover:gap-3 hover:border-[#0f95fe] hover:text-[#0f95fe]"
              >
                Next Project
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        )}

        {/* Next project preview card */}
        {/* {nextProject && (
          <div className="mt-12">
            <NextProjectCard project={nextProject} />
          </div>
        )} */}
      </div>
    </section>
  );
}