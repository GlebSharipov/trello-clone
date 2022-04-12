import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardsDefaultData } from "utils/mock";
import { v4 as uuidv4 } from "uuid";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: cardsDefaultData,
  reducers: {
    addNewCard: (
      state,
      action: PayloadAction<{ columnId: string; cardText: string }>
    ) => {
      const { columnId, cardText } = action.payload;
      const id = uuidv4();
      state[id] = {
        id: id,
        text: cardText,
        description: "",
        columnId: columnId,
      };
    },

    updateCardText: (
      state,
      action: PayloadAction<{ id: string; cardText: string }>
    ) => {
      const { id, cardText } = action.payload;
      state[id].text = cardText;
    },

    deleteCard: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      delete state[id];
    },

    updateDescription: (
      state,
      action: PayloadAction<{ id: string; description: string }>
    ) => {
      const { id, description } = action.payload;
      state[id].description = description;
    },
  },
});

export const { addNewCard, deleteCard, updateCardText, updateDescription } =
  cardsSlice.actions;

export default cardsSlice.reducer;
