// BookNow.jsx
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import OrderSummary from './OrderSummary';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from '../Store/bookingSlice';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import GuestOrderModal from './GuestOrderModal';

const BookNow = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch
  const currentStep = useSelector((state) => state.booking.currentStep)
  const {OrderEnd} = useSelector((state) => state.booking.orderSummary)

  return (
    <div>
      {OrderEnd === false ? <Navbar /> : ""}

      {/* Page Background & Layout */}
      <div
        className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative"
        style={{
          background:
            'linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)',
        }}
      >
        {/* Gold Highlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>

        {/* Decorative Circles */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#B8941F] mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#F4E4B8] mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
        </div>

        {/* Main Container: Grid Layout */}
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT SIDE: Step Forms */}
          <div className="lg:col-span-2">
            {/* {currentStep === 1 && <Step1 onNext={() => setCurrentStep(2)} />}
            {currentStep === 2 && <Step2 onBack={() => setCurrentStep(1)} />} */}
            {currentStep === 1 && <Step1 onNext={() => dispatch(nextStep())} />}
            {currentStep === 2 && <Step2 onBack={() => dispatch(previousStep())} />}
            {currentStep === 3 && <Step3 onNext={() => dispatch(nextStep())}/>}
            {currentStep === 4 && <Step4 onNext={() => dispatch(previousStep())}/>} 
            {currentStep === 5 && <Step5 onNext={() => dispatch(nextStep())}/>} 
            {currentStep === 6 && <Step6 onNext={() => dispatch(previousStep())}/>} 
          </div>

          {/* RIGHT SIDE: Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
            {OrderEnd === true ? <GuestOrderModal/> : ""}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookNow;

