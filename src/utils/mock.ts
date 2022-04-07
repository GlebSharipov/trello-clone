import { ColumnType, CardType, CommentType } from "types";

export const commentsDefaultData: Record<string, CommentType> = {};

export const cardsDefaultData: Record<string, CardType> = {
  "0": {
    id: "0",
    text: "Text1",
    description: "",
    columnId: "0",
  },
};

export const columnsDefaultData: ColumnType[] = [
  {
    id: "0",
    columnName: "TODO",
  },
  {
    id: "1",
    columnName: "In Progress",
  },
  {
    id: "2",
    columnName: "Testing",
  },
  {
    id: "3",
    columnName: "Done",
  },
];
