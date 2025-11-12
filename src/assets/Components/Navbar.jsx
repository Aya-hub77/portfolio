import React from 'react'
import './Navbar.css'

const Navbar = () => {
   return (
      <nav className='navbar'>
        <h1>Aya <i className="fa-solid fa-code"></i></h1>
        <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
        </ul>
      </nav>
   )
}
export default Navbar