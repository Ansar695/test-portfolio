"use client";

import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./slices/aboutSlice";
import experienceSlice from "./slices/experienceSlice";
import portfolioSlice from "./slices/portfolioSlice";
import contactSlice from "./slices/contactSlice";
import serviceSlice from "./slices/serviceSlice";

const store = configureStore({
  reducer: {
    about: aboutSlice.reducer,
    service: serviceSlice.reducer,
    experience: experienceSlice.reducer,
    portfolio: portfolioSlice.reducer,
    contact: contactSlice.reducer,
  },
});

export default store;
