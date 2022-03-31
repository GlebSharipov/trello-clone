import React, { FC } from "react";

import { Column } from "components";
import { useLocalStorage } from "hooks";
import styled from "styled-components";
import {
  columnsDefaultData,
  cardsDefaultData,
  commentsDefaultData,
} from "utils/mock";
import { v4 as uuidv4 } from "uuid";

interface BoardProps {
  authorName: string;
}

export const Board: FC<BoardProps> = ({ authorName }) => {
  const [columnsData, setColumnsData] = useLocalStorage(
    "Columns",
    columnsDefaultData
  );
  const [cardsData, setCardsData] = useLocalStorage("Cards", cardsDefaultData);
  const [commentsData, setCommentsData] = useLocalStorage(
    "Comments",
    commentsDefaultData
  );

  const handleAddCard = (value: string, columnId: string) => {
    const id = uuidv4();
    const stateCardsCopy = Object.assign({}, cardsData);

    const newCard = {
      id: id,
      text: value,
      description: "",
      columnId: columnId,
    };
    stateCardsCopy[id] = newCard;
    setCardsData(stateCardsCopy);
  };

  const handelDeleteCard = (cardId: string) => {
    const stateCardsCopy = Object.assign({}, cardsData);
    delete stateCardsCopy[cardId];
    setCardsData(stateCardsCopy);
  };

  const handleAddComment = (cardId: string, commentText: string) => {
    const id = uuidv4();
    const stateCommentsCopy = Object.assign({}, commentsData);
    const newComment = {
      id: id,
      cardId: cardId,
      commentText: commentText,
    };

    stateCommentsCopy[id] = newComment;
    setCommentsData(stateCommentsCopy);
  };

  const handelDeleteComment = (idCommet: string) => {
    const stateCommentsCopy = Object.assign({}, commentsData);
    delete stateCommentsCopy[idCommet];
    setCommentsData(stateCommentsCopy);
  };

  const handleAddDescription = (description: string, cardId: string) => {
    const stateCardsCopy = Object.assign({}, cardsData);
    stateCardsCopy[cardId].description = description;
    setCardsData(stateCardsCopy);
  };

  const handleEditComment = (comment: string, commentId: string) => {
    const stateCommentsCopy = Object.assign({}, commentsData);
    stateCommentsCopy[commentId].commentText = comment;
    setCommentsData(stateCommentsCopy);
  };

  const handleEditCardText = (cardId: string, text: string) => {
    const stateCardsCopy = Object.assign({}, cardsData);
    stateCardsCopy[cardId].text = text;
    setCardsData(stateCardsCopy);
  };

  const handleEditColumnName = (columnId: string, columnName: string) => {
    const stateColumnCopy = Object.assign({}, columnsData);
    stateColumnCopy[columnId].textTitle = columnName;
    setColumnsData(stateColumnCopy);
  };

  return (
    <Root>
      {Object.values(columnsData).map((column) => (
        <Column
          authorName={authorName}
          cards={cardsData}
          comments={commentsData}
          key={column.id}
          textTitle={column.textTitle}
          id={column.id}
          addCard={handleAddCard}
          deleteCard={handelDeleteCard}
          addComment={handleAddComment}
          addDescription={handleAddDescription}
          deleteComment={handelDeleteComment}
          editComment={handleEditComment}
          editCardText={handleEditCardText}
          editColumnName={handleEditColumnName}
        />
      ))}
    </Root>
  );
};

const Root = styled.ul`
  display: flex;
  margin-top: 80px;
  align-items: flex-start;
  padding: 0 30px;
`;
