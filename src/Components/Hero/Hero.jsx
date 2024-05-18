import React from 'react'
import './Hero.css'
import profile6 from '../../assets/profile6.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile6} alt="" />
      <h1><span>I'm Vinisha Choudhary,</span> Frontend Developer</h1>
      <p>A passionate and aspiring tech enthusiast 🚀 skilled in creating web applications with JavaScript, React.js, and a range of other dynamic libraries and frameworks.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
        <a href="/scresume.pdf" download="Vinisha_Choudhary_Resume.pdf">My resume</a>
        </div>
      </div>
     </div>
  )
}

export default Hero
