import React from 'react';
import NavbarMobile from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Expertise from './components/Expertise';
import FeaturedProjects from './components/FeaturedProjects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavbarDesktop from './components/NavbarDesktop';

function App() {

  return (
    <>
      <div className='md:hidden block'>
        <NavbarMobile />
      </div>
      <div className='md:block hidden'>
        <NavbarDesktop />
      </div>
      <div>
        <Hero className='' />
      </div>
      <AboutMe className="relative z-10 pt-18" />
      <Expertise className="mt-10" />
      <FeaturedProjects />
      <OpenSource />
      <Contact />
      <Footer />
    </>

  )
}

export default App
