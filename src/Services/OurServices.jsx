import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dry from "../assets/dryCleaning.jpg";
import exective from "../assets/exectivePressing.jpg";
import care from "../assets/care.jpg";
import resturation from "../assets/resturation.jpg";
import sehedule from "../assets/sehedulePickup.jpg";
import fragrance from "../assets/fragrance.jpg";
import dish from "../assets/dishdasha.webp";
import child from "../assets/child_dishdasha.jpg";
import bisht from "../assets/bisht.jpg";
import ghutra from "../assets/ghutra.jpg";
import kurta from "../assets/kurta.jpg";
import kurtaPajama from "../assets/kurtaPajama.jpg";
import kameez from "../assets/kameez.jpg";
import jalabiya from "../assets/jalabiya.jpg";
import abaya from "../assets/abaya.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


// Services Data with Categories
export const services = [
  { id:"",title: "Dry Cleaning", price: "From 6 QAR", img: dry, icon: "🧥", desc: "Expert care for suits and delicate fabrics using eco-friendly solvents", category: "Dry Cleaning" },
  { id:"",title: "Executive Pressing", price: "From 3 QAR", img: exective, icon: "👔", desc: "Crisp finishes for business attire with precision steam technology", category: "Pressing" },
  { id:"", title: "Couture Care", price: "From 7 QAR", img: care, icon: "👗", desc: "Hand-cleaning for designer garments and delicate fabrics", category: "Specialty" },
  { id:"", title: "Bisht Restoration", price: "From 25 QAR", img: resturation, icon: "🕌", desc: "Traditional cleaning and pressing for Qatari formal wear", category: "Specialty" },
  { id:"", title: "Express Service", price: "+30% Premium", img: sehedule, icon: "⚡", desc: "3-hour turnaround for urgent garment needs", category: "Express" },
  { id:"", title: "Fragrance Infusion", price: "5 QAR", img: fragrance, icon: "🌸", desc: "Luxury scent options for your garments", category: "Add-On" },
  { id:"", title: "Dishdasha", price: "From 4 QAR", img: dish, icon: "👳‍♂️", desc: "Professional care for men's traditional Qatari garment", category: "Traditional" },
  { id:"", title: "Child Dishdasha", price: "From 3 QAR", img: child, icon: "👦", desc: "Specialized care for children's traditional garments", category: "Traditional" },
  { id:"", title: "Bisht", price: "From 25 QAR", img: bisht, icon: "🪔", desc: "Premium care for ceremonial cloak with gold detailing", category: "Traditional" },
  { id:"", title: "Ghutra", price: "From 3 QAR", img: ghutra, icon: "🧕", desc: "Gentle cleaning for traditional headwear", category: "Traditional" },
  { id:"", title: "Kurta", price: "From 4 QAR", img: kurta, icon: "👘", desc: "Care for traditional South Asian tunic", category: "Traditional" },
  { id:"", title: "Kurta Pyjama (Set)", price: "From 6 QAR", img: kurtaPajama, icon: "👖", desc: "Complete set cleaning for traditional attire", category: "Traditional" },
  { id:"", title: "Kameez", price: "From 4 QAR", img: kameez, icon: "👕", desc: "Professional care for traditional long shirts", category: "Traditional" },
  { id:"", title: "Jalabiya", price: "From 6 QAR", img: jalabiya, icon: "👚", desc: "Specialized care for flowing traditional gowns", category: "Traditional" },
  { id:"", title: "Abaya", price: "From 10 QAR", img: abaya, icon: "🧕", desc: "Professional cleaning for everyday abayas", category: "Traditional" },
  { id:"", title: "Abaya Special", price: "From 12 QAR", img: "https://lundary.vercel.app/services/abaya_special.jpg", icon: "✨", desc: "Premium care for embellished abayas", category: "Traditional" },
  { id:"", title: "Hijab", price: "From 3 QAR", img: "https://lundary.vercel.app/services/hijab.png", icon: "🧣", desc: "Delicate cleaning for headscarves", category: "Traditional" },
  { id:"", title: "Gent Suit (3pcs)", price: "From 12 QAR", img: "https://lundary.vercel.app/services/gent_suit.jpg", icon: "👔", desc: "Complete care for 3-piece suits", category: "Dry Cleaning" },
  { id:"", title: "Dress (Short)", price: "From 10 QAR", img: "https://lundary.vercel.app/services/dress.jpg", icon: "👗", desc: "Care for cocktail and summer dresses", category: "Dry Cleaning" },
  { id:"", title: "Dress (Long)", price: "From 15 QAR", img: "https://lundary.vercel.app/services/dressLong.jpg", icon: "👳‍♂️", desc: "Specialized care for evening gowns", category: "Dry Cleaning" },
  { id:"", title: "Overcoat", price: "From 11 QAR", img: "https://lundary.vercel.app/services/overcoat.jpg", icon: "🧥", desc: "Winter coat cleaning and preservation", category: "Dry Cleaning" },
  { id:"", title: "Military Uniform", price: "From 9 QAR", img: "https://lundary.vercel.app/services/military_suite.jpg", icon: "🎖️", desc: "Regimental standard cleaning and pressing", category: "Specialty" },
  { id:"", title: "Blouse (Special)", price: "From 4 QAR", img: "https://lundary.vercel.app/services/blouse.jpg", icon: "👚", desc: "Delicate care for embellished tops", category: "Specialty" },
  { id:"", title: "Bath Robe", price: "From 4 QAR", img: "https://lundary.vercel.app/services/bathrob.jpg", icon: "🛁", desc: "Deep cleaning for plush bathrobes", category: "Specialty" }
];

