export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const rawProjects: Omit<Project, "slug">[] = [
  {
    title: "Sempa Tech",
    category: "IT Company",
    description:
      "A professional software solutions and premium IT services platform.",
    image: "/project/sempa.png",
    link: "https://sempatech.com/",
  },
  {
    title: "Edify Nepal",
    category: "Blog & Portal",
    description:
      "An interactive blog portal focused on education and digital insights.",
    image: "/project/edifynepal.png",
    link: "https://edifynepal.com/",
  },
  {
    title: "Arya Tara PVT. LTD.",
    category: "Career",
    image: "/project/aryatara.png",
    description:
      "Aryatara Private Limited is a Japan-based, multi-sector powerhouse delivering innovative technology, business consultancy, and digital solutions to drive global progress and sustainable growth.",
    link: "https://thearyatara.info/",
  },
  {
    title: "The Mount Curry Point",
    category: "Restaurant",
    description:
      "Experience the authentic flavors of India, Nepal, and beyond—scanned, ordered, and served right at your table with our seamless QR-based ordering system.",
    image: "/project/mountcurry.png",
    link: "https://mountcurrypoint.com/",
  },
  {
    title: "School Management System",
    category: "SMS",
    description:
      "Optimizes student enrollment workflows and automates daily attendance tracking, ensuring accurate record-keeping and effortless administrative reporting.",
    image: "/project/sms.png",
    link: "https://school.edifynepal.com/",
  },
  {
    title: "Nepal Chunab",
    category: "Election Portal",
    description: "Real-time election tracking system with data visualization.",
    image: "/project/nepalchunab.png",
    link: "http://nepalchunab.vercel.app/",
  },
  {
    title: "ThemeCraft Dashboard",
    category: "ThemeCraft",
    description:
      "An interactive UI customizer for real-time color manipulation and theme styling.",
    image: "/project/dashboard.png",
    link: "https://dashboard-red-eight-99.vercel.app/",
  },
  {
    title: "Khetala Job Platform",
    category: "Job",
    description:
      "Khetala connects local workers and employers in a simple and accessible way. It helps people find jobs, hire workers, and grow opportunities in their own language.",
    image: "/project/khetala.png",
    link: "https://khetala.vercel.app/",
  },
];

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}