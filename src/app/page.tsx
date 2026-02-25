"use client"

import HomeSection from "./Component/home";
import AboutMeSection from "./pages/about-us/page";
import Certificates from "./pages/certificates";
import Contact from "./pages/contact/page";
import CounterSection from "./pages/counter-section/page";
import Services from "./pages/services/page";


function page() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <Services />
      <CounterSection />
      
      <Certificates />
      <Contact />
    </>
  );
}

export default page;
