export interface Card {
  id: string;
  text: string;
}
export interface Column {
  id: string;
  textTitle: string;
  cards: Card[];
}
