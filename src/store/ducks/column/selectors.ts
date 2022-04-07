import { RootState } from "store/store";

export const selectTextTitleById = (columnId: string | undefined) => {
  return (state: RootState) =>
    state.ColumnReducer.find((column) => column.id === columnId)?.textTitle;
};
