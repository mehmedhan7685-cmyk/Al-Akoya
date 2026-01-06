import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, nextStep } from '../Store/bookingSlice';

const services = [
  {
    id: 1,
    icon: "👕",
    title: "Washing & Ironing",
    desc: "Complete washing with ironing"
  },
  {
    id: 2,
    icon: "✨",
    title: "Washing, Ironing, and Perfume Services",
    desc: "Complete washing with ironing and perfume services"
  },
  {
    id: 3,
    icon: "👔",
    title: "Dry Clean",
    desc: "Professional dry cleaning"
  }
];

const Step1 = () => {
  const dispatch = useDispatch();
  const selectedServices = useSelector(state => state.booking.orderSummary.services);
 

  const handleSelect = (service) => {
    dispatch(addService(service));
  };

 

  const isNextDisabled = selectedServices.length === 0;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      {/* Progress Bar */}
      <div className="bg-gray-100 h-1.5 sm:h-2">
        <div
          className="bg-[#D4AF37] h-full transition-all duration-300"
          style={{ width: "16.6667%" }}
        ></div>
      </div>

      {/* Header */}
      <div
        className="p-4 sm:p-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)",
        }}
      >
        <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">
          AKOYA PREMIUM LAUNDRY
        </h2>
        <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 1 of 6</p>
      </div>

      {/* Scroll Content Area */}
      <div className="flex flex-col" style={{ height: "600px" }}>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide">
          <div className="space-y-6" dir="ltr">

            <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
              Choose Service Type:
            </h3>

            {/* Service Cards Grid */}
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              {services.map(service => {
                const isSelected = selectedServices.some(s => s.id === service.id);

                return (
                  <div
                    key={service.id}
                    className={`p-6 border rounded-2xl cursor-pointer transition-all min-h-[160px] flex flex-col items-center text-center border-gray-200 hover:border-gray-300 hover:shadow-sm ${
                      isSelected ? "bg-[#D4AF37]/20 border-[#D4AF37]" : ""
                    }`}
                    onClick={() => handleSelect(service)}
                  >
                    {/* Icon */}
                    <div className="text-2xl mb-3">{service.icon}</div>

                    {/* Title */}
                    <h4 className="font-semibold text-lg text-[#0D1B2A]">{service.title}</h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{service.desc}</p>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50">
        <div className="flex justify-end">
          <button
            onClick={() => dispatch(nextStep())}
            disabled={isNextDisabled}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all shadow-md ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#D4AF37] text-white hover:bg-[#c9a227] hover:shadow-lg"
            }`}
            style={{ transform: "none" }}
            tabIndex={0}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default Step1;

