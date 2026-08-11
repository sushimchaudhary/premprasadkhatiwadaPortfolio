export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
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
  title: "RMS & Digital Menu System",
  category: "Web Application / SaaS",
  description:
    "A comprehensive restaurant management solution and real-time digital menu system. Enables seamless multi-branch ordering, live order status updates, interactive table management, dynamic QR code menu access, flexible payment gateways, and real-time admin analytics. Features include a 1 month free demo subscription model, real-time order synchronization via Socket.io, multi-tenant restaurant & multi-branch management, role-based access control (Admin, Staff), live kitchen display, and secure subscription status verification.",
  image: "/project/restaurant.png",
  link: "https://restaurant-management-systems.vercel.app/",
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Node.js",
    "Express.js",
    "Prisma ORM",
    "Socket.io",
    "JWT Authentication",
    "Multer",
    "Axios",
    "Zod",
    "React Hook Form",
  ],
},
  {
    title: "Sempa Tech",
    category: "IT Company",
    description:
      "Sempa Tech helps businesses build software they can rely on — from custom web apps to ongoing IT support, all handled by one team.",
    image: "/project/sempa.png",
    link: "https://sempatech.com/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "Lucide React",
      "React Hook Form",
      "Zod",
      "Python API",
    ],
  },
  {
    title: "Edify Nepal",
    category: "Blog & Portal",
    description:
      "A versatile learning hub and blog for students. It makes learning fun with interactive, clickable alphabets in English, Nepali, and Tibetan—complete with sound playbacks for correct pronunciation. Plus, explore an engaging blog section to discover and share insights on education and technology.",
    image: "/project/edifynepal.png",
    link: "https://edifynepal.com/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Axios",
      "CKEditor 5",
      "React Hook Form",
      "Zod",
      "Python API",
      "shadcn/ui",
      "Ant Design",
      "reCAPTCHA login",
    ],
  },
  {
    title: "Arya Tara PVT. LTD.",
    category: "Corporate & Consulting",
    description:
      "A comprehensive corporate portal for a Japan-based firm providing business consulting and digital services. The platform features an integrated career section, allowing candidates to explore current job openings and submit their applications directly through a user-friendly interface.",
    image: "/project/aryatara.png",
    link: "https://thearyatara.info/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Axios",
      "CKEditor 5",
      "React Hook Form",
      "Zod",
      "Python API",
      "shadcn/ui",
      "Ant Design",
      "reCAPTCHA login",
      "Language Selector",
    ],
  },
  {
    title: "The Mount Curry Point",
    category: "Restaurant",
    description:
      "A seamless digital dining experience tailored for a restaurant in Japan. Customers can simply scan a QR code at their table to browse the menu, explore authentic Indian and Nepali dishes, and place orders directly—making the dining process faster and more convenient for everyone.",
    image: "/project/mountcurry.png",
    link: "https://mountcurrypoint.com/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Axios",
      "CKEditor 5",
      "React Hook Form",
      "Zod",
      "Python API",
      "shadcn/ui",
      "Ant Design",
      "reCAPTCHA login",
      "Language Selector",
    ],
  },
  {
    title: "School Management System",
    category: "SMS",
    description:
      "A comprehensive School Management System designed to streamline administrative tasks and enhance communication. It features role-based dashboards for Admins, Teachers, Staff, Students and Parents. Key functionalities include seamless student enrollment, automated staff leave allocation, and real-time attendance tracking, where parents can monitor their child's daily presence. Teachers and staff can effortlessly generate and export detailed reports in PDF format for efficient documentation.",
    image: "/project/sms.png",
    link: "https://school.edifynepal.com/",
    techStack: [
      "Next.js",
      "Ant Design",
      "jsPDF",
      "React Hook Form",
      "Zod",
      "Axios",
      "Python API",
      "Lucide React",
      "CKEditor 5",
      "Tailwind CSS",
      "shadcn/ui",
      "TypeScript",
      "reCAPTCHA login",
      "Language Selector",
    ],
  },
  {
    title: "Nepal Chunab",
    category: "Election Portal",
    description:
      "Live election tracking portal with real-time data visualization using Recharts and interactive UI components.",
    image: "/project/nepalchunab.png",
    link: "http://nepalchunab.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
  },
  {
    title: "ThemeCraft Dashboard",
    category: "Admin Dashboard",
    description:
      "A secure admin dashboard with reCAPTCHA login, mixing Ant Design components with shadcn/ui for custom theming.",
    image: "/project/dashboard.png",
    link: "https://dashboard-red-eight-99.vercel.app/",
    techStack: [
      "Next.js",
      "Ant Design",
      "shadcn/ui",
      "Lucide Icons",
      "React Hook Form",
      "Zod",
      "TypeScript",
    ],
  },
  {
    title: "Khetala Job Platform",
    category: "Job Portal",
    description:
      "Platform for local workers and employers to connect, built with secure form validation and responsive design.",
    image: "/project/khetala.png",
    link: "https://khetala.vercel.app/",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Axios",
      "Lucide React",
      "TypeScript",
      "Python API",
      "shadcn/ui",
      "Ant Design",
      "reCAPTCHA login",
      "Language Selector",
    ],
  },
];

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
