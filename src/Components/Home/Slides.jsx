import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

const Slides = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
      });
    }, []);

  return (
    <div className="w-full h-127 relative">

      {/* Pagination style */}
      <style>
               {`
          .swiper-pagination-bullet {
            width: 10px;               /* inactive circle */
            height: 10px;
            border-radius: 50%;        /* circle */
            background: rgb(221, 219, 218);
            opacity: 1;
            margin: 0 7px;
            transition: all 0.4s ease; /* smooth transition */
          }

          .swiper-pagination-bullet-active {
            width: 22px;               /* active pill */
            border-radius: 50px;       /* pill shape */
            background: rgb(212, 175, 55);
          }
        `}

      </style>

      <Swiper
        modules={[Pagination, Navigation,Autoplay]}
        pagination={{ clickable: true }}
        loop={false} // loop disabled
        autoplay={{delay:4000,disableOnInteraction:false}}
        className="h-full w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}

      >
        <SwiperSlide className="h-full w-full flex items-center justify-center">
          <img
            src="https://lundary.vercel.app/home/eco.jpg"
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <h2 data-aos="fade-up" data-aos-delay="50" className="text-[80%] md:text-5xl lg:text-6xl font-light text-white mb-4 max-w-2xl">Premium Garment Care</h2>
          <p data-aos="fade-up" data-aos-delay="150" className="text-[80%] md:text-2xl text-[#D4AF37] mb-8 max-w-xl">Expert cleaning for your most delicate fabrics</p>
          <a href="/book-now">
            <button data-aos="fade-up" data-aos-delay="250" className="bg-[#D4AF37] hover:bg-[#c9a227] text-[1C1C1C] px-7 py-2.5 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105" tabIndex={0}>Schedule Pickup</button>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full flex items-center justify-center">
          <img
            src="https://lundary.vercel.app/home/exectiveCollection.jpg"
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 max-w-2xl" style={{transform:"none"}}>Eco-Conscious Cleaning</h2>
          <p className="text-xl md:text-2xl text-[#D4AF37] mb-8 max-w-xl" style={{transform:"none"}}>Sustainable methods without compromissing quality</p>
          <a href="/book-now">
            <button className="bg-[#D4AF37] hover:bg-[#c9a227] text-[1C1C1C] px-7 py-2.5 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105" tabIndex={0} style={{transform:"none"}}>Schedule Pickup</button>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full flex items-center justify-center">
          <img
            src="https://lundary.vercel.app/home/platinumCare.jpg"
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 max-w-2xl" style={{transform:"none"}}>Precision Pressing </h2>
          <p className="text-xl md:text-2xl text-[#D4AF37] mb-8 max-w-xl" style={{transform:"none"}}>Impecable finishes for business and formalware</p>
          <a href="/book-now">
            <button className="bg-[#D4AF37] hover:bg-[#c9a227] text-[1C1C1C] px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105" tabIndex={0} style={{transform:"none"}}>Schedule Pickup</button>
          </a>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <div
        className="absolute top-1/2 right-4 -translate-y-1/2 w-13 h-13 rounded-full flex items-center justify-center cursor-pointer z-50"
        style={{backgroundColor:"rgba(54, 49, 42, 0.7)"}}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      <div
        className="absolute top-1/2 left-4 -translate-y-1/2 w-13 h-13 rounded-full flex items-center justify-center cursor-pointer z-50" style={{backgroundColor:"rgba(54, 49, 42, 0.7)"}}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(212, 175, 55)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>



    </div>
  );
};

export default Slides;

