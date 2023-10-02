import { createSlice } from "@reduxjs/toolkit";

export const europeSlice = createSlice({
  name: "europe",
  initialState: {
    value: "DE",
  },
  reducers: {
    setEuCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEuCategory } = europeSlice.actions;
export default europeSlice.reducer;
