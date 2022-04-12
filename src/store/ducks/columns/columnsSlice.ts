import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { columnsDefaultData } from "utils/mock";

export const columnsSlice = createSlice({
  name: "columns",
  initialState: columnsDefaultData,
  reducers: {
    updateColumnName: (
      state,
      action: PayloadAction<{ id: string; columnName: string }>
    ) => {
      const { id, columnName } = action.payload;
      state[id].columnName = columnName;
    },
  },
});

export const { updateColumnName } = columnsSlice.actions;

export default columnsSlice.reducer;
