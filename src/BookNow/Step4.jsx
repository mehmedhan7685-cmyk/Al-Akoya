import React, { useState } from 'react';
import { nextStep,previousStep,addFragrance,fragrance } from '../Store/bookingSlice';
import { useDispatch } from 'react-redux';
import lulwa from '../assets/lulwa.jpg'
import sadf from '../assets/sadf.jpg'
import maknoun from '../assets/maknoun.jpg'
import mad from '../assets/mad.jpg'

const Step4 = () => {
    const dispatch = useDispatch()
    const [showFragrance,setShowFragrance] = useState(false)
    const [confirm,setConfirm] = useState(false)
    const [selectedFragrance,setSelectedFragrance] = useState(null)
    const [check,setCheck] = useState(false)

    const handleSelect = (fragrance)=> {
      setSelectedFragrance(fragrance.id)
      setConfirm(true)
      dispatch(addFragrance(fragrance))
    } 
    
 
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Progress Bar (Set to 66.6667% for Step 4 of 6) */}
        <div className="bg-gray-100 h-1.5 sm:h-2">
            <div className="bg-[#D4AF37] h-full transition-all duration-300" style={{ width: "66.6667%" }}></div>
        </div>

        {/* Header */}
        <div className="p-4 sm:p-6 text-center" style={{ background: 'linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)' }}>
            <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">AKOYA PREMIUM LAUNDRY</h2>
            <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 4 of 6</p>
        </div>

        {/* Content and Footer Wrapper */}
        <div className="flex flex-col" style={{ height: '600px' }}>
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide">
                <div className="space-y-6" dir="ltr">
                    
                    {/* Question: Perfume */}
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">Would you like your clothes to be perfumed?</h3>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {/* Option: Yes */}
                             <button
                                            onClick={() => {
                                              setShowFragrance(true);
                                            }}
                                            className={`flex-1 py-4 rounded-lg border font-medium
                                              ${showFragrance
                                                ? 'bg-[#FFF1F6] border-[#D4AF37] shadow-md'
                                                : 'border-gray-200'}`}
                                          >
                                            Yes
                                          </button>
                            {/* Option: No (Currently selected, based on styling) */}
                            <button
                                            onClick={() => {
                                              setShowFragrance(false);
                                            }}
                                            className={`flex-1 py-4 rounded-lg border font-medium
                                              ${!showFragrance
                                                ? 'bg-[#FFF1F6] border-[#D4AF37]'
                                                : 'bg-gray-100 border-gray-200'}`}
                                          >
                                            No
                                          </button>
                        </div>
                        {/* Choose Fragrance  */}

