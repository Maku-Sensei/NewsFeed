import { createSlice } from "@reduxjs/toolkit";

export const subjectQuerySlice = createSlice({
  name: "subjectQuery",
  initialState: {
    value: "",
  },
  reducers: {
    setSubjectQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSubjectQuery } = subjectQuerySlice.actions;
export default subjectQuerySlice.reducer;
