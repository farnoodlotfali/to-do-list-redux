import { fetchSetModalShow } from "./modal-api";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  open: false,
};

export const setModalShowAsync = createAsyncThunk(
  "modal/setModalShow",
  async (value) => {
    const response = await fetchSetModalShow(value);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setModalShowAsync.fulfilled, (state, action) => {
      state.open = action.payload;
    });
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
