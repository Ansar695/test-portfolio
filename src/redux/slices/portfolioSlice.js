"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolioData = createAsyncThunk(
  "portfolio/fetchPortfolioData",
  async () => {
    const response = await axios.get("/api/my-portfolio");
    return response?.data;
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default portfolioSlice;