// Tab Categories
const categories = ["All", "Dry Cleaning", "Pressing", "Specialty", "Traditional", "Express", "Add-On"];

const Services = () => {
  const [activeTab, setActiveTab] = useState("All");
      useEffect(() => {
          AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
          });
        }, []);

  // Filter services
  const filteredServices =
    activeTab === "All" ? services : services.filter((s) => s.category === activeTab);

  return (
    <div>
    <section className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden bg-black/3">
      <div className="max-w-9xl mx-auto">

        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3">
            Our Services
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
            <p className="text-lg text-[#D4AF37] tracking-widest font-medium">
              PREMIUM CARE
            </p>
            <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${activeTab === cat
                  ? "bg-[#D4AF37] text-[#1C1C1C]"
                  : "bg-[#1C1C1C] text-[#D4AF37] hover:bg-[#D4AF37]/70 hover:text-[#1C1C1C]"
                }`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((s, i) => (
            <div
            data-aos="fade-up"
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-43 overflow-hidden">
                {/* Image Hover Zoom */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1C1C1C] text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {s.icon}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className=" font-medium text-[#1C1C1C]" style={{fontSize:"115%"}}>
                    {s.title}
                  </h3>
                  <span className="text-[#D4AF37] font-semibold" style={{fontSize:"90%"}}>{s.price}</span>
                </div>

                <p className="text-[#2C2C2C] mb-4" style={{fontSize:"90%"}}>{s.desc}</p>

                <div className="h-px bg-[#D4AF37]/30 my-4"></div>

                <Link to="/book-now">
                  <button
                    className="
                      w-full px-6 py-2 
                      bg-[#D4AF37] text-[#1C1C1C] 
                      rounded-lg font-semibold flex items-center justify-center gap-2
                      transition-all duration-300
                      hover:bg-black/90 hover:text-[#D4AF37]
                    "
                    style={{fontSize:"90%"}}
                  >
                    Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


    <div class="bg-[#1C1C1C] py-20 px-6 md:px-16 lg:px-24 text-center">
  <div  class="max-w-4xl mx-auto">
    
    <h3 data-aos="fade-up"  class="md:text-3xl font-light text-[#D4AF37] mb-6" style={{fontSize:"185%"}}>
      Need Personalized Service?
    </h3>

    <p data-aos="fade-up" data-aos-delay="50" class="text-white/80 mb-8" style={{fontSize:"100%"}}>
      Our VIP concierge team is available 24/7 to handle special requests,
      delicate items, or bulk orders for businesses and residences.
    </p>

    <a data-aos="fade-up" data-aos-delay="350" href="/contact">
      <button 
  class="px-7 py-2.5 bg-[#D4AF37] text-[#1C1C1C] rounded-full 
         inline-flex items-center gap-2 
         transition-all duration-200 ease-out
         hover:scale-105 font-semibold"
         style={{fontSize:"90%"}}
>
  Contact Concierge
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
  </svg>
</button>

    </a>

  </div>
</div>


    </div>
  );
};

export default Services;


