import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      test_id: {
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
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
