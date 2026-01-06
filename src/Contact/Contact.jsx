import React from 'react'
import ContactSwiper from './ContactSwiper'
import Navbar from '../Components/Home/Navbar'
import ContactSection from './ContactSection'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactSwiper/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Contact
