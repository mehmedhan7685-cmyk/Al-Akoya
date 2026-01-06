import React from 'react'
import ServiceSlides from './ServiceSlides'
import Navbar from '../Components/Home/Navbar'
import OurServices from './OurServices'
import Footer from '../Footer/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>
      <ServiceSlides/>
      <OurServices/>
      <Footer/>
    </div>
  )
}

export default Services
