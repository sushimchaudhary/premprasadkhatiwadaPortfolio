"use client"; // ✅ Add this line at the very top

import HomeSection from './pages/Home'
import Certificates from './pages/Certificates'
import AboutMeSection from './pages/AboutUS/page'
import Contact from './pages/Contact/page'
import Services from './pages/Services/page'
import Gallery from './pages/Gallery/page'
import SkillsSection from './pages/Skills/page'
import TeamsSection from './pages/Team/page'
import CounterSection from './pages/CounterSection/page'

function page() {

  return (
    <>
      <HomeSection/>
      <AboutMeSection/>
      <Services/>
      <CounterSection/>
      <SkillsSection/>
      <TeamsSection/>
      <Certificates/>
      <Gallery/>
      <Contact/>
    </>
  )
}

export default page
