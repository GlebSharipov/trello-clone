interface columnType {
  id: string;
  textTitle: string;
}

export let columnState: columnType[] = [
  {
    id: "0",
    textTitle: "TODO",
  },
  {
    id: "1",
    textTitle: "In Progress",
  },
  {
    id: "3",
    textTitle: "Testing",
  },
  {
    id: "4",
    textTitle: "Done",
  },
];

interface cardType {
  id: string;
  text: string;
}

export let cardState: cardType[] = [
  {
    id: "0",
    text: "Text1",
  },
  {
    id: "1",
    text: "Text1",
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
