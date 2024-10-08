import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './covidslice';

export const store = configureStore({
  reducer: {
    covid: covidReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
