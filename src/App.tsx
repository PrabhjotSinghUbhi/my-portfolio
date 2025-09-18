import React from 'react';
import NavbarMobile from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Expertise from './components/Expertise';
import FeaturedProjects from './components/FeaturedProjects';

function App() {

  return (
    <>
      <NavbarMobile />
      <div>
        <Hero className='' />
      </div>
      <AboutMe className="relative z-10 pt-18" />
      <Expertise className="mt-10" />
      <FeaturedProjects />
    </>

  )
}

export default App
