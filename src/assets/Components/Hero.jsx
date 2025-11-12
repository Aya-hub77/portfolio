import React from 'react'
import './Hero.css'

const Hero = () => {
   return (
      <main className='hero'>
        <h2>Hi, I’m <span className="highlight">Aya Zerguine</span> <br /> <span className="subtitle">Frontend Web Developer</span></h2>
        <p>Self-taught frontend developer passionate about clean design and smooth UX. I focus on turning ideas into responsive, maintainable interfaces using <strong>React</strong> and modern web tools.</p>
        <a href="/Aya_Zerguine_Frontend_Developer_Resume.pdf" download><button>Download Resume <i class="fa-solid fa-download"></i></button></a>
      </main>
   )
}
export default Hero