"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsData = createAsyncThunk(
  "products/fetchProductsData",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response?.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice;
