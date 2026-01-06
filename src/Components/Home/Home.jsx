import React, { useState } from "react";
import executive from "../../assets/exectiveCollection.jpg"
import professional from "../../assets/professionalCollection.jpg"
import maknoun from "../../assets/maknoun.jpg"
import mad from "../../assets/mad.jpg"
import lulwa from "../../assets/lulwa.jpg"
import sadf from "../../assets/sadf.jpg"
import suit from "../../assets/suit-plastic.jpeg"
import luxury from "../../assets/luxury.jpg"
import box from "../../assets/BOX.jpeg"
import AkoyaClub from "./AkoyaClub";
import PickupProcess from "./PickupProcess";
import Footer from "../../Footer/Footer"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import welcome from '../../assets/welcome.jpg'

import Navbar from './Navbar'
import Slides from './Slides'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 120,
  });
}, []);

useEffect(() => {
    const timer = setTimeout(() => {
    setShowModal(true);
  }, 1500);

  return () => clearTimeout(timer);
  },[]);

useEffect(() => {
    if (showModal) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setShowModal(false); // Auto close after 10s
            return 100;
          }
          return prev + 1;
        });
      }, 100); // 100 steps * 100ms = 10s total

      return () => clearInterval(interval);
    }
  }, [showModal]);

  const handleClose = () => setShowModal(false);

  return (
    <div>

<Navbar/>

     {/* Welcome Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-2 sm:p-4"
          style={{ opacity: 1 }}
        >
          <div
            className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-lg mx-auto p-4 sm:p-6 md:p-10 text-center max-h-[700px] overflow-y-auto mb-15"
            style={{
              background:
                "linear-gradient(135deg, rgb(255, 249, 230) 0%, rgb(255, 255, 255) 100%)",
              border: "4px solid rgb(212, 175, 55)",
              scrollbarWidth: "none",
              opacity: 1,
              transform: "translateY(20.2117px) scale(0.797883)",
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors group shadow-md touch-manipulation"
              aria-label="Close welcome dialog"
              onClick={handleClose}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Image Section */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-74 md:h-74 mx-auto flex items-center justify-center">
                <img
                  alt="Welcome"
                  className="w-full h-full rounded-xl sm:rounded-2xl object-contain"
                  src={welcome}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2 sm:mb-3 md:mb-4 px-2"
                dir="ltr"
              >
                Welcome dear guests
              </h2>
              <p
                className="text-gray-600 text-sm sm:text-base leading-relaxed px-2"
                dir="ltr"
              >
                We're delighted to have you visit AKOYA Premium Laundry. Experience
                our exceptional laundry and garment care services
              </p>
            </div>

            {/* Decorative Dots */}
            <div className="hidden sm:block absolute top-4 left-4 w-3 h-3 bg-[#D4AF37] rounded-full opacity-30"></div>
            <div className="hidden sm:block absolute bottom-4 right-4 w-4 h-4 bg-[#D4AF37] rounded-full opacity-20"></div>
            <div className="hidden sm:block absolute top-1/2 left-2 w-2 h-2 bg-[#D4AF37] rounded-full opacity-40"></div>
            <div className="hidden sm:block absolute top-1/3 right-2 w-2 h-2 bg-[#D4AF37] rounded-full opacity-25"></div>

            {/* Progress Bar */}
            <div className="mt-4 sm:mt-6">
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mb-2 sm:mb-3">
                <div
                  className="bg-[#D4AF37] h-1.5 sm:h-2 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 px-2">
                This message will close automatically in 10 seconds
              </p>
            </div>
          </div>
        </div>
      )}
<Slides/>
   
