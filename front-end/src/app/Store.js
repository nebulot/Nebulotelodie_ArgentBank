/*
- On utilise **Redux Toolkit**, 
la version moderne de Redux.
*/

import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../slices/LoginSlice";
import { userReducer } from "../slices/UserSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
