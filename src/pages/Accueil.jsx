import React from 'react'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Projects from '../components/Projects'
import WhatIDo from '../components/WhatIDo'
import Categories from '../components/Categories'
import DoYouHaveIdea from '../components/DoYouHaveIdea'
import About from '../components/About'
import DiscussProjet from '../components/DiscussProjet'

function Accueil() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Projects />
      <WhatIDo />
      <Categories />
      <DiscussProjet />
      <DoYouHaveIdea />
    </>
  )
}

export default Accueil