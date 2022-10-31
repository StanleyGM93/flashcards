import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { cardId, front, back } = action.payload;
      state.cards[cardId] = {
        id: cardId,
        front: front,
        back: back
      };
    }
  }
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
