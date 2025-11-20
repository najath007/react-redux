import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import profileReducer from "../features/profileSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer

  }
});
