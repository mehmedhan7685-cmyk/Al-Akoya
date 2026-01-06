import React from 'react'
import AboutSection1 from './AboutSection1'
import Navbar from '../Components/Home/Navbar'
import AboutSection2 from './AboutSection2'
import AboutSection3 from './AboutSection3'
import AboutSection4 from './AboutSection4'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>  
      <AboutSection1/>
      <AboutSection2/>
      <AboutSection3/>
      <AboutSection4/>
      <Footer/>
    </div>
  )
}

export default About
