
import AboutMeSection from "./(users)/about-us/page";
import Contact from "./(users)/contact/page";
import ExperiencePage from "./(users)/work-experience/page";


import HomeSection from "./Component/home";

function page() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      
      <ExperiencePage />
      
      
      
      <Contact />
    </>
  );
}

export default page;
