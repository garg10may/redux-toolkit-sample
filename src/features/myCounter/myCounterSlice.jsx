import { createSlice } from "@reduxjs/toolkit";

export const myCounterSlice = createSlice({
  name: 'myCounter',
  initialState: [
    { id: 1, value: 4 },
    { id: 2, value: 5 },
    { id: 3, value: 8 },
    { id: 4, value: 2 }
  ],
  reducers: {
    incrementCount: (state, action) => {
      state.map(x => x.id === action.payload ? x.value += 1 : x);
    },
    resetCount: (state, action) => {
      state.map(x => x.id === action.payload ? x.value = 0 : x);
    },
    //Immer expects that you will either mutate the existing state,
    //or construct a new state value yourself and return it, 
    //but not both in the same function!
    deleteCounter: (state, action) => {
      return state.filter(x => x.id != action.payload);
    },
    resetAllCount: (state) => {
      state.map(x => x.value = 0);
    }
  }
});

export const { incrementCount, resetAllCount, resetCount, deleteCounter } = myCounterSlice.actions;

export const selectCounters = (state) => state.myCountersXYZ;

export default myCounterSlice.reducer;