export interface CommentType {
  id: string;
  cardId: string;
  commentText: string;
}

export interface CardType {
  id: string;
  text: string;
  description: string;
  columnId: string;
}

export interface ColumnType {
  id: string;
  columnName: string;
}
