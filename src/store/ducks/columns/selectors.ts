import { RootState } from "store/store";

export const selectColumnNameById = (columnId: string) => {
  return (state: RootState) => state.columns[columnId].columnName;
};
