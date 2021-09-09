import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import abc from '../features/myCounter/myCounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myCountersXYZ: abc
  },
});
