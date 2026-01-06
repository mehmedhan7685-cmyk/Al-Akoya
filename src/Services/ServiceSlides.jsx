import eco from "../assets/eco.jpg";
import pCollection from "../assets/pCollection.jpg";
import expert from "../assets/expert.jpg";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

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
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: rgb(221, 219, 218);
            opacity: 1;
            margin: 0 7px;
            transition: all 0.4s ease;
          }
          .swiper-pagination-bullet-active {
            width: 22px;
            border-radius: 50px;
            background: rgb(212, 175, 55);
          }
        `}
      </style>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        loop={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-full w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >

        {/* ------------ Slide 1 ------------ */}
        <SwiperSlide className="h-full w-full relative">
          <img src={eco} className="w-full h-full object-cover" alt="Slide 1" />

          {/* LEFT → RIGHT BRIGHTNESS GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

          {/* TEXT BLOCK */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
            <h1 data-aos="fade-up" data-aos-delay="50" className="text-4xl md:text-6xl font-light text-white mb-4">
              Luxury Laundry Services
            </h1>

            <div data-aos="fade-up" data-aos-delay="150" className="flex items-center mb-8">
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
              <p className="text-xl text-[#D4AF37] tracking-widest">
                For the most discerning clients
              </p>
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
            </div>

            <a data-aos="fade-up" data-aos-delay="250" href="/book-now">
              <button className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-medium transform hover:scale-104 transition-all duration-200">
                Book a Collection
              </button>
            </a>
          </div>
        </SwiperSlide>

        {/* ------------ Slide 2 ------------ */}
        <SwiperSlide className="h-full w-full relative">
          <img src={pCollection} className="w-full h-full object-cover" alt="Slide 2" />

          {/* LEFT → RIGHT BRIGHTNESS GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
              Luxury Laundry Services
            </h1>

            <div className="flex items-center mb-8">
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
              <p className="text-xl text-[#D4AF37] tracking-widest">
                For the most discerning clients
              </p>
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
            </div>

            <a href="/book-now">
              <button className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-medium transform hover:scale-104 transition-all duration-200">
                Book a Collection
              </button>
            </a>
          </div>
        </SwiperSlide>

        {/* ------------ Slide 3 ------------ */}
        <SwiperSlide className="h-full w-full relative">
          <img src={expert} className="w-full h-full object-cover" alt="Slide 3" />

          {/* LEFT → RIGHT BRIGHTNESS GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
              Luxury Laundry Services
            </h1>

            <div className="flex items-center mb-8">
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
              <p className="text-xl text-[#D4AF37] tracking-widest">
                For the most discerning clients
              </p>
              <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
            </div>

            <a href="/book-now">
              <button className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-medium transform hover:scale-104 transition-all duration-200">
                Book a Collection
              </button>
            </a>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slides;
