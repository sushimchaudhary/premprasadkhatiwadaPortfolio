"use client";

import HomeSection from "./Component/home";
import AboutMeSection from "./pages/about-us/page";
import Certificates from "./pages/certificates";
import Contact from "./pages/contact/page";
import CounterSection from "./pages/counter-section/page";
import Services from "./pages/services/page";
import TeamsSection from "./pages/team/page";


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
