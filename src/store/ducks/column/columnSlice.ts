import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    textTitle: "TODO",
  },
  {
    id: "1",
    textTitle: "In Progress",
  },
  {
    id: "2",
    textTitle: "Testing",
  },
  {
    id: "3",
    textTitle: "Done",
  },
];

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    updateColumnName: (
      state,
      action: PayloadAction<{ id: string; textTitle: string }>
    ) => {
      const comment = state.find((column) => column.id === action.payload.id);
      if (comment) {
        comment.textTitle = action.payload.textTitle;
      }
    },
  },
});

export const { updateColumnName } = columnSlice.actions;

export default columnSlice.reducer;
