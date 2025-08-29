"use client";
import AboutMeSection from "./Component/about-us/page";
import Certificates from "./Component/certificates";
import Contact from "./Component/contact/page";
import CounterSection from "./Component/counter-section/page";
import HomeSection from "./Component/home";

import Services from "./Component/services/page";
import TeamsSection from "./Component/team/page";

 // ✅ Add this line at the very top


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
