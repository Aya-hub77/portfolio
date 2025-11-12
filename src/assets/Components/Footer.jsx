import React from 'react'
import './Footer.css'
import gmail from '../gmail.png'
import github from '../github.png'

const Footer = () => {
   return (
      <footer className='footer'>
        <p>© {new Date().getFullYear()} Aya Zerguine</p>
        <div className="socials">
        <a href="mailto:ayazerguine.dev@gmail.com"><img src={gmail} alt="email"/></a>
        <a href="https://github.com/Aya-hub77" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
        </div>
      </footer>
   )
}
export default Footer