{showFragrance === true ? <div className="space-y-4">
  <h4 className="text-base sm:text-lg font-medium text-gray-700 text-center sm:text-left">
    Choose your preferred fragrance:
  </h4>

  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
    {/* Women's */}
    <div className="space-y-4">
      <h5 className="font-semibold text-sm sm:text-base mb-3 text-center text-[#D4AF37] border-b border-gray-200 pb-2">
        Women's
      </h5>

      <div className="space-y-3">
        <div  onClick={() => handleSelect({ id: 'lulwa', name: 'Lulwa', price: 4 })}
             className={selectedFragrance === "lulwa" ?"p-4 border rounded-xl cursor-pointer transition-all border-[#D4AF37] bg-[#FFF9E6] shadow-md ring-2 ring-[#D4AF37]/20" :"p-4 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm"}>
          <div className="space-y-3">
            <div className="aspect-video w-full h-80 rounded-lg overflow-hidden">
              <img
                src={lulwa}
                alt="Lulwa"
                loading="lazy"
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h6 className="font-semibold text-sm text-gray-800 mb-1">Lulwa</h6>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                Where Sparkle Meets Scent
              </p>
            </div>
            {selectedFragrance === "lulwa" ? <div className="flex items-center justify-center pt-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="text-xs font-medium">Selected</span>
              </div>
            </div> : ""}
          </div>
        </div>

        <div onClick={() => handleSelect({ id: 'sadf', name: 'Sadf', price: 4 })} className={selectedFragrance === "sadf" ?"p-4 border rounded-xl cursor-pointer transition-all border-[#D4AF37] bg-[#FFF9E6] shadow-md ring-2 ring-[#D4AF37]/20" :"p-4 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm"}>
          <div className="space-y-3">
            <div className="aspect-video w-full h-80 rounded-lg overflow-hidden">
              <img
                src={sadf}
                alt="Sadf"
                loading="lazy"
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h6 className="font-semibold text-sm text-gray-800 mb-1">Sadf</h6>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                Your Unique Presence
              </p>
            </div>
            {selectedFragrance === "sadf" ? <div className="flex items-center justify-center pt-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="text-xs font-medium">Selected</span>
              </div>
            </div> : ""}
          </div>
        </div>
      </div>
    </div>

    {/* Men's */}
    <div className="space-y-4">
      <h5 className="font-semibold text-sm sm:text-base mb-3 text-center text-[#D4AF37] border-b border-gray-200 pb-2">
        Men's
      </h5>

      <div className="space-y-3">
        <div onClick={() => handleSelect({ id: 'maknoun', name: 'Maknoun', price: 4 })} className={selectedFragrance === "maknoun" ? "p-4 border rounded-xl cursor-pointer transition-all border-[#D4AF37] bg-[#FFF9E6] shadow-md ring-2 ring-[#D4AF37]/20" :"p-4 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm"}>
          <div className="space-y-3">
            <div className="aspect-video w-full h-80 rounded-lg overflow-hidden">
              <img
                src={maknoun}
                alt="Maknoun"
                loading="lazy"
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h6 className="font-semibold text-sm text-gray-800 mb-1">Maknoun</h6>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                The Secret of Your Allure
              </p>
            </div>

            {selectedFragrance === "maknoun" ? <div className="flex items-center justify-center pt-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="text-xs font-medium">Selected</span>
              </div>
            </div> : ""}
          </div>
        </div>

        <div onClick={() => handleSelect({ id: 'mad', name: 'Mad', price: 4 })} className={selectedFragrance === "mad" ? "p-4 border rounded-xl cursor-pointer transition-all border-[#D4AF37] bg-[#FFF9E6] shadow-md ring-2 ring-[#D4AF37]/20":"p-4 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm"}>
          <div className="space-y-3">
            <div className="aspect-video w-full h-80 rounded-lg overflow-hidden">
              <img
                src={mad}
                alt="Mad"
                loading="lazy"
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h6 className="font-semibold text-sm text-gray-800 mb-1">Mad</h6>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                A Wave of Presence That Never Fades
              </p>
            </div>
            {selectedFragrance === "mad" ? <div className="flex items-center justify-center pt-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="text-xs font-medium">Selected</span>
              </div>
            </div> : ""}
          </div>
        </div>



  </div>


          <div onClick={() => handleSelect({ id: 'sadf', name: 'Sadf', price: 4 })} className={selectedFragrance === "sadf" ? "p-4 border rounded-xl cursor-pointer transition-all border-[#D4AF37] bg-[#FFF9E6] shadow-md ring-2 ring-[#D4AF37]/20":"p-4 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm"}>
          <div className="space-y-3">
            <div className="aspect-video w-full h-80 rounded-lg overflow-hidden">
              <img
                src={sadf}
                alt="Sadf"
                loading="lazy"
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h6 className="font-semibold text-sm text-gray-800 mb-1">Sadf</h6>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                Your Unique Presence
              </p>
            </div>
            {selectedFragrance === "sadf" ? <div className="flex items-center justify-center pt-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="text-xs font-medium">Selected</span>
              </div>
            </div> : ""}
          </div>
        </div>
      </div>
    </div> 
    {/* Confirmation Check Box  */}
    {confirm === true ? <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
  <div className="flex items-start gap-3">
    <input
      id="fragranceDisclaimer"
      type="checkbox"
      onChange={(e)=> setCheck(true)}
      className="mt-1 w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] focus:ring-2"
    />

    <div className="flex-1">
      <label
        htmlFor="fragranceDisclaimer"
        className="text-sm text-blue-800 cursor-pointer font-medium"
      >
        I confirm that I do not have any allergy to the selected perfume
        ingredients.
      </label>

      <p className="text-xs text-blue-600 mt-1">
        This confirmation is required for your safety
      </p>
    </div>
  </div>
</div> : ""}
{/* End Confirmation ChackBox  */}
</div>: ""}
 





                    </div>
                    
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                    <button 
                        type="button" 
                        className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-medium transition-all hover:bg-gray-50" 
                        tabIndex={0}
                        onClick={()=> dispatch(previousStep())}
                    >
                        Back
                    </button>
                    <button
                                disabled={showFragrance === true && check === false}
                                onClick={() => dispatch(nextStep())}
                                className={`px-6 py-3 rounded-lg text-white
                                  ${showFragrance === true && check === false
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-[#D4AF37] hover:bg-[#c9a227]'}`}
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

export default Step4;





