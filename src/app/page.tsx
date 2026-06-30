
import AboutMeSection from "./(users)/about-us/page";
import Certificates from "./(users)/certificates";
import Contact from "./(users)/contact/page";
import CounterSection from "./(users)/counter-section/page";
import ServicesPage from "./(users)/services/page";
import HomeSection from "./Component/home";

function page() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <ServicesPage />
      <CounterSection />
      
      <Certificates />
      <Contact />
    </>
  );
}

export default page;
