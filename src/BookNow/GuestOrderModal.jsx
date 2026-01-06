import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setOrderEnd } from '../Store/bookingSlice';

const GuestOrderModal = () => {
  const dispatch = useDispatch()
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phoneNumber:"+974",
    address:"",
    address_zone:"",
    address_street:"",
    address_buildingNumber:""
  })
   const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e)=> {
    e.preventDefault()
    setSubmitted(true);

    let newErrors = {};

    if (!formData.name) newErrors.name = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    if (!formData.address_street) newErrors.address_street = "This field is required"
    if (!formData.address_buildingNumber) newErrors.address_buildingNumber = "This field is required"
    if (!formData.address_zone) newErrors.address_zone = "This field is required"

setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Your order is successfully submitted!");
    navigate("/");
    
  }
  const handleChange = (e)=> {
    const {name,value} = e.target
    setFormData((prev)=> ({
      ...prev,
      [name]:value
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md" 
        style={{ opacity: 1 }}
      ></div>

      {/* Modal Container */}
      <div 
        className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden" 
        dir="ltr" 
        style={{ maxHeight: '85vh', opacity: 1, transform: 'none' }}
      >
        {/* Decorative Background Circles */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#c9a227]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#2C2416] via-[#4A3B2A] to-[#6B5B47] text-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold">Guest Order Information</h2>
                <p className="text-xs text-gray-300">Please provide your contact details to place the order</p>
              </div>
            </div>
            <button onClick={()=> dispatch(setOrderEnd(false))} className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div 
          className="relative px-6 py-5 overflow-y-auto" 
          style={{ maxHeight: 'calc(85vh - 140px)', scrollbarWidth: 'none' }}
        >
          {/* Custom CSS for hiding scrollbar in Webkit browsers */}
          <style>
            {`
              .overflow-y-auto::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input 
                  placeholder="Enter your full name" 
                  className="w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white" 
                  type="text" 
                  name="name"
                  value={formData.name} 
                  onChange={handleChange}
                />
              {errors.name && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address (Optional)</label>
                <input 
                  placeholder="your@email.com (optional)" 
                  className="w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white" 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">WhatsApp Number <span className="text-red-500">*</span></label>
              <input 
                dir="ltr" 
                placeholder="+974XXXXXXXX (with country code)" 
                className="w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white" 
                type="tel"  
                name="phoneNumber" 
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            {/* Address Section */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Delivery Address <span className="text-red-500">*</span></label>
              
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Unit Number <span className="text-gray-400 text-xs">(optional)</span></label>
                <input 
                  placeholder="e.g., 101" 
                  className="w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white" 
                  type="text" 
                  name="address" 
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Zone <span className="text-red-500">*</span></label>
                  <input 
                    placeholder="e.g., Zone 38" 
                    className="w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white" 
                    type="text" 
                    name="address_zone" 
                    value={formData.address_zone}
                    onChange={handleChange}
                  />
                  {errors.address_zone && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.address_zone}</p>
              )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Street <span className="text-red-500">*</span></label>
                  <input 
                    placeholder="e.g., Al Sadd Street" 
                    className="w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white" 
                    type="text" 
                    name="address_street" 
                    value={formData.address_street}
                    onChange={handleChange}
                  />
                  {errors.address_street && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.address_street}</p>
              )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Building Number <span className="text-red-500">*</span></label>
                  <input 
                    placeholder="e.g., 25" 
                    className="w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-200 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white" 
                    type="text" 
                    name="address_buildingNumber" 
                    value={formData.address_buildingNumber}
                    onChange={handleChange}
                  />
                  {errors.address_buildingNumber && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.address_buildingNumber}</p>
              )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button 
              onClick={()=> dispatch(setOrderEnd(false))}
                type="button" 
                className="flex-1 px-4 py-2.5 text-sm border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-semibold"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex-1 px-4 py-2.5 text-sm bg-gradient-to-r from-[#D4AF37] to-[#c9a227] text-white rounded-xl hover:from-[#c9a227] hover:to-[#b8941f] transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Proceed with Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuestOrderModal;

