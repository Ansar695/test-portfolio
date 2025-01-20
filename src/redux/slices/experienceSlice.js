"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExperienceData = createAsyncThunk(
  "experience/fetchExperienceData",
  async () => {
    const response = await axios.get("/api/my-experience");
    return response?.data;
  }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperienceData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExperienceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExperienceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default experienceSlice;
