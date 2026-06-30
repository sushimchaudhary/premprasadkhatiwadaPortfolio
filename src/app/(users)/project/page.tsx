import ProjectsPage from "../../Component/project";


export const metadata = {
  title: "My Projects | Sushim Chaudhary",
  description:
    "Explore the latest web development projects by Sushim Chaudhary, including IT solutions, blogs, management systems, and e-commerce platforms.",
  keywords: [
    "Sushim Chaudhary Projects",
    "Web Development Portfolio",
    "React Projects",
    "Next.js Portfolio",
    "Software Solutions Nepal",
  ],
  openGraph: {
    title: "Projects by Sushim Chaudhary",
    description:
      "Showcasing my work in web development and software solutions.",
    url: "https://sushimchaudhary.com.np/project/",
    siteName: "Sushim Chaudhary Portfolio",
  },
};

export default function Page() {
  return <ProjectsPage />;
}