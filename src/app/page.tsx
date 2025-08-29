"use client"; // ✅ Add this line at the very top

import HomeSection from "./pages/home";
import Certificates from "./pages/certificates";
import AboutMeSection from "./pages/about-us/page";
import Contact from "./pages/contact/page";
import Services from "./pages/services/page";
import TeamsSection from "./pages/team/page";
import CounterSection from "./pages/counter-section/page";

function page() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <Services />
      <CounterSection />
      <TeamsSection />
      <Certificates />
      <Contact />
    </>
  );
}

export default page;
