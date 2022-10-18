import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },

  reducers: {
    addTopic: (state, action) => {
      const { name, icon } = action.payload;
      const id = uuidv4();
      state.topics[id] = {
        id,
        name: name,
        icon: icon,
        quizIds: []
      };
    }
  }
});
console.log(topicsSlice.actions);

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
