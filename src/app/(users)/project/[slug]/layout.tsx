import type { ReactNode } from "react";
import ProjectPageTransition from "../../../Component/ProjectTransition";

export default function ProjectSlugLayout({ children }: { children: ReactNode }) {
  return <ProjectPageTransition>{children}</ProjectPageTransition>;
}