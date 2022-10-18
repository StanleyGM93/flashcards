import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      test: {
        id: "123",
        name: "example topic",
        icon: "icon url",
        quizIds: []
      }
    }
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
