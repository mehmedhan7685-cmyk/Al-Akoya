import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    let borderTimeout;

    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 0) {
        setIsScrolled(true);
        setShowBorder(false); // hide border while scrolling
      } else {
        setIsScrolled(false);
        setShowBorder(true); // show border briefly at top
        clearTimeout(borderTimeout);
        borderTimeout = setTimeout(() => {
          setShowBorder(false); // fade out immediately
        }, 300); // 300ms border visible
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(borderTimeout);
    };
  }, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowNavbar(true);
  }, 500);

  return () => clearTimeout(timer);
}, []);


  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Vision & Mission", path: "/vision-mission" },
    { name: "Contact", path: "/contact" },
  ];

  const buttons = [
    { name: "Client Login", path: "/login" },
    { name: "Book Now", path: "/book-now" },
    { name: "العربية", path: "/ar" },
  ];

  return (
    <div>
      <nav
        className={`
    fixed w-full z-50 transition-all duration-700
    ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
    ${isScrolled ? "backdrop-blur-md bg-black/30 shadow-xl" : "bg-transparent shadow-none"}
  `}
      >
        {/* BORDER flash at top */}
        <div
          className={`absolute bottom-0 left-0 w-full transition-opacity duration-500
            ${showBorder ? "border-b border-black/40 opacity-100" : "opacity-0"}
          `}
        ></div>

        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
  {/* <div className=" border border-gray-400 rounded"> */}
    <img
      src={logo}
      alt="company"
      className="w-22 h-10 rounded "
      // border-2 border-black -----> This is BorderClass
    />
  {/* </div> */}
</Link>


          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-[80%] font-medium uppercase tracking-wider text-white/80 hover:text-white transition-all transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/ar"
              className="px-3.5 py-1.5 text-[80%] font-medium rounded-full text-white border border-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              العربية
            </Link>

            <Link
              to="/login"
              className="px-5.5 py-2 text-[80%] font-medium rounded-full text-white border border-[#D4AF37] hover:bg-[#D4AF37]/10 transform hover:scale-105 transition-all duration-300"
            >
              Client Login
            </Link>

            <Link
              to="/book-now"
              className="px-5.5 py-2 text-[80%] font-medium rounded-full bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a227] transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="lg:hidden text-white transition-all duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`lg:hidden  bg-black/60 text-white mx-4 mt-3 rounded-xl overflow-hidden transition-all duration-300 ${
            open ? "max-h-[600px] py-6 px-6 relative z-10" : "max-h-0 py-0 px-6"
          }`}
        >
          <div className="space-y-6">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setOpen(false)}
                className="group relative block text-lg font-medium text-white hover:text-[#D4AF37]"
                style={{
                  transition: "all 0.5s ease",
                  transitionDelay: `${idx * 0.1}s`,
                  transform: open ? "translateX(0)" : "translateX(-20px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <span className="h-12 absolute inset-0 bg-[#D4AF37] opacity-0 hover:opacity-10 transition-opacity rounded-xl"></span>
                <span className="relative z-10 flex items-center justify-between h-12 px-2">
                  {item.name}
                  <span className="ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 space-y-5">
            {buttons.map((btn, idx) => (
              <Link
                key={idx}
                to={btn.path}
                onClick={() => setOpen(false)}
                style={{
                  transition: "all 0.5s ease",
                  transitionDelay: `${(menuItems.length + idx) * 0.1}s`,
                  transform: open ? "translateX(0)" : "translateX(-20px)",
                  opacity: open ? 1 : 0,
                }}
                className={`block w-full py-3 rounded-xl text-center ${
                  btn.name === "Book Now"
                    ? "bg-[#D4AF37] text-[#1a1a1a]"
                    : "border border-[#D4AF37] text-white"
                }`}
              >
                {btn.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className=" h-0 bg-black w-300 ml-5 z-10 fixed">
  <img
    src="https://files.bpcontent.cloud/2025/08/27/08/20250827084606-U4QV905Q.png"
    role="button"
    tabIndex="0"
    alt="Chatbot Button Image"
    draggable="false"
    className="h-15 w-15 rounded-full fixed bottom-5 right-6 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
    
  />
</div>
    </div>
  );
};

export default Navbar;


