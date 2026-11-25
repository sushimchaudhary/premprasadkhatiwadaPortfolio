// src/app/about/page.tsx

import AboutMeSection from "../../Component/about";

export const metadata = {
  title: "About Me | Operations Manager | Prem Prasad Khatiwada",
  description:
    "Meet Prem Prasad Khatiwada, an Operations Manager focused on operations planning, workflow management, team coordination, process improvement, and problem solving.",
  keywords: [
    "About Prem Prasad Khatiwada",
    "Operations Manager Nepal",
    "Operations Planning",
    "Workflow Management",
    "Team Coordination",
    "Process Improvement",
    "Logistics and Operations Professional",
  ],
  openGraph: {
    title: "About Me | Operations Manager | Prem Prasad Khatiwada",
    description:
      "Learn more about my experience in operations planning, workflow management, team coordination, and process improvement.",
    url: "/about-us",
    siteName: "Prem Prasad Khatiwada",
  },
};

export default function AboutPage() {
  return <AboutMeSection />;
}