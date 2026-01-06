import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../Store/bookingSlice';
import suit from '../assets/suit-plastic.jpeg';
import box from '../assets/BOX.jpeg';
import grey from "../assets/grey-fiber.jpeg"
import cream from "../assets/cream-fiber.jpeg"
import { setPackaging } from '../Store/bookingSlice';


// Import Swiper components and modules for potential slider functionality
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper standard styling
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * Step5 Component: Packaging Selection
 * This component allows users to choose between different packaging options
 * for their laundry order.
 */
const Step5 = () => {
    // Initialize Redux dispatch to trigger step navigation actions
    const dispatch = useDispatch();
    const [move,setMove] = useState("grey")
    const [selected,setSelected] = useState("")
    const [select,setSelect] = useState(false)
    const [buttonColor,setButtonColor] = useState("")

    // Placeholder function for selecting packaging type
    const onPackageSelect = (type) => {
        console.log(`Selected packaging: ${type}`);
        // Logic to update global state with selection would go here
    };
    // Left Button 
    const handleBack = ()=> {
        setMove("grey")
    }
    // Right Button 
    const handleFarword = ()=> {
        setMove("cream")
    }
    const handleGrey = ()=> {
        setSelect(true)
        setMove("grey")
        setSelected("")
        setButtonColor("one")
       
        dispatch(setPackaging({
    title: "Premium Fabric Packaging - Gray Light",
    price: 10
  }))
    }
    const handleCream = ()=> {
        setSelect(true)
        setMove("cream")
        setSelected("")
        setButtonColor("two")
        dispatch(setPackaging({
    title: "Premium Fabric Packaging - Cream",
    price: 10
  })); 
    }
    // Card-1 Selection 
    const handleSelect_1 = ()=> {
       setSelected("plastic-packging")
       setSelect(false)
       dispatch(setPackaging({
    title: "Plastic Packaging",
    price: 0
  }));
    }
    // Card-3 Selection 
    const handleSelect_3 = ()=> {
       setSelected("luxury-gift")
       setSelect(false)
       dispatch(setPackaging({
    title: "Luxury Gift Box",
    price: 4
  }))
    }

    return (
        <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                
                {/* PROGRESS BAR 
                  Visually represents completion (83.33% = Step 5/6)
                */}
                <div className="bg-gray-100 h-1.5 sm:h-2">
                    <div 
                        className="bg-[#D4AF37] h-full transition-all duration-300" 
                        style={{ width: "83.3333%" }}
                    ></div>
                </div>

                {/* BRANDING HEADER 
                  Features the premium Akoya gradient and brand title
                */}
                <div 
                    className="p-4 sm:p-6 text-center" 
                    style={{ background: 'linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)' }}
                >
                    <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">AKOYA PREMIUM LAUNDRY</h2>
                    <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 5 of 6</p>
                </div>

                {/* MAIN CONTENT WRAPPER 
                  Fixed height container with a scrollable interior for better UX on smaller screens
                */}
                <div className="flex flex-col" style={{ height: '600px' }}>
                    
                    {/* SCROLLABLE CONTENT AREA */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide">
                        <div className="space-y-6" dir="ltr">
                            <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                                How would you like us to package your garments?
                            </h3>
                            
                            {/* RESPONSIVE GRID FOR PACKAGING CARDS */}
                            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                
                                {/* OPTION 1: PLASTIC PACKAGING (STANDARD/FREE) */}
                                <div 
                                name="plastic-packging"
                                    className={selected === "plastic-packging" ? "border-[#D4AF37] ring-[#D4AF37] p-4 sm:p-6 border rounded-xl cursor-pointer transition-all hover:shadow-sm bg-[#FFF9E6]" : "p-4 sm:p-6 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm"} 
                                    tabIndex={0}
                                    onClick={handleSelect_1}
                                >
                                    <div className="space-y-4">
                                        <div className="aspect-video w-full h-50 rounded-lg overflow-hidden">
                                            <img alt="Plastic Packaging" className="w-full h-full object-contain transition-transform hover:scale-105" loading="lazy" src={suit} />
                                        </div>
                                        <div className="text-center space-y-2">
                                            <h4 className="font-medium text-sm sm:text-base">Plastic Packaging</h4>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Standard plastic bag packaging</p>
                                            <p className="text-green-600 text-xs sm:text-sm font-medium">Free</p>
{selected === "plastic-packging" ?                                             <div className="flex items-center justify-center pt-2">
  <div className="flex items-center gap-2 text-[#D4AF37]">
    {/* SVG Checkmark Icon */}
    <svg 
      className="w-4 h-4" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd"
      />
    </svg>
    {/* Text Label */}
    <span className="text-xs font-medium">Selected</span>
  </div>
</div> : ""}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* OPTION 2: PREMIUM FABRIC (+10 QAR) 
                                    Contains manual UI controls for a custom image slider
                                */}
                                <div 
                                name="premium-fabric"
                                    className={select === true ? "p-4 sm:p-6 border rounded-xl cursor-pointer transition-all hover:shadow-sm border-[#D4AF37] ring-[#D4AF37] bg-[#FFF9E6]" : "p-4 sm:p-6 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm "} 
                                    tabIndex={0} 
                                >
                                    <div className="space-y-4">
                                        <div className="relative aspect-video w-full h-50 rounded-lg overflow-hidden">
                                            {move === "grey" ? <img name="grey" alt="Gray Light" className="w-full h-full object-contain transition-all duration-300" loading="lazy" src={grey} /> : <img name="cream" alt="Gray Light" className="w-full h-full object-contain transition-all duration-300" loading="lazy" src={cream} />}
                                            {/* <img name="grey" alt="Gray Light" className="w-full h-full object-contain transition-all duration-300" loading="lazy" src={grey} />
                                            <img name="cream" alt="Gray Light" className="w-full h-full object-contain transition-all duration-300" loading="lazy" src={cream} /> */}
                                            
                                            {/* CUSTOM SLIDER NAVIGATION BUTTONS */}
                                            <div className="absolute inset-0 flex items-center justify-between p-2">
                                                <button onClick={handleBack} className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                                    </svg>
                                                </button>
                                                <button onClick={handleFarword} className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            
                                            {/* SLIDER PAGINATION DOTS */}
                                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                                                <button onClick={handleBack}  className={move === "grey" ? "h-2 rounded-full transition-all bg-[#D4AF37] w-4" : "w-2 h-2 rounded-full transition-all bg-white/60"}></button>
                                                <button onClick={handleFarword} className={move === "cream" ? "h-2 rounded-full transition-all bg-[#D4AF37] w-4" : "w-2 h-2 rounded-full transition-all bg-white/60"}></button>
                                            </div>
                                        </div>

                                        {/* COLOR SELECTION CHIPS */}
                                        <div className="text-center space-y-2">
                                            <h4 className="font-medium text-sm sm:text-base">Premium Fabric Packaging</h4>
                                            <div className="flex gap-2 justify-center mb-2">
                                                <button onClick={handleGrey} className={buttonColor=== "one" ? "px-3 py-1.5 text-xs rounded-full transition-all bg-[#D4AF37] text-white" : "px-3 py-1.5 text-xs rounded-full transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"}>Gray Light</button>
                                                <button onClick={handleCream} className={buttonColor === "two" ? "px-3 py-1.5 text-xs rounded-full transition-all bg-[#D4AF37]" : "px-3 py-1.5 text-xs rounded-full transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"}>Cream</button>
                                            </div>
                            {/* <button class="px-3 py-1.5 text-xs rounded-full transition-all bg-[#D4AF37] text-white">Gray Light</button> */}
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Luxury fabric bag packaging</p>
                                            <p className="text-[#D4AF37] text-xs sm:text-sm font-medium">+10 QAR</p>
{select === true ?                                             <div className="flex items-center justify-center pt-2">
  <div className="flex items-center gap-2 text-[#D4AF37]">
    {/* SVG Checkmark Icon */}
    <svg 
      className="w-4 h-4" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd"
      />
    </svg>
    {/* Text Label */}
    <span className="text-xs font-medium">Selected</span>
  </div>
</div> : ""}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* OPTION 3: LUXURY GIFT BOX (+4 QAR) */}
                                <div 
                                name="luxury-gift"
                                    className={selected === "luxury-gift" ? "p-4 sm:p-6 border rounded-xl cursor-pointer transition-all hover:shadow-sm border-[#D4AF37] ring-[#D4AF37] bg-[#FFF9E6]" : "p-4 sm:p-6 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm "} 
                                    tabIndex={0} 
                                    onClick={handleSelect_3}
                                >
                                    <div className="space-y-4">
                                        <div className="aspect-video w-full h-50 rounded-lg overflow-hidden">
                                            <img alt="Luxury Gift Box" className="w-full h-full object-contain transition-transform hover:scale-105" loading="lazy" src={box} />
                                        </div>
                                        <div className="text-center space-y-2">
                                            <h4 className="font-medium text-sm sm:text-base">Luxury Gift Box</h4>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Elegant gift box packaging</p>
                                            <p className="text-[#D4AF37] text-xs sm:text-sm font-medium">+4 QAR</p>
{selected === "luxury-gift" ?                                             <div className="flex items-center justify-center pt-2">
  <div className="flex items-center gap-2 text-[#D4AF37]">
    {/* SVG Checkmark Icon */}
    <svg 
      className="w-4 h-4" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd"
      />
    </svg>
    {/* Text Label */}
    <span className="text-xs font-medium">Selected</span>
  </div>
</div> : ""}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* FOOTER NAVIGATION 
                      Contains 'Back' and 'Next' buttons hooked to Redux actions
                    */}
                    <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50">
                        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                            <button 
                                type="button" 
                                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-medium transition-all hover:bg-gray-50" 
                                onClick={() => dispatch(previousStep())}
                            >
                                Back
                            </button>
                            <button 
                                type="button" 
                                className="w-full sm:w-auto sm:ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all bg-[#D4AF37] text-white hover:bg-[#c9a227] shadow-md hover:shadow-lg" 
                                onClick={() => dispatch(nextStep())}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step5;