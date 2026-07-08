
import AboutMeSection from "./(users)/about-us/page";
import Certificates from "./(users)/certificates";
import Contact from "./(users)/contact/page";
import CounterSection from "./(users)/counter-section/page";
import ServicesPage from "./(users)/services/page";
import SkillsSection from "./(users)/skills/page";
import HomeSection from "./Component/home";
import ProjectsPreview from "./Component/ProjectSection";

function page() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <ProjectsPreview/>
      <ServicesPage />
      <SkillsSection/>
      <CounterSection />
      
      <Certificates />
      <Contact />
    </>
  );
}

export default page;
