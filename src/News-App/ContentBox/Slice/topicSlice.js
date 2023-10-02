import { createSlice } from "@reduxjs/toolkit";

export const topicSlice = createSlice({
  name: "topic",
  initialState: {
    value: "Drama",
  },
  reducers: {
    setTopic: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTopic } = topicSlice.actions;
export default topicSlice.reducer;
