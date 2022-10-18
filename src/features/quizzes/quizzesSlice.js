import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  addQuiz: (state, action) => {
    const { name, topicId, cardsId } = action.payload;
    const id = uuidv4();
    state.quizzes[id] = {
      name: name,
      topicId: topicId,
      cardsId: cardsId
    };
  }
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
