import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {
      quiz_id: {
        id: "test_id",
        topicId: "test_topicId",
        name: "test_name",
        cardIds: []
      }
    }
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardsId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: cardsId,
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
