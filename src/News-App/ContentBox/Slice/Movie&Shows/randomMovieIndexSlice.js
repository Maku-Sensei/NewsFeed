import { createSlice } from "@reduxjs/toolkit";

export const randomMovieIndexSlice = createSlice({
  name: "randomMovieIndex",
  initialState: {
    value: 1,
  },
  reducers: {
    setRandomMovieIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRandomMovieIndex } = randomMovieIndexSlice.actions;
export default randomMovieIndexSlice.reducer;
