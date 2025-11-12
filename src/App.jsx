import React from 'react'
import Navbar from './assets/Components/Navbar'
import Hero from './assets/Components/Hero'
import Skills from './assets/Components/Skills'
import Footer from './assets/Components/Footer'
import Projects from './assets/Components/Projects'
import Certifications from './assets/Components/Certifications'

const App = () => {
   return (
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Footer />
      </div>
   )
}
export default App