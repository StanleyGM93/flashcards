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
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
