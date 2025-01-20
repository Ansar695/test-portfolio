"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAboutData = createAsyncThunk(
  "about/fetchAboutData",
  async () => {
    const response = await axios.get("/api/about");
    return response?.data;
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutSlice;