{/* Section 1 */}
      <section className="bg-[#faf9f7] py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#1C1C1C] mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div data-aos="fade-up"
  data-aos-delay="100" className="text-center mb-20 ltr" style={{ opacity: "1" }}>
            <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-3 tracking-tight">
              Signature Lines
            </h2>

            <div className="flex justify-center items-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
              <p className="text-xl text-[#D4AF37] tracking-widest font-medium">
                THE AKOYA COLLECTION
              </p>
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="h-75 w-80 relative transform hover:-translate-y-2 duration-700">
            <div data-aos="fade-up"
  data-aos-delay="200" className="h-75 w-80 group absolute" style={{ opacity: "1"}}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] opacity-80 rounded-2xl z-10"></div>
              <div className="absolute inset-0 border border-[#ffffff20] rounded-2xl pointer-events-none"></div>

              <img
                src="https://lundary.vercel.app/home/platinumCare.jpg"
                alt="The Platinum care"
                className="w-full h-75 object-cover rounded-2xl brightness-95 group-hover:brightness-105 transition-all duration-500"
              />

              <div className="absolute bottom-0 text-left pl-6 z-20 w-full pb-6">
                <div className="text-[210%] mb-3 w-13 h-13 flex items-center justify-center bg-[#D4AF37] rounded-full text-white shadow-lg transition-all duration-100 transform hover:scale-105">
                  ✨
                </div>

                <h3 className="text-2xl font-medium text-white mb-2">The Platinum Care</h3>

                <p className="text-white/90 text-sm leading-relaxed">
                  Our highest tier service for your most precious garments. Hand washed, steamed, wrapped in protective tissue.
                </p>

                <a href="/services">
                  <button className="mt-4 px-5 py-1.5 bg-[#D4AF37] text-[#1C1C1C] rounded-full text-[80%] font-medium flex items-center gap-2 hover:bg-[#1C1C1C] transition-all duration-300 hover:text-[#D4AF37]">
                    Discover
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            </div>

            {/* Card 2 */}
            <div className="h-75 w-80 transform relative hover:-translate-y-2 transition-all duration-700">
            <div data-aos="fade-up"
  data-aos-delay="350" className="h-75 w-80 absolute group" style={{ opacity: 1}}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] opacity-80 rounded-2xl z-10"></div>
              <div className="absolute inset-0 border border-[#ffffff20] rounded-2xl pointer-events-none"></div>

              <img
                src={executive}
                alt="Executive Collection"
                className="w-full h-75 object-cover rounded-2xl brightness-95 group-hover:brightness-105 transition-all duration-500"
              />

              <div className="absolute bottom-0 left-0 text-left pl-6 z-20 w-full pb-6">
                <div className="text-[210%] mb-3 w-13 h-13 flex items-center justify-center bg-[#D4AF37] rounded-full text-white shadow-lg transition-all duration-100 transform hover:scale-105">
                  👔
                </div>

                <h3 className="text-2xl font-medium text-white mb-2">Executive Collection</h3>

                <p className="text-white/90 text-sm leading-relaxed">
                  Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.
                </p>

                <a href="/services" data-discover="true">
                  <button className="mt-4 px-5 py-1.5 bg-[#D4AF37] text-[#1C1C1C] rounded-full text-[80%] font-medium flex items-center gap-2 hover:bg-[#1C1C1C] transition-all duration-300 hover:text-[#D4AF37]">
                    Discover
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            </div>

            {/* Card 3 */}
            <div className="h-75 w-80 transform relative hover:-translate-y-2 transition-all duration-700">
            <div data-aos="fade-up"
  data-aos-delay="500" className="h-75 w-80 absolute group" style={{ opacity: 1 }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] opacity-80 rounded-2xl z-10"></div>
              <div className="absolute inset-0 border border-[#ffffff20] rounded-2xl pointer-events-none"></div>

              <img
                alt="Couture Preservation"
                src={professional}
                className="w-full h-75 object-cover rounded-2xl brightness-95 group-hover:brightness-105 transition-all duration-500"
              />

              <div className="absolute bottom-0 left-0 text-left pl-6 z-20 w-full pb-6">
                <div className="text-[210%] mb-3 w-13 h-13 flex items-center justify-center bg-[#D4AF37] rounded-full text-white shadow-lg transition-all duration-100 transform hover:scale-105">
                  🧵
                </div>

                <h3 className="text-2xl font-medium text-white mb-2">
                  Couture Preservation
                </h3>

                <p className="text-white/90 text-sm leading-relaxed">
                  Specialized care for designer pieces and delicate fabrics. Museum-quality
                  cleaning to maintain texture and color integrity.
                </p>

                <a href="/services" data-discover="true">
                  <button className="mt-4 px-5 py-1.5 bg-[#D4AF37] text-[#1C1C1C] rounded-full text-[80%] font-medium flex items-center gap-2 hover:bg-[#1C1C1C] transition-all duration-300 hover:text-[#D4AF37]">
                    Discover
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16" style={{ opacity: 1 }}>
          <a href="/services" data-discover="true">
            <button className="px-8 py-3 border border-[#1C1C1C] text-[#1C1C1C] rounded-full hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 flex items-center mx-auto gap-2">
              View All Collections
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </section>

