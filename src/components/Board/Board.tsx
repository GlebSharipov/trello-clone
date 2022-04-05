import React, { FC, useState, useEffect } from "react";

import { Column, CardPopup } from "components";
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
    "columns",
    columnsDefaultData
  );
  const [cardsData, setCardsData] = useLocalStorage("cards", cardsDefaultData);
  const [commentsData, setCommentsData] = useLocalStorage(
    "comments",
    commentsDefaultData
  );

  const [currentCardId, setCurrentCardId] = useState("");

  const card = cardsData[currentCardId];
  const columnId = card?.columnId;
  const column = columnsData[columnId];
  const columnName = column?.textTitle;

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
    setCurrentCardId("");
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

  const handleCardClick = (id: string) => {
    if (id) setCurrentCardId(id);
  };

  const handleKeyDownEsc = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        setCurrentCardId("");
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownEsc);
    return () => document.removeEventListener("keydown", handleKeyDownEsc);
  });

  return (
    <Root>
      {Object.values(columnsData).map((column) => (
        <Column
          cards={cardsData}
          comments={commentsData}
          key={column.id}
          textTitle={column.textTitle}
          id={column.id}
          onAddCard={handleAddCard}
          onDeleteCard={handelDeleteCard}
          onEditColumnName={handleEditColumnName}
          onCardClick={handleCardClick}
        />
      ))}

      {currentCardId && (
        <CardPopup
          columnName={columnName}
          authorName={authorName}
          comments={commentsData}
          card={card}
          onClose={() => setCurrentCardId("")}
          onAddComment={handleAddComment}
          onDeleteComment={handelDeleteComment}
          onAddDescription={handleAddDescription}
          onEditComment={handleEditComment}
          onEditCardText={handleEditCardText}
        />
      )}
    </Root>
  );
};

const Root = styled.ul`
  display: flex;
  margin-top: 80px;
  align-items: flex-start;
  padding: 0 30px;
`;
