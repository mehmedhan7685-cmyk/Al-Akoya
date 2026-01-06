import React, { useState } from 'react';
import { previousStep } from '../Store/bookingSlice';
import { useDispatch } from 'react-redux';
import { setPersonalInfo,setBookNow } from '../Store/bookingSlice';

// Assuming this component receives props for managing state/actions
const Step6 = () => {
    const dispatch = useDispatch()
    const [formName,setFormName] = useState(null)
    const [error,setError] = useState(true)
    console.log(formName);
    
    

    return (
        <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                
                {/* Progress Bar (Set to 100% for Step 6 of 6) */}
                <div className="bg-gray-100 h-1.5 sm:h-2">
                    <div className="bg-[#D4AF37] h-full transition-all duration-300" style={{ width: "100%" }}></div>
                </div>

                {/* Header */}
                <div className="p-4 sm:p-6 text-center" style={{ background: 'linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)' }}>
                    <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">AKOYA PREMIUM LAUNDRY</h2>
                    <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 6 of 6</p>
                </div>

                {/* Content and Footer Wrapper */}
                <div className="flex flex-col" style={{ height: '600px' }}>
                    
                    {/* Scrollable Content Area (Form Fields) */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide">
                        <div className="space-y-6" dir="ltr">
                            <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">Want to include a personalized card?</h3>
                            
                            <div className="space-y-4">
                                {/* Input: From Name (Required) */}
                                <div>
                                    <label className="block mb-2 text-sm sm:text-base font-medium">From <span className="text-red-500">*</span></label>
                                    <input 
                                        placeholder="Your name (required)*" 
                                        className={`w-full p-3 sm:p-4 border rounded-lg text-sm sm:text-base transition-all ${error === true ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]'} focus:outline-none focus:ring-1`} 
                                        required 
                                        type="text" 
                                        value={formName} 
                                        onChange={(e) => {
                                            const value = e.target.value
                                            setFormName(value)
                                            dispatch(setPersonalInfo(value))
                                            dispatch(setBookNow(true))
                                            if(value.trim() === "") {
                                                setError(true)
                                            }
                                            else {
                                                setError(false)
                                            }
                                        }}
                                    />
                                    {error === true ? <p className="text-red-500 text-xs sm:text-sm mt-1">This field is required</p>:""}
                                </div>

                                {/* Input: To Name (Optional) */}
                                <div>
                                    <label className="block mb-2 text-sm sm:text-base font-medium">To (optional)</label>
                                    <input 
                                        placeholder="Recipient's name (optional)" 
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-sm sm:text-base transition-all" 
                                        type="text" 
                                        // value={toName}
                                        // onChange={(e) => setToName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Buttons (Back and Complete Order) */}
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
                         </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step6;