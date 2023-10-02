import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    value: "Trending",
  },
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = movieSlice.actions;
export default movieSlice.reducer;
