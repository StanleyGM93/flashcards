import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { addQuizId } from "../topics/topicsSlice";
import { useDispatch } from "react-redux";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {
      id: {
        id: "test_id",
        topicId: "test_topicId",
        name: "test_name",
        cardIds: ["test_cardIds"]
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
