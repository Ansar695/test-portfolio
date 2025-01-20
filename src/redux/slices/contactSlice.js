"use client";

import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, setSuccess, setError } = contactSlice.actions;
export default contactSlice;
