import React from 'react'
import './Certifications.css'
import freecodecamp from '../freecodecamp.png'
import cisco1 from '../cisco1.png'
import cisco2 from '../cisco2.png'

const Certifications = () => {
   return (
      <section className='certifications' id="certifications">
        <h2>My Certifications</h2>
        <div className='cert-items'>
        <div><a href="https://www.freecodecamp.org/certification/aya_/responsive-web-design" target="_blank" rel="noopener noreferrer"><img src={freecodecamp} alt="Freecodecamp Responsive Web Design" loading='lazy'/></a>
        <p>Freecodecamp Responsive Web Design</p></div>
        <div><a href="https://www.credly.com/earner/earned/badge/d18b9a22-1d7c-4211-9476-c35b3094ce86" target="_blank" rel="noopener noreferrer"><img src={cisco1} alt="Cisco Javascript Essentials 1" loading='lazy'/></a>
        <p>Cisco Javascript Essentials 1</p></div>
        <div><a href="https://www.credly.com/earner/earned/badge/28e0032d-0cb1-4054-b29c-da2f4944e07e" target="_blank" rel="noopener noreferrer"><img src={cisco2} alt="Cisco Javascript Essentials 2" loading='lazy'/></a>
        <p>Cisco Javascript Essentials 2</p></div>
        </div>
      </section>
   )
}
export default Certifications