import React, { useEffect } from 'react'
import our from '../assets/ourmission.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";

const VisionSection2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,     // animation speed
      once: true,        // ek dafa animate
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto mt-20">
    <div data-aos="fade-up" className="text-center mb-12" style={{ opacity: 1 }}>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Vision &amp; Mission</h1>
      <p className="text-xl text-[#D4AF37] font-semibold mb-3">Akoya Premium Laundry</p>
      <p className="text-gray-600 text-base italic max-w-3xl mx-auto">
        Redefining Fabric Care and Personal Luxury in Qatar
      </p>
      <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
    </div>

    <div  className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div data-aos="fade-right"
  data-aos-delay="0"
  data-aos-duration="800" className="lg:col-span-1" style={{ opacity: 1 }}>
        <div className="sticky top-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Akoya Premium Laundry Excellence"
              className="w-full h-[700px] object-cover"
              src={our}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Excellence in Every Detail</h3>
              <p className="text-sm opacity-90">Technology, Artistry, and Care</p>
            </div>
          </div>

          <div
            className="mt-6 bg-gradient-to-br from-[#D4AF37] to-[#c9a227] rounded-xl shadow-lg p-6 text-white"
            style={{ opacity: 1, transform: 'none' }}
          >
            <h4 className="font-bold text-lg mb-3">Experience Excellence Today</h4>
            <button className="w-full bg-white text-[#D4AF37] hover:bg-gray-100 font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div  className="lg:col-span-2 space-y-8" dir="ltr" style={{ opacity: 1, transform: 'none' }}>
        <div data-aos="fade-left" className="bg-white rounded-2xl shadow-xl overflow-hidden" dir="ltr" style={{ opacity: 1, }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 bg-gradient-to-br from-[#D4AF37] to-[#c9a227] p-8 sm:p-12 flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">Our Vision</h2>
            </div>
            <div className="lg:col-span-3 p-8 sm:p-12 flex items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden" dir="ltr" style={{ opacity: 1, transform: 'none' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="lg:col-span-3 p-8 sm:p-12 flex items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices.
              </p>
            </div>
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-12 flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">Our Mission</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12" dir="ltr" style={{ opacity: 1, transform: 'none' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Excellence', 'Innovation', 'Sustainability', 'Customer Focus'].map((value, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#D4AF37] hover:shadow-lg transition-all duration-300"
                style={{ opacity: 1, transform: 'none' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value === 'Excellence' &&
                        'Every item, every wash, every fragrance meets the highest standards.'}
                      {value === 'Innovation' && 'We use advanced systems and smart logistics to deliver faster and cleaner results.'}
                      {value === 'Sustainability' && 'We commit to eco-friendly methods and responsible operations.'}
                      {value === 'Customer Focus' && 'Your satisfaction drives everything we do.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default VisionSection2
