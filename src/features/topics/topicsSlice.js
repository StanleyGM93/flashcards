import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          icon: action.payload.icon,
          quizIds: []
        }
      };
    }
  }
};

const topicsSlice = createSlice(options);

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
