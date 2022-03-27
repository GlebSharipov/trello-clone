import { Column, Card } from "types/index";

export const cardsDefaultData: Card[] = [
  {
    id: "0",
    text: "Text1",
  },
  {
    id: "1",
    text: "Text2",
  },
  {
    id: "2",
    text: "Text3",
  },
  {
    id: "3",
    text: "Text4",
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
