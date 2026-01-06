import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, previousStep,addGarment } from '../Store/bookingSlice'

// ================= DATA ARRAYS =================

const menItems = [
  { id: 1, name: 'Thobe', icon: '👔', price: 4 },
  { id: 2, name: 'Bisht', icon: '🧥', price: 10 },
  { id: 3, name: "Men's Suit", icon: '🤵', price: 25 },
  { id: 4, name: 'Ghutra', icon: '👳', price: 5 },
  { id: 5, name: 'Shirt', icon: '👕', price: 6 },
  { id: 6, name: 'Tie', icon: '👔', price: 3 },
  { id: 7, name: 'T-shirt', icon: '👕', price: 5 },
  { id: 8, name: 'Vest', icon: '🦺', price: 4 },
  { id: 9, name: 'Coat', icon: '🧥', price: 15 },
  { id: 10, name: 'Pajamas', icon: '🩳', price: 6 },
  { id: 11, name: 'Military Uniform', icon: '🎖️', price: 20 },
  { id: 12, name: 'Overalls', icon: '👷', price: 12 },
  { id: 13, name: 'Lab Coat', icon: '🥼', price: 10 },
  { id: 14, name: 'Undershirt', icon: '👕', price: 3 },
  { id: 15, name: 'Pants', icon: '👖', price: 7 }
];

const womenItems = [
  { id: 101, name: 'Abaya', icon: '🧕', price: 15 },
  { id: 102, name: 'Long Dress', icon: '👗', price: 12 },
  { id: 103, name: 'Short Dress', icon: '👗', price: 10 },
  { id: 104, name: 'Jalabiya', icon: '👘', price: 18 },
  { id: 105, name: 'Scarf', icon: '🧣', price: 4 },
  { id: 106, name: 'Silk Blouse', icon: '👚', price: 8 },
  { id: 107, name: "Women's Summer Suit", icon: '👗', price: 20 }
];

const householdItems = [
  { id: 201, name: 'Double Bed Cover', icon: '🛏️', price: 25 },
  { id: 202, name: 'Single Bed Cover', icon: '🛏️', price: 15 },
  { id: 203, name: 'Double Bed Sheet', icon: '🛏️', price: 20 },
  { id: 204, name: 'Single Bed Sheet', icon: '🛏️', price: 12 },
  { id: 205, name: 'Double Blanket', icon: '🧸', price: 18 },
  { id: 206, name: 'Single Blanket', icon: '🧸', price: 10 },
  { id: 207, name: 'Small Towel', icon: '🏖️', price: 5 },
  { id: 208, name: 'Large Towel', icon: '🏖️', price: 8 },
  { id: 209, name: 'Pillowcase', icon: '😴', price: 4 },
  { id: 210, name: 'Large Feather Pillow', icon: '😴', price: 15 }
];



// ================= COMPONENT =================

const Step2 = () => {
  const dispatch = useDispatch()
  const garments = useSelector(state => state.booking.orderSummary.garments)

  // typo fix: lenght -> length
  const isNextDisabled = garments.length === 0

  // reusable button (styling SAME as original)
  const ItemButton = ({ icon, name,item }) => (
    <button
      type="button"
      className="flex items-center w-full p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all text-left"
      tabIndex={0}
      onClick={()=> dispatch(addGarment(item))}
    >
      <span className="text-sm sm:text-base flex-1">{icon} {name}</span>
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 ml-auto text-[#D4AF37] flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  )

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Progress Bar */}
        <div className="bg-gray-100 h-1.5 sm:h-2">
          <div className="bg-[#D4AF37] h-full transition-all duration-300" style={{ width: '33.3333%' }} />
        </div>

        {/* Header */}
        <div
          className="p-4 sm:p-6 text-center"
          style={{ background: 'linear-gradient(135deg, rgb(44,36,22) 0%, rgb(74,59,42) 50%, rgb(107,91,71) 100%)' }}
        >
          <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">AKOYA PREMIUM LAUNDRY</h2>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 2 of 6</p>
        </div>

        {/* Content */}
        <div className="flex flex-col" style={{ height: '600px' }}>
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide">
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                What clothes are you sending us?
              </h3>

              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">

                {/* MEN */}
                <div className="space-y-3">
                  <h4 className="font-medium text-base sm:text-lg mb-3">Men's</h4>
                  <div className="space-y-2">
                    {menItems.map(item => (
                    //   <ItemButton key={item.name} icon={item.icon} name={item.name} />
                    <ItemButton key={item.id} item={item} icon={item.icon} name={item.name} />
                    ))}
                  </div>
                </div>

                {/* WOMEN */}
                <div className="space-y-3">
                  <h4 className="font-medium text-base sm:text-lg mb-3">Women's</h4>
                  <div className="space-y-2">
                    {womenItems.map(item => (
                      <ItemButton key={item.id} item={item} icon={item.icon} name={item.name} />
                    ))}
                  </div>
                </div>

                {/* HOUSEHOLD */}
                <div className="space-y-3">
                  <h4 className="font-medium text-base sm:text-lg mb-3">Household Items</h4>
                  <div className="space-y-2">
                    {householdItems.map(item => (
                      <ItemButton key={item.id} item={item} icon={item.icon} name={item.name} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <button
  onClick={() => dispatch(previousStep())}
  className="px-4 mt-4 sm:px-6 sm:h-13 border border-gray-300 rounded-lg text-sm "
>
  Back
</button>

              <button
disabled={isNextDisabled}
onClick={() => dispatch(nextStep())}
className={`mt-4 px-6 py-3 rounded-lg ${isNextDisabled ? 'bg-gray-300' : 'bg-[#D4AF37] text-white'}`}
>
Next
</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Step2
