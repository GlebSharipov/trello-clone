import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentType } from "types";
import { v4 as uuidv4 } from "uuid";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: [] as CommentType[],
  reducers: {
    addComment: (
      state,
      action: PayloadAction<{ cardId: string; commentText: string }>
    ) => {
      state.push({
        id: uuidv4(),
        cardId: action.payload.cardId,
        commentText: action.payload.commentText,
      });
    },

    updateComment: (
      state,
      action: PayloadAction<{ id: string; commentText: string }>
    ) => {
      const comment = state.find((comment) => comment.id === action.payload.id);
      if (comment) {
        comment.commentText = action.payload.commentText;
      }
    },

    deleteComment: (state, action: PayloadAction<{ id: string }>) => {
      const filteredComments = state.filter(
        (comment) => comment.id !== action.payload.id
      );
      return filteredComments;
    },
  },
});

export const { addComment, updateComment, deleteComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
