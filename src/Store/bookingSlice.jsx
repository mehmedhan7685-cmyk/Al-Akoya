import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  orderSummary: {
    services: [],
    garments: [],
    extras: {
      steam: false,
      incense: false
    },
    fragrance: null,
    packaging: null,
    coupon: "",
    finalPrice: 0,
    personalInfo: null,
    BookNow: false,
    OrderEnd: false
  }
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {

    nextStep: (state) => {
      if (state.currentStep < 6) state.currentStep += 1;
    },

    previousStep: (state) => {
      if (state.currentStep > 1) state.currentStep -= 1;
    },

    /* ---------- SERVICES ---------- */
    addService: (state, action) => {
      if (!state.orderSummary.services.find(s => s.id === action.payload.id)) {
        state.orderSummary.services.push(action.payload);
      }
    },

    removeService: (state, action) => {
      state.orderSummary.services =
        state.orderSummary.services.filter(s => s.id !== action.payload);
    },

    /* ---------- GARMENTS ---------- */
    addGarment: (state, action) => {
      const existing = state.orderSummary.garments.find(
        g => g.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.orderSummary.garments.push({
          ...action.payload,
          quantity: 1
        });
      }

      state.orderSummary.finalPrice =
        state.orderSummary.garments.reduce(
          (sum, g) => sum + g.price * g.quantity,
          0
        ) + (state.orderSummary.extras.incense ? 4 : 0);
    },

    increaseQty: (state, action) => {
      const item = state.orderSummary.garments.find(g => g.id === action.payload);
      if (item) item.quantity += 1;

      state.orderSummary.finalPrice =
        state.orderSummary.garments.reduce(
          (sum, g) => sum + g.price * g.quantity,
          0
        ) + (state.orderSummary.extras.incense ? 4 : 0);
    },

    decreaseQty: (state, action) => {
      const item = state.orderSummary.garments.find(g => g.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) item.quantity -= 1;

      state.orderSummary.finalPrice =
        state.orderSummary.garments.reduce(
          (sum, g) => sum + g.price * g.quantity,
          0
        ) + (state.orderSummary.extras.incense ? 4 : 0);
    },

    removeGarment: (state, action) => {
      state.orderSummary.garments =
        state.orderSummary.garments.filter(g => g.id !== action.payload);

      state.orderSummary.finalPrice =
        state.orderSummary.garments.reduce(
          (sum, g) => sum + g.price * g.quantity,
          0
        ) + (state.orderSummary.extras.incense ? 4 : 0);
    },

    /* ---------- EXTRAS ---------- */
    toggleSteam: (state, action) => {
      state.orderSummary.extras.steam = action.payload;
    },

    toggleIncense: (state, action) => {
      const prev = state.orderSummary.extras.incense;
      state.orderSummary.extras.incense = action.payload;

      if (!prev && action.payload) {
        state.orderSummary.finalPrice += 4;
      }

      if (prev && !action.payload) {
        state.orderSummary.finalPrice -= 4;
      }
    },
    fragrance: (state,action) => {
      const prev = state.orderSummary.fragrance
      state.orderSummary.fragrance = action.payload
    },
      /* ---------- FRAGRANCE ---------- */
    addFragrance: (state, action) => {
        state.orderSummary.fragrance = action.payload;
        state.orderSummary.finalPrice += 4
      
    },

    removeFragrance: (state) => {
      if (state.orderSummary.fragrance) {
        state.orderSummary.finalPrice -= 4
        state.orderSummary.fragrance = null;
      }
    },
    /* ---------- PACKAGING ---------- */
setPackaging: (state, action) => {
  const prev = state.orderSummary.packaging;

  // remove previous price
  if (prev) {
    state.orderSummary.finalPrice -= prev.price;
  }

  // set new packaging
  state.orderSummary.packaging = action.payload;

  // add new price
  state.orderSummary.finalPrice += action.payload.price;
},

removePackaging: (state) => {
  if (state.orderSummary.packaging) {
    state.orderSummary.finalPrice -= state.orderSummary.packaging.price;
    state.orderSummary.packaging = null;
  }
},
setPersonalInfo : (state,action) => {
  state.orderSummary.personalInfo = action.payload
  
},
setBookNow: (state,action) => {
  state.orderSummary.BookNow = action.payload
},
setOrderEnd: (state,action) => {
  state.orderSummary.OrderEnd = action.payload
}


  }
});

export const {nextStep,previousStep,addService,removeService,addGarment,increaseQty,decreaseQty,removeGarment,toggleSteam,toggleIncense,fragrance,addFragrance,removeFragrance,setPackaging,
  removePackaging ,setPersonalInfo,personalInfo,setBookNow,BookNow,OrderEnd,setOrderEnd
} = bookingSlice.actions;

export default bookingSlice.reducer;


