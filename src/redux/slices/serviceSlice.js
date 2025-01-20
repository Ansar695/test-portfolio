"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServiceData = createAsyncThunk(
  "service/fetchServiceData",
  async (data) => {
    return data;
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchServiceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default serviceSlice;
