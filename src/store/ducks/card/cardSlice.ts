import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "types";
import { v4 as uuidv4 } from "uuid";

export const cardSlice = createSlice({
  name: "card",
  initialState: [] as CardType[],
  reducers: {
    addNewCard: (
      state,
      action: PayloadAction<{ columnId: string; cardText: string }>
    ) => {
      state.push({
        id: uuidv4(),
        text: action.payload.cardText,
        description: "",
        columnId: action.payload.columnId,
      });
    },

    updateCardText: (
      state,
      action: PayloadAction<{ id: string; cardText: string }>
    ) => {
      const card = state.find((card) => card.id === action.payload.id);
      if (card) {
        card.text = action.payload.cardText;
      }
    },

    deleteCard: (state, action: PayloadAction<{ id: string }>) => {
      const filteredCards = state.filter(
        (card) => card.id !== action.payload.id
      );
      return filteredCards;
    },

    updateDescription: (
      state,
      action: PayloadAction<{ id: string; description: string }>
    ) => {
      const card = state.find((card) => card.id === action.payload.id);
      if (card) {
        card.description = action.payload.description;
      }
    },
  },
});

export const { addNewCard, deleteCard, updateDescription, updateCardText } =
  cardSlice.actions;

export default cardSlice.reducer;
