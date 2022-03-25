export interface Column {
  id: string;
  textTitle: string;
  cards: {
    id: string;
    text: string;
  }[];
}

export interface Card {
  id: string;
  text: string;
}
