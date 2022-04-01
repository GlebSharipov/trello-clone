import React, { FC, useState, useEffect, useMemo } from "react";

import { CardPopup } from "components";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { CommentType } from "types";

import { CrossIcon, CommentIcon } from "../icons";

interface CardProps {
  columnName: string;
  text: string;
  id: string;
  columnId: string;
  description: string;
  authorName: string;
  comments: Record<string, CommentType>;
  deleteCard: (cardId: string) => void;
  addComment: (cardId: string, commentText: string) => void;
  deleteComment: (idCommet: string) => void;
  addDescription: (description: string, key: string) => void;
  editComment: (comment: string, commentId: string) => void;
  editCardText: (cardId: string, text: string) => void;
}

export const Card: FC<CardProps> = ({
  text,
  id,
  authorName,
  columnName,
  comments,
  description,
  addComment,
  deleteCard,
  deleteComment,
  editComment,
  addDescription,
  editCardText,
}) => {
  const [isVisibleCardPopup, setIsVisibleCardPopup] = useState(false);

  const handleKeyDownEsc = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        setIsVisibleCardPopup(false);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownEsc);
    return () => document.removeEventListener("keydown", handleKeyDownEsc);
  });

  const toggleIsVisiblePopup = () => {
    if (!isVisibleCardPopup) {
      setIsVisibleCardPopup(true);
    } else {
      setIsVisibleCardPopup(false);
    }
  };

  const handleDeleteCard = () => {
    deleteCard(id);
  };

  const countComment = useMemo(
    () => Object.values(comments).filter((comment) => comment.cardId === id),
    [comments, id]
  );

  return (
    <>
      <Root onClick={toggleIsVisiblePopup}>
        <CardTextContainer> {text}</CardTextContainer>
        {countComment.length !== 0 && (
          <CountContainer>
            {countComment.length}
            <CommentIcon />
          </CountContainer>
        )}

        <CrossButton onClick={handleDeleteCard}>
          <StyledCrossIcon />
        </CrossButton>
      </Root>

      <CardPopup
        description={description}
        cardId={id}
        textCard={text}
        authorName={authorName}
        columnName={columnName}
        comments={comments}
        isVisible={isVisibleCardPopup}
        onClose={toggleIsVisiblePopup}
        addComment={addComment}
        deleteComment={deleteComment}
        addDescription={addDescription}
        editComment={editComment}
        editCardText={editCardText}
      />
    </>
  );
};

const Root = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 335px;
  background-color: ${COLORS.white};
  box-shadow: 0 1px 0 ${COLORS.dark_gray};
  padding: 8px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  word-break: break-all;
  cursor: pointer;
  color: ${COLORS.black};
  &:hover {
    background-color: ${COLORS.gray};
  }
`;

const CrossButton = styled.button`
  margin-left: 5px;
  &:focus {
    transform: translateY(-1px);
  }
`;

const CardTextContainer = styled.div`
  flex: 1;
`;

const StyledCrossIcon = styled(CrossIcon)`
  fill: ${COLORS.dark_gray};
  &:hover {
    fill: ${COLORS.black};
  }
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
