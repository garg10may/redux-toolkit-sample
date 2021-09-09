import { createSlice } from "@reduxjs/toolkit";

export const myCounterSlice = createSlice({
  name: 'myCounter',
  initialState: {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 8 },
      { id: 4, value: 2 }
    ]
  },
  reducers: {
    incrementCount: (state, action) => {
      state.counters.filter(x => x.id === action.payload.id).value += 1;
    },
    resetCount: (state, action) => {

    },
    deleteCounter: (state, action) => {

    },
    resetAllCount: (state) => {

    }
  }
});

export const { incrementCount, resetAllCount, resetCount, deleteCounter } = myCounterSlice.actions;

export const selectCounters = (state) => state.counters;

export default myCounterSlice.reducer;