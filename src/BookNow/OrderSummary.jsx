import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePackaging } from '../Store/bookingSlice';
import { Link } from 'react-router-dom';

// Importing action creators from the Redux slice to handle user interactions
import { 
  removeService, 
  increaseQty, 
  decreaseQty, 
  toggleIncense, 
  toggleSteam, 
  removeFragrance, 
  addFragrance,
  removeGarment,
  setOrderEnd
   // Note: Ensure this is exported from your bookingSlice
} from '../Store/bookingSlice';

const OrderSummary = () => {
  
  const dispatch = useDispatch();

  // Accessing the orderSummary state from the Redux store
  const { services, garments, finalPrice, extras, fragrance,packaging,personalInfo,BookNow } = useSelector(
    state => state.booking.orderSummary
  );
  console.log(
    personalInfo
  );
  

  return (
    /* Container: 
      - Sticky positioning to keep it visible while scrolling.
      - Fixed max height with internal scrolling for long orders.
    */
    <div className="bg-white rounded-xl shadow-lg sticky top-20 max-h-[85vh] overflow-hidden flex flex-col">

      {/* --- Header Section --- */}
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <h3 className="text-lg sm:text-xl font-bold text-center text-[#D4AF37]">
          🧾 Order Summary
        </h3>
      </div>

      {/* --- Body Section (Scrollable) --- */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6">
        <div className="space-y-3">

          {/* Empty State: Shown if no services are picked */}
          {services.length === 0 && (
            <p className="text-gray-500 text-sm">No service selected.</p>
          )}

          {/* List of Services (Dry Clean, Wash, etc.) */}
          {services.map(service => (
            <div
              key={service.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-sm font-medium">Service Type:</span>
              <div className="flex items-center gap-2">
                <span className="text-sm flex items-center gap-1 text-gray-700">
                  <span className="text-lg">{service.icon}</span>
                  {service.title}
                </span>
                {/* Dispatch action to remove this specific service */}
                <button
                  className="text-red-500 hover:text-red-700 p-1"
                  onClick={() => dispatch(removeService(service.id))}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* --- Garments List Section --- */}
          {garments.length > 0 && (
            <div className="border-b pb-3">
              <p className="font-medium mb-2 text-sm">Garments:</p>
              <div className="space-y-2">
                {garments.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-2">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-medium truncate flex-1">{item.name}</span>
                      <button 
                        className="text-red-500 p-1" 
                        onClick={() => dispatch(removeGarment(item.id))}
                      >
                        x
                      </button>
                    </div>
                    {/* Quantity Controls and Item Subtotal */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <button 
                          className='bg-gray-200 py-0 px-2 rounded' 
                          onClick={() => dispatch(decreaseQty(item.id))}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          className='bg-gray-200 py-0 px-1.5 rounded' 
                          onClick={() => dispatch(increaseQty(item.id))}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-xs font-medium">{item.quantity * item.price} QAR</span>
                    </div>
                  </div>
                ))}

                {/* --- Add-ons / Extras Section --- */}
                
                {/* Steam Finishing Add-on */}
                {extras.steam && (
                  <div className="flex justify-between items-center border-b pb-2 mt-2">
                    <span className="text-sm">Steam Finishing:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-green-600">Included</span>
                      <button 
                        className="text-red-500 hover:text-red-700 p-1"
                        onClick={() => dispatch(toggleSteam())}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Incense Add-on */}
                {extras.incense && (
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm">Incense</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">+4 QAR</span>
                      <button 
                        className="text-red-500 hover:text-red-700 p-1"
                        onClick={() => dispatch(toggleIncense())}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Selected Fragrance */}
                {fragrance && (
                  <div className="border-b pb-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Fragrance:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">+4 QAR</span>
                        <button
                          className="text-red-500"
                          onClick={() => dispatch(removeFragrance())}
                        >
                         x
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{fragrance.name}</div>
                  </div>
                )}


{/* Selected Packaging */}
{packaging && (
  <div className="border-b pb-2 mt-2">
    <div className="flex justify-between items-center">
      <span className="text-sm">Packaging:</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {packaging.price === 0 ? "Free" : `+${packaging.price} QAR`}
        </span>
        <button
          className="text-red-500"
          onClick={() => dispatch(removePackaging())}
        >
          x
        </button>
      </div>
    </div>
    <div className="text-xs text-gray-600 mt-1">
      {packaging.title}
    </div>
  </div>
)}

                {/* Static/Personalized Message Data */}
                {personalInfo && personalInfo.trim() !== "" && (
  <div className="border-b border-gray-100 pb-3 mt-2">
    <p className="font-medium text-sm mb-2 text-gray-700">
      Personalized Card:
    </p>
    <div className="text-xs space-y-1 text-gray-600">
      <p>From: {personalInfo}</p>
    </div>
  </div>
)}

              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- Footer Section (Totals and Discounts) --- */}
      <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
        
        {/* Coupon Input Group */}
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            <input
              placeholder="Enter coupon code"
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:border-[#D4AF37] focus:outline-none"
              type="text"
            />
            <button
              disabled // Currently disabled per your requirement
              className="px-4 py-2 bg-[#D4AF37] hover:bg-[#c9a227] text-white rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Final Calculation Display */}
        <div className="space-y-2">
          <div className="flex justify-between font-bold text-lg">
            <span className="text-gray-700">Final Price</span>
            <span className="text-[#D4AF37]">{finalPrice} QAR</span>
          </div>
        </div>
        {/* Book Now Button  */}
            {BookNow === true ? <button onClick={()=> dispatch(setOrderEnd(true))} className="w-full py-3 bg-[#D4AF37] text-white rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed text-sm transition-all shadow-lg hover:shadow-xl" tabIndex="0">Book Now</button> : ""}
      </div>
    </div>
  );
};

export default OrderSummary;

