import React from 'react'
import './Skills.css'
import { DiHtml5, DiCss3 } from "react-icons/di";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";



const Skills = () => {
   return (
      <section className='skills'>
        <DiHtml5 className='icon html' />
        <DiCss3 className='icon css' />
        <DiJavascript className='icon js' />
        <BiLogoTypescript className='icon ts' />
        <FaReact className='icon react' />
        <RiTailwindCssFill className='icon tailwind' />
        <FaGitAlt className='icon git' />
      </section>
   )
}
export default Skills