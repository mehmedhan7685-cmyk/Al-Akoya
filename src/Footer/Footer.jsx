import React, { useEffect } from 'react'
import logo from '../assets/Logo.png'
import Aos from 'aos';

const Footer = () => {
   useEffect(() => {
    Aos.init({
      duration: 1000,     // animation speed
      once: true,        // ek dafa animate
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <footer className="bg-[#1C1C1C] text-white border-t border-[#D4AF37]/ mb-[-30px]">

  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

    {/* COLUMN 1 */}
    <div data-aos="fade-up">
      <div className="flex items-center gap-2 mb-6">
        <img
          alt="company logo"
          loading="lazy"
          className="w-34 h-10 mt-4 mx-auto md:ml-4"
          src={logo}
        />
      </div>

      <p className="text-white/70 mb-4 text-[94%] leading-relaxed">
        Luxury garment care redefined. Serving Doha's discerning clients with unparalleled quality and service.
      </p>

   <div className="flex gap-4 mt-6">
  
  {/* Twitter (X) */}
  <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-all duration-200 transform hover:-translate-y-1">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.36 2H21l-6.54 7.46L22 22h-7.1l-4.5-6.33L4.88 22H2l7.06-8.06L2 2h7.24l4.14 5.83z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-all duration-200 transform hover:-translate-y-1">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2
               c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 
               0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-.2a1.2 1.2 0 1 0 0-2.4 
               1.2 1.2 0 0 0 0 2.4z" />
    </svg>
  </a>
  {/* Facebook */}
  <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-all duration-200 transform hover:-translate-y-1">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 
               .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.4l-.4 3h-2v7A10 10 0 0 0 22 12z" />
    </svg>
  </a>
  
</div>

    </div>

    {/* COLUMN 2 */}
    <div data-aos="fade-up">
      <h3 className=" font-medium text-[#D4AF37] mb-6 tracking-wider">OUR SERVICES</h3>
      <ul className="space-y-3">
        <li>
          <a className="text-white/70 text-[90%] transform hover:translate-x-2 duration-200 hover:text-[#D4AF37] transition-all flex items-center gap-2" href="/services" data-discover="true">
            <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            Premium Laundry
          </a>
        </li>
        <li>
          <a className="text-white/70 text-[90%] transform hover:translate-x-2 duration-200 hover:text-[#D4AF37] transition-all flex items-center gap-2" href="/services" data-discover="true">
            <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            Dry Cleaning
          </a>
        </li>
        <li>
          <a className="text-white/70 text-[90%] transform hover:translate-x-2 duration-200 hover:text-[#D4AF37] transition-all flex items-center gap-2" href="/services" data-discover="true">
            <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            Steam Pressing
          </a>
        </li>
        <li>
          <a className="text-white/70 text-[90%] transform hover:translate-x-2 duration-200 hover:text-[#D4AF37] transition-all flex items-center gap-2" href="/services" data-discover="true">
            <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            Fragrance Infusion
          </a>
        </li>
        <li>
          <a className="text-white/70 text-[90%] transform hover:translate-x-2 duration-200 hover:text-[#D4AF37] transition-all flex items-center gap-2" href="/services" data-discover="true">
            <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            Corture Care
          </a>
        </li>
        <li>
          <a className="text-white/70 text-[90%] transform hover:translate-x-2 duration-200 hover:text-[#D4AF37] transition-all flex items-center gap-2" href="/services" data-discover="true">
            <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            VIP Club
          </a>
        </li>

        {/* SAME ITEMS… */}
      </ul>
    </div>

    {/* COLUMN 3 */}
<div data-aos="fade-up">
  <h3 className=" font-medium text-[#D4AF37] mb-6 tracking-wider">
    CONTACT US
  </h3>

  {/* Location */}
  <div className="flex items-center gap-3 text-[90%] mb-3">
    <svg
      className="w-4.5 h-4.5 text-[#D4AF37]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    <span>West Bay, Doha, Qatar</span>
  </div>

  {/* Phone */}
  <div className="flex items-center text-[90%] gap-3 mb-3">
    <svg
      className="w-4.5 h-4.5 text-[#D4AF37]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
    <span>+974 3368 9993</span>
  </div>

  {/* Email */}
  <div className="flex items-center text-[90%] gap-3">
  <svg
    className="w-4.5 h-4.5 text-[#D4AF37] align-middle"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M4 8l6 7a2 2 0 002 0L20 8
     m-16 12h16a2 2 0 002-2V8a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
/>


  </svg>
  <span>Akoyaluxurylaundry@gmail.com</span>
</div>

</div>


    {/* COLUMN 4 */}
    <div data-aos="fade-up">
      <h3 className="font-medium text-[#D4AF37] mb-6 tracking-wider">NEWSLETTER</h3>
      <p className="text-white/70 mb-6 text-[90%]">Subscribe for exclusive offers and garment care tips.</p>

      <form className="space-y-4">
        <input
          placeholder="Your email address"
          className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#D4AF37]/30 rounded 
                     focus:outline-none focus:ring-1 focus:ring-[#D4AF37] 
                     text-white placeholder-white/50"
          type="email"
        />
        <button className="w-full px-6 py-3 bg-[#D4AF37] text-[#1C1C1C] font-medium rounded transition-all transform hover:scale-103 duration-200">
          Subscribe
        </button>
      </form>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-[#D4AF37]/10 py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
      <div></div>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a className="text-blue-600 hover:text-[#D4AF37] transition-colors" href="/privacy" data-discover="true">Created By: Ayaz Khan</a>
        <a className="hover:text-[#D4AF37] transition-colors" href="/terms" data-discover="true">Terms of Service</a>
        <a className="hover:text-[#D4AF37] transition-colors" href="/sitemap" data-discover="true">Sitemap</a>
      </div>
    </div>
  </div>

</footer>

    </div>
  )
}

export default Footer
