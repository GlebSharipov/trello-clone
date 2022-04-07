import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { columnsDefaultData } from "utils/mock";

export const columnsSlice = createSlice({
  name: "column",
  initialState: columnsDefaultData,
  reducers: {
    updateColumnName: (
      state,
      action: PayloadAction<{ id: string; columnName: string }>
    ) => {
      const comment = Object.values(state).find(
        (column) => column.id === action.payload.id
      );
      if (comment) {
        comment.columnName = action.payload.columnName;
      }
    },
  },
});

export const { updateColumnName } = columnsSlice.actions;

export default columnsSlice.reducer;
