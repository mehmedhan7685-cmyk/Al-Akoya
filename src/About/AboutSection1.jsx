import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const AboutSection1 = () => {
  useEffect(() => {
            AOS.init({
              // duration: 800,
              // easing: "ease-out-cubic",
              once: true,
              offset: 120,
            });
          }, []);
  return (
    <div className='font-sans'>
      <section className="relative h-[80vh] min-h-[545px] overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('https://lundary.vercel.app/home/eco.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>
  </div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

    <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-light text-white mb-6">
      Luxury Laundry. Reimagined.
    </h1>

    <div data-aos="fade-up" data-aos-delay="150" className="flex items-center mb-8">
      <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
      <p className="text-xl text-[#D4AF37] tracking-widest">AKOYA COLLECTION</p>
      <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
    </div>

    <button
    data-aos="fade-up"
    data-aos-delay="250"
      className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-104"
    >
      Schedule Your Pickup
    </button>

  </div>

</section>

    </div>
  )
}

export default AboutSection1
