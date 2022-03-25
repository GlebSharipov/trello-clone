import { Column, Card } from "types/index";

export const cardsDefaultData: Card[] = [
  {
    id: "1",
    text: "Text1",
  },
  {
    id: "2",
    text: "Text2",
  },
  {
    id: "3",
    text: "Text3",
  },
  {
    id: "4",
    text: "Text4",
  },
];

export const columnsDefaultData: Column[] = [
  {
    id: "1",
    textTitle: "TODO",
    cards: [
      {
        id: "0",
        text: "Text1",
      },
      {
        id: "1",
        text: "Text9",
      },
    ],
  },
  {
    id: "2",
    textTitle: "In Progress",
    cards: cardsDefaultData,
  },
  {
    id: "3",
    textTitle: "Testing",
    cards: cardsDefaultData,
  },
  {
    id: "4",
    textTitle: "Done",
    cards: cardsDefaultData,
  },
];
