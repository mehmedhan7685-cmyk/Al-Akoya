import React from 'react'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Ahmed Al-Mansoori",
    title: "Head of Couture Care",
    bio: "20+ years in luxury garment care",
    img: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Layla Hassan",
    title: "Fabric Technology Expert",
    bio: "Fabric scientist and preservation expert",
    img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Yousef Ibrahim",
    title: "Operations Director",
    bio: "Ensuring seamless service delivery",
    img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const AboutSection4 = () => {
      const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger the enter animation on mount
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
                  AOS.init({
                    // duration: 800,
                    easing: "ease-out-cubic",
                    once: true,
                    offset: 120,
                  });
                }, []);
  return (
    <div className='font-sans'>
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div data-aos="fade-up"
        className={`max-w-7xl mx-auto text-center transition-opacity duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Meet Our Fabric Specialists
        </h2>

        <div className="w-24 h-px bg-[#D4AF37] mx-auto my-6" />

        <p className="text-[#2C2C2C] max-w-2xl mx-auto mb-12">
          Our team of garment care experts brings decades of combined
          experience in handling luxury fabrics
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div
            data-aos="fade-up"
              key={member.name}
              className={`bg-[#f8f5f2] p-8 rounded-xl transform transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <img
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#D4AF37]"
                src={member.img}
                loading="lazy"
              />
              <h4 className="text-xl font-medium">{member.name}</h4>
              <p className="text-[#D4AF37] mb-4">{member.title}</p>
              <p className="text-[#2C2C2C] text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 

    </div>
  )
}

export default AboutSection4
