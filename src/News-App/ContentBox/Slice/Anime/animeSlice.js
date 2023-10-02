import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
  name: "anime",
  initialState: {
    value: "Anime",
  },
  reducers: {
    setAnimeCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAnimeCategory } = animeSlice.actions;
export default animeSlice.reducer;
