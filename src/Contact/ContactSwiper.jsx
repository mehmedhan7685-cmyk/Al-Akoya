import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import eco from '../assets/eco.jpg'
import exective from '../assets/exectiveCollection.jpg'
import mad from '../assets/mad.jpg'




// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ContactSwiper = () => {
  

  return (
    <div className="relative h-96 min-h-[480px] overflow-hidden flex items-center bg-[#1C1C1C] text-white">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 md:w-4 md:h-4 transition-all duration-300"></span>`;
          },
        }}
        className="relative"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${eco})` }} className="flex items-center w-full h-96 md:h-[480px] bg-cover">
          
          <div  className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Professional Care
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#D4AF37]">
              Expert fabric handling with eco-friendly detergents
            </p>
            <div className="mt-8 h-px bg-[#D4AF37] w-32 mx-auto"></div>
          </div>
          </div>
          
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center w-full h-96 md:h-[480px] bg-cover" style={{backgroundImage: `url(${exective})`}}>
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Professional Care
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#D4AF37]">
              Expert fabric handling with eco-friendly detergents
            </p>
            <div className="mt-8 h-px bg-[#D4AF37] w-32 mx-auto"></div>
          </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center w-full h-96 md:h-[480px] bg-cover" style={{backgroundImage: `url(${mad})`}}>
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Executive Collection
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#D4AF37]">
              Premium laundry solutions for elite fabrics
            </p>
            <div className="mt-8 h-px bg-[#D4AF37] w-32 mx-auto"></div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom TailwindCSS for active bullet */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #ccc;
          opacity: 0.6;
          width: 11px;
          height: 11px;
        }
        .swiper-pagination-bullet-active {
          background-color: #D4AF37; /* Gold color */
          width: 13px;
          height: 13px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ContactSwiper;