{/* Section 2 - 5 remain the same */}
{/* Only fix applied: lg-gap-12 → lg:gap-12 */}
{/* Section 2 */}
<section className="bg-white py-12 px-6 md:px-20 overflow-hidden relative">
  {/* Background circles */}
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="absolute w-60 h-60 bg-[#D4AF37] rounded-full blur-3xl top-20 left-10"></div>
    <div className="absolute w-80 h-80 bg-[#1C1C1C] rounded-full blur-3xl bottom-10 right-10"></div>
  </div>

  {/* Heading */}
  <div data-aos="fade-up" className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">How Would You Like It Washed?</h2>
    <p className="text-[#D4AF37] font-semibold text-lg tracking-wide uppercase">Choose your experience</p>
  </div>

  {/* Two boxes */}
  <div className="grid md:grid-cols-2 gap-12">
    {/* Standard Wash */}
    <div data-aos="fade-up" data-aos-delay="100" className="bg-[#F5E1DA] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="text-5xl mb-4">🧼</div>
      <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Standard Wash</h3>
      <p className="text-[#2C2C2C] mb-4">
        Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.
      </p>
      <div className="text-[#D4AF37] font-medium text-lg">From 50 QAR</div>
    </div>

    {/* Express Wash */}
    <div data-aos="fade-up" data-aos-delay="150" className="bg-[#F5E1DA] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="text-5xl mb-4">⚡</div>
      <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Express Wash</h3>
      <p className="text-[#2C2C2C] mb-4">
        Need it fast? Get 24-hour turnaround, priority processing, and premium care.
      </p>
      <div className="text-[#D4AF37] font-medium text-lg">From 80 QAR</div>
    </div>
  </div>

  {/* Button */}
  <div data-aos="zoom-out" data-aos-duration="1200" className="mt-12 text-center">
    <a href="/services">
      <button className="bg-[#D4AF37] text-[#1C1C1C] font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
        Continue to Garment Selection
      </button>
    </a>
  </div>
</section>

