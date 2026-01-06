import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  nextStep,
  previousStep,
  toggleIncense,
  toggleSteam
} from '../Store/bookingSlice';
import fragrance from '../assets/fragrance.jpg';

const Step3 = () => {
  const dispatch = useDispatch();

  const [steam, setSteam] = useState(false);
  const [incense, setIncense] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Progress */}
        <div className="bg-gray-100 h-2">
          <div className="bg-[#D4AF37] h-full w-1/2"></div>
        </div>

        {/* Header */}
        <div
          className="p-6 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgb(44,36,22), rgb(107,91,71))'
          }}
        >
          <h2 className="text-2xl font-light text-[#D4AF37]">
            AKOYA PREMIUM LAUNDRY
          </h2>
          <p className="text-gray-300 mt-1">Step 3 of 6</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">

          {/* STEAM */}
          <div>
            <h3 className="text-xl text-gray-700 mb-4">
              Do you want us to steam the garments?
            </h3>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setSteam(true);
                  dispatch(toggleSteam(true));
                }}
                className={`flex-1 py-4 rounded-lg border font-medium
                  ${steam
                    ? 'bg-[#FFF1F6] border-[#D4AF37] shadow-md'
                    : 'border-gray-200'}`}
              >
                Yes
              </button>

              <button
                onClick={() => {
                  setSteam(false);
                  dispatch(toggleSteam(false));
                }}
                className={`flex-1 py-4 rounded-lg border font-medium
                  ${!steam
                    ? 'bg-[#FFF1F6] border-[#D4AF37]'
                    : 'bg-gray-100 border-gray-200'}`}
              >
                No
              </button>
            </div>
          </div>

          {/* INCENSE */}
          <div>
            <h3 className="text-xl text-gray-700 mb-4">
              Would you like your clothes to be incensed with Oud?
            </h3>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => {
                  setIncense(true);
                  dispatch(toggleIncense(true));
                }}
                className={`flex-1 py-4 rounded-lg border font-medium
                  ${incense
                    ? 'bg-[#FFF1F6] border-[#D4AF37]'
                    : 'border-gray-200'}`}
              >
                Yes
              </button>

              <button
                onClick={() => {
                  setIncense(false);
                  setConfirmed(false);
                  dispatch(toggleIncense(false));
                }}
                className={`flex-1 py-4 rounded-lg border font-medium
                  ${!incense
                    ? 'bg-[#FFF1F6] border-[#D4AF37]'
                    : 'bg-gray-100 border-gray-200'}`}
              >
                No
              </button>
            </div>

            {/* SAME DIV — VISIBILITY ONLY */}
            <div className={`${!incense ? 'opacity-0 pointer-events-none' : ''}`}>
              <div className="space-y-4">

                <h4 className="text-base sm:text-lg font-medium text-gray-700 text-center sm:text-left">
                  Choose your preferred Oud type:
                </h4>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">

                  {/* OUD CARD */}
                  <div className="p-4 border rounded-xl cursor-pointer transition-all border-gray-200 hover:border-gray-300 hover:shadow-sm">
                    <div className="space-y-3">

                      <div className="aspect-video w-full rounded-lg overflow-hidden">
                        <img
                          src={fragrance}
                          alt="Premium Oud"
                          className="w-full h-40 object-contain"
                        />
                      </div>

                      <div className="text-center">
                        <h5 className="font-semibold text-sm text-gray-800 mb-1">
                          Premium Cambodian Oud
                        </h5>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Authentic Cambodian oud with rich, deep aroma
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

                {/* DISCLAIMER */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <input
                      id="incenseDisclaimer"
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-1 w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] focus:ring-2"
                    />
                    <div className="flex-1">
                      <label
                        htmlFor="incenseDisclaimer"
                        className="text-sm text-blue-800 cursor-pointer font-medium"
                      >
                        I confirm that I do not have any allergy to Oud and its components.
                      </label>
                      <p className="text-xs text-blue-600 mt-1">
                        This confirmation is required for your safety
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50 flex justify-between">
          <button
            onClick={() => dispatch(previousStep())}
            className="px-6 py-3 border rounded-lg"
          >
            Back
          </button>

          <button
            disabled={incense && !confirmed}
            onClick={() => dispatch(nextStep())}
            className={`px-6 py-3 rounded-lg text-white
              ${incense && !confirmed
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-[#D4AF37] hover:bg-[#c9a227]'}`}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default Step3;
