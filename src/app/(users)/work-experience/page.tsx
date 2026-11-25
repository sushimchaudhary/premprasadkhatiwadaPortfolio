import React from "react";
import type { Metadata } from "next";
import ExperienceSection from "../../Component/experiences";

export const metadata: Metadata = {
  title: "Work Experience | Operations Manager | Prem Prasad Khatiwada",
  description:
    "Explore the career history of Prem Prasad Khatiwada across operations management, logistics, procurement, branch management, and field engineering in Nepal.",
  keywords: [
    "Prem Prasad Khatiwada Work Experience",
    "Operations Manager Experience Nepal",
    "Logistics Operation Manager",
    "Branch Manager",
    "Procurement and Office Assistant",
    "Field Engineering Experience",
  ],
  openGraph: {
    title: "Work Experience | Operations Manager | Prem Prasad Khatiwada",
    description:
      "Career progression across logistics operations, branch management, procurement, and engineering roles.",
    url: "/work-experience",
    siteName: "Prem Prasad Khatiwada",
  },
};

const ExperiencePage = () => {
  return (
    <div>
      <ExperienceSection />
    </div>
  );
};

export default ExperiencePage;