export interface Description {
  descriptionText: string;
}

export interface Comment {
  id: string;
  commentText: string;
}

export interface Card {
  id: string;
  text: string;
  description: Description;
  comments: Comment[];
}

export interface Column {
  id: string;
  textTitle: string;
  cards: Card[];
}
