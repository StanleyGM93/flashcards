import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
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
      // const { id, name, icon } = action.payload;
      // state.topics[id] = {
      //   id: id,
      //   name: name,
      //   icon: icon
      // };
    }
  }
});
console.log(topicsSlice.actions);

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
