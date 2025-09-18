import React from 'react';
import NavbarMobile from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import { Meteors } from './components/ui/shadcn-io/meteors';
import { AuroraBackground } from './components/ui/shadcn-io/aurora-background';
import { BackgroundBeamsWithCollision } from './components/ui/shadcn-io/background-beams-with-collision';
import { WavyBackground } from './components/ui/shadcn-io/wavy-background';
import { Boxes } from './components/ui/shadcn-io/background-boxes';

function App() {

  return (
    <>
      <NavbarMobile />
      <div>
        <Hero className='' />
      </div>
      <AboutMe className="relative z-10 pt-18" />
    </>

  )
}

export default App
