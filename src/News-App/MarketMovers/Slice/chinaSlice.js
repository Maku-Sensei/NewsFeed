import { createSlice } from "@reduxjs/toolkit";

export const chinaSlice = createSlice({
  name: "china",
  initialState: {
    value: "Tech",
  },
  reducers: {
    setCnCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCnCategory } = chinaSlice.actions;
export default chinaSlice.reducer;
