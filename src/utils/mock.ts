import { Column, Card, Description, Comment } from "types/index";

export const descriptionData: Description = { descriptionText: "Description" };

export const commentsData: Comment[] = [{ id: "0", commentText: "Comment1" }];

export const cardsDefaultData: Card[] = [
  {
    id: "0",
    text: "Text1",
    description: descriptionData,
    comments: commentsData,
  },
  {
    id: "1",
    text: "Text2",
    description: descriptionData,
    comments: commentsData,
  },
  {
    id: "2",
    text: "Text3",
    description: descriptionData,
    comments: commentsData,
  },
  {
    id: "3",
    text: "Text4",
    description: descriptionData,
    comments: commentsData,
  },
];

export const columnsDefaultData: Column[] = [
  {
    id: "0",
    textTitle: "TODO",
    cards: cardsDefaultData,
  },
  {
    id: "1",
    textTitle: "In Progress",
    cards: cardsDefaultData,
  },
  {
    id: "2",
    textTitle: "Testing",
    cards: cardsDefaultData,
  },
  {
    id: "3",
    textTitle: "Done",
    cards: cardsDefaultData,
  },
];
