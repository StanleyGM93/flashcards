import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      id: {
        id: "test_id",
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
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      const { quizIds } = state[topicId];
      //Need to define quizIds?
      quizIds.push(quizId);
    }
  }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
