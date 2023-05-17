import { configureStore } from '@reduxjs/toolkit';
import calcReducer from '../features/counter/calcSlice';

export const store = configureStore({
  reducer: {
    calculations: calcReducer,
  },
});
