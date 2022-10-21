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
      const { name, topicId, cardsId } = action.payload;
      const id = uuidv4();
      state.quizzes[id] = {
        name: name,
        topicId: topicId,
        cardsId: cardsId
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
