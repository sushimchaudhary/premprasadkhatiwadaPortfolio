// src/app/about/page.tsx

import AboutMeSection from "../../Component/about";

export const metadata = {
  title: "About Me | Full Stack MERN Developer | Sushim Chaudhary",
  description: "Meet Sushim Chaudhary, a passionate MERN Stack Developer. Experienced in building high-performance web applications using MongoDB, Express.js, React, and Node.js.",
  keywords: [
    "About Sushim Chaudhary",
    "MERN Stack Developer Nepal",
    "Full Stack Developer Portfolio",
    "Web Development Professional",
    "Software Engineer Profile"
  ],
  openGraph: {
    title: "About Sushim Chaudhary",
    description: "Learn more about my professional journey and technical skills as a MERN Stack Developer.",
    url: "https://sushimchaudhary.com.np/about-us/",
    siteName: "Sushim Chaudhary Portfolio",
  },
};

export default function AboutPage() {
  return <AboutMeSection />;
}