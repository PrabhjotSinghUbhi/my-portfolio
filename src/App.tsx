import NavbarMobile from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Expertise from './components/Expertise';
import FeaturedProjects from './components/FeaturedProjects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavbarDesktop from './components/NavbarDesktop';
import { Toaster } from 'sonner';
import { Suspense } from 'react';

function App() {

  return (
    <>
      <Toaster />
      <div className='md:hidden block'>
        <NavbarMobile />
      </div>
      <div className='md:block hidden'>
        <NavbarDesktop />
      </div>
      <div>
        <Hero className='' />
      </div>
      <Suspense>
        <AboutMe className="relative z-10 pt-18" />
      </Suspense>
      <Suspense>
        <Expertise className="mt-10" />
      </Suspense>
      <Suspense>
        <FeaturedProjects />
      </Suspense>
      <Suspense>
        <OpenSource />
      </Suspense>
      <Suspense>
        <Contact />
        <Footer />
      </Suspense>
    </>


  )
}

export default App
