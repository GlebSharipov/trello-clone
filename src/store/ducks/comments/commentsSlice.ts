import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commentsDefaultData } from "utils/mock";
import { v4 as uuidv4 } from "uuid";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsDefaultData,
  reducers: {
    addComment: (
      state,
      action: PayloadAction<{ cardId: string; commentText: string }>
    ) => {
      const { cardId, commentText } = action.payload;
      const id = uuidv4();
      state[id] = {
        id: id,
        cardId: cardId,
        commentText: commentText,
      };
    },

    updateComment: (
      state,
      action: PayloadAction<{ id: string; commentText: string }>
    ) => {
      const { id, commentText } = action.payload;
      state[id].commentText = commentText;
    },

    deleteComment: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      delete state[id];
    },
  },
});

export const { addComment, updateComment, deleteComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
