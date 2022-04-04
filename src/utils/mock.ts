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

export const columnsDefaultData: Record<string, ColumnType> = {
  "0": {
    id: "0",
    textTitle: "TODO",
  },
  "1": {
    id: "1",
    textTitle: "In Progress",
  },
  "2": {
    id: "2",
    textTitle: "Testing",
  },
  "3": {
    id: "3",
    textTitle: "Done",
  },
};
