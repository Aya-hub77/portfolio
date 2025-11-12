import React from 'react'
import './Projects.css'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import dashboard from '../dashboard.png'
import thediner from '../thediner.png'
import medisync from '../medisync.png'
import realestate from '../realestate.png'

const Projects = () => {
   return (
      <section className='projects' id="projects"> 
        <h2>My Projects</h2>
        <div className='proj-items'>
        <div className='item'>
            <img src={thediner} />
            <h3>Food e-commerce app with product listings, shopping cart, and checkout flow. Fully responsive.</h3>
            <div className='buttons'><a href="https://github.com/Aya-hub77/TheDiner-ecommerce" target="_blank" rel="noopener noreferrer"><button>Code <IoMdArrowDroprightCircle className='icon' /></button></a>
            <a href="https://thediner-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Demo <FaGithub className='icon' /></button></a></div>
        </div>
        <div className='item'>
            <img src={dashboard} />
            <h3>Login-protected dashboard with dark mode. <br/>Demo: admin@example.com / admin123</h3>
            <div className='buttons'><a href="https://github.com/Aya-hub77/Dashboard" target="_blank" rel="noopener noreferrer"><button>Code <IoMdArrowDroprightCircle className='icon' /></button></a>
            <a href="https://dashboard-aya.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Demo <FaGithub className='icon' /></button></a></div>
        </div>
        <div className='item'>
            <img src={medisync}/>
            <h3>Responsive landing page for a vitamins brand. Clean layout and modern design.</h3>
            <div className='buttons'><a href="https://github.com/Aya-hub77/Medisync-landing" target="_blank" rel="noopener noreferrer"><button>Code <IoMdArrowDroprightCircle className='icon' /></button></a>
            <a href="https://medisync-landing.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Demo <FaGithub className='icon' /></button></a></div>
        </div>
        <div className='item'>
            <img src={realestate} />
            <h3>Real estate listing site with landing page, search filters, and add-property feature.</h3>
            <div className='buttons'><a href='https://github.com/Aya-hub77/HavenHomes' target="_blank" rel="noopener noreferrer"><button>Code <IoMdArrowDroprightCircle className='icon' /></button></a>
            <a href="https://havenhome-realestate.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Demo <FaGithub className='icon' /></button></a></div>
        </div>
        </div>
        <a href="https://github.com/Aya-hub77" target="_blank" rel="noopener noreferrer"><button className='button'>See All</button></a>
      </section>
   )
}
export default Projects