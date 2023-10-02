import { createSlice } from "@reduxjs/toolkit";

export const randomShowIndexSlice = createSlice({
  name: "randomShowIndex",
  initialState: {
    value: 1,
  },
  reducers: {
    setRandomShowIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRandomShowIndex } = randomShowIndexSlice.actions;
export default randomShowIndexSlice.reducer;
