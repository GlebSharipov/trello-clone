import { RootState } from "store/store";

export const selectColumnNameById = (columnId: string | undefined) => {
  return (state: RootState) =>
    state.columns.find((column) => column.id === columnId)?.columnName;
};
