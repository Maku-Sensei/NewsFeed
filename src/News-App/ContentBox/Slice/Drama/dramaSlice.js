import { createSlice } from "@reduxjs/toolkit";

export const dramaSlice = createSlice({
  name: "drama",
  initialState: {
    value: "K-Drama",
  },
  reducers: {
    setDramaCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDramaCategory } = dramaSlice.actions;
export default dramaSlice.reducer;
