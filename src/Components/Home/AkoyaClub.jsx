import React, { useEffect } from 'react'
import aqua from '../../assets/aquaClub.jpg'

import AOS from "aos";
import "aos/dist/aos.css";


const PickupProcess = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
      });
    }, []);
  return (
    <div>
      <section dir="ltr" className="relative bg-[#1C1C1C] py-24 px-6 md:px-16 lg:px-24 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 opacity-10 bg-[url('./home/exclusive.jpg')] bg-cover bg-center"></div>

  {/* Top & Bottom Gold Lines */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Image Section */}
      <div data-aos="fade-right" className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-140">
          <img
            src={aqua}
            alt="VIP Laundry Service"
            className="w-full h-140 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent"></div>
        </div>

        {/* Exclusive Badge */}
        <div className="absolute -top-5 -right-5 bg-[#D4AF37] text-[#1C1C1C] px-5 py-2.5 rounded-full font-bold flex items-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          EXCLUSIVE
        </div>
      </div>

      {/* Text Section */}
      <div data-aos="fade-left">
        <h2 className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-4 tracking-tight">Akoya Club</h2>

        <p className="text-lg text-white/80 mb-2 tracking-widest font-medium">
          FOR THE FEW WHO KNOW
        </p>

        <div className="w-20 h-0.5 bg-[#D4AF37] my-6"></div>

        <p className="text-white/90 mb-8 leading-relaxed text-[90%]">
          Our invitation-only membership program offers unparalleled benefits for those who demand the absolute best in garment care and convenience.
        </p>

        {/* Features List */}
        <ul className="space-y-4 mb-10">
          {[
            "Priority scheduling with 2-hour pickup windows",
            "Dedicated garment concierge",
            "Complimentary fragrance infusion",
            "Luxury packaging as standard",
            "Bi-annual complimentary couture care",
            "Exclusive seasonal offers"
          ].map((item, i) => (
            <li data-aos="fade-left" key={i} className="flex items-start text-white/90 text-[90%]">
              <svg className="w-4.5 h-4.5 text-[#D4AF37] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-2.5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium flex items-center justify-center gap-2">
            Request Invitation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <button className="px-6 py-2.5 bg-[#D4AF37] text-[#1C1C1C] rounded-full font-medium flex items-center justify-center gap-2">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

      </div>

    </div>
  </div>

</section>

    </div>
  )
}

export default PickupProcess
