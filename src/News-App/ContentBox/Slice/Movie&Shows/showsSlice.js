import { createSlice } from "@reduxjs/toolkit";

export const showsSlice = createSlice({
  name: "shows",
  initialState: {
    value: "Top Rated",
  },
  reducers: {
    setShowsCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setShowsCategory } = showsSlice.actions;
export default showsSlice.reducer;