{/* Section 3 */}
<section className="py-12 bg-gray-100 px-4 md:px-12">
  <div data-aos="fade-up" className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Akoya Signature Fragrances</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Premium scents crafted to elevate your laundry experience
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Maknoun */}
    <div className="transform hover:scale-105 transition-all duration-700 ">
    <div data-aos="fade-up" data-aos-delay="100" className="bg-white  h-full rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col">
      <img alt="Maknoun" className="w-full h-48 object-cover" src={maknoun} />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Maknoun</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-[#D4AF37]">7 QAR</span>
          <a href="/book-now">
            <button className="px-4 py-1 bg-[#D4AF37] text-white rounded-full text-sm hover:opacity-90 transition">
              Add
            </button>
          </a>
        </div>
      </div>
    </div>
    </div>

    {/* Mad */}
    <div className="transform hover:scale-105 transition-all duration-700 relative">
    <div data-aos="fade-up" data-aos-delay="150" className="bg-white absolute h-full rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col  flex flex-col">
      <img alt="Mad" className="w-full h-48 object-cover" src={mad} />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mad</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence.
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-[#D4AF37]">7 QAR</span>
          <a href="/book-now">
            <button className="px-4 py-1 bg-[#D4AF37] text-white rounded-full text-sm hover:opacity-90 transition">
              Add
            </button>
          </a>
        </div>
      </div>
    </div>
    </div>

    {/* Lulwa */}
    <div className="transform hover:scale-105 transition-all duration-700 relative">
    <div data-aos="fade-up" data-aos-delay="200" className="bg-white absolute h-full rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col flex flex-col">
      <img alt="Lulwa" className="w-full h-48 object-cover" src={lulwa} />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Lulwa</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch, leaving a memorable sparkle.
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-[#D4AF37]">7 QAR</span>
          <a href="/book-now">
            <button className="px-4 py-1 bg-[#D4AF37] text-white rounded-full text-sm hover:opacity-90 transition">
              Add
            </button>
          </a>
        </div>
      </div>
    </div>
    </div>

    {/* Sadf */}
    <div className="transform hover:scale-105 transition-all duration-700 relative">
    <div data-aos="fade-up" data-aos-delay="250" className="h-full absolute overflow-hidden bg-white rounded-2xl shadow-lg  hover:shadow-xl transition-all duration-500 flex flex-col  flex flex-col">
      <img alt="Sadf" className="w-full h-48 object-cover" src={sadf} />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sadf</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-[#D4AF37]">7 QAR</span>
          <a href="/book-now">
            <button className="px-4 py-1 bg-[#D4AF37] text-white rounded-full text-sm hover:opacity-90 transition">
              Add
            </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>

{/* Section 4 */}
<section className="bg-[#faf9f7] py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden">
  <div
    className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg')] opacity-5 mix-blend-overlay pointer-events-none"
  ></div>

  <div className="max-w-7xl mx-auto relative">
    {/* Heading */}
    <div data-aos="fade-up" className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight">
        The Final Touch
      </h2>
      <div className="flex justify-center items-center">
        <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
        <p className="text-lg text-[#D4AF37] tracking-widest font-medium">
          PACKAGING OPTIONS
        </p>
        <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
      </div>
    </div>

    {/* Cards */}
    <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-103 h-full flex flex-col ring-1 ring-[#00000010] group">
        <div className="relative h-96 overflow-hidden">
          <img
            alt="Plastic Wrap"
            src={suit}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-107"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md bg-[#D4AF37] text-[#1C1C1C]">
              Included
            </span>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-[115%] font-medium text-[#1C1C1C] mb-2">Plastic Wrap</h3>
          <p className="text-[#2C2C2C] mb-4 text-[80%] leading-relaxed">
            Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.
          </p>
          <div className="mt-auto space-y-2.5">
            {["Medical-grade transparency", "Anti-static interior", "Recyclable material", "Tamper-evident closure"].map((feat, i) => (
              <div key={i} className="flex items-start transform hover:translate-x-1 transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 mr-2.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-[80%] text-[#1C1C1C] leading-tight transform hover:translate-x-1 transition-all duration-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-0 bg-[#D4AF37]"></div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-103 h-full flex flex-col ring-1 ring-[#00000010] group">
        <div className="relative h-96 overflow-hidden">
          <img
            alt="Luxury Fabric Wrap"
            src={luxury}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-107"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md bg-[#D4AF37] text-[#1C1C1C]">
              +10 QAR
            </span>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-[115%] font-medium text-[#1C1C1C] mb-2">Luxury Fabric Wrap</h3>
          <p className="text-[#2C2C2C] mb-4 text-[80%] leading-relaxed">
            Cashmere-lined protective casing with magnetic closure and monogram option.
          </p>
          <div className="mt-auto space-y-2.5">
            {["Italian wool exterior", "Silk-lined interior", "Magnetic seal", "Reusable design"].map((feat, i) => (
              <div key={i} className="flex items-start transform hover:translate-x-1 transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 mr-2.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-[80%] text-[#1C1C1C] leading-tight transform hover:translate-x-1 transition-all duration-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-0 bg-[#D4AF37]"></div>
      </div>

      {/* Card 3 */}
      {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-103 h-full flex flex-col ring-1 ring-[#00000010]">
        <div className="relative h-96 overflow-hidden">
          <img
            alt="Premium Gift Box"
            src={box}
            className="w-full h-full object-contain transition-all transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md bg-[#D4AF37] text-[#1C1C1C]">
              +4 QAR
            </span>
          </div>
        </div> */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer 
transition-all duration-500 transform hover:scale-103 h-full flex flex-col 
ring-1 ring-[#00000010] group">

  <div className="relative h-96 overflow-hidden">
    <img
      alt="Premium Gift Box"
      src={box}
      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-107"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

    <div className="absolute bottom-4 left-4">
      <span className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md bg-[#D4AF37] text-[#1C1C1C]">
        +4 QAR
      </span>
    </div>
  </div>
{/* </div> */}

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-[115%] font-medium text-[#1C1C1C] mb-2">Premium Gift Box</h3>
          <p className="text-[#2C2C2C] mb-4 text-[80%] leading-relaxed">
            Handcrafted wooden presentation case with velvet interior and scent capsule.
          </p>
          <div className="mt-auto space-y-2.5">
            {["Sandalwood construction", "French velvet lining", "Integrated scent capsule", "Heirloom quality"].map((feat, i) => (
              <div key={i} className="flex items-start transform hover:translate-x-1 transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 mr-2.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-[80%] text-[#1C1C1C] leading-tight transform hover:translate-x-1 transition-all duration-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-0 bg-[#D4AF37]"></div>
      </div>
    </div>

    {/* Button */}
    <div className="text-center mt-16">
      <a href="/book-now">
        <button className="px-6.5 py-3.5 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-3 text-[80%] tracking-wider transform hover:scale-105 transition-all duration-200">
          Book Your Order
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </a>
    </div>
  </div>
</section>


{/* Section 5 */}
<PickupProcess/>
<AkoyaClub/>
<Footer/>


    </div>
  );
};

export default Home;
