import React from 'react'

const Pop = () => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-2 sm:p-4" style={{ opacity: 1 }}>
  <div
    className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-lg mx-auto p-4 sm:p-6 md:p-10 text-center max-h-[700px]  overflow-y-auto mb-15"
    style={{
      background: "linear-gradient(135deg, rgb(255, 249, 230) 0%, rgb(255, 255, 255) 100%)",
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
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    {/* Image Section */}
    <div className="mb-4 sm:mb-6 md:mb-8">
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-74 md:h-74 mx-auto flex items-center justify-center">
        <img
          alt="Welcome"
          className="w-full h-full rounded-xl sm:rounded-2xl object-contain"
          src="/home/welcome.jpg"
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="mb-4 sm:mb-6 md:mb-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2 sm:mb-3 md:mb-4 px-2" dir="ltr">
        Welcome dear guests
      </h2>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2" dir="ltr">
        We're delighted to have you visit AKOYA Premium Laundry. Experience our exceptional laundry and garment care services
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
        <div className="bg-[#D4AF37] h-1.5 sm:h-2 rounded-full" style={{ width: "100%" }}></div>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 px-2">
        This message will close automatically in 10 seconds
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Pop
