import { configureStore } from "@reduxjs/toolkit";
import trailReducers from "./reducers"; // adjust if it's in another folder

export const store = configureStore({
  reducer: trailReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
