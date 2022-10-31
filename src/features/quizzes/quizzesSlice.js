import { createSlice } from "@reduxjs/toolkit";

import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        topicId: topicId,
        name: name,
        cardIds: cardIds
      };
    }
  }
});

export const quizActionCreator = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizId(payload));
  };
};

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
