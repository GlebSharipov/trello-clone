import React, { FC, useMemo } from "react";

import { ButtonCross } from "components/UI";
import { COLORS } from "constant/colors";
import { deleteCard } from "store/ducks/cards";
import { useAppDispatch, useAppSelector, RootState } from "store/store";
import styled from "styled-components";

import { CommentIcon } from "../icons";

interface CardProps {
  text: string;
  id: string;
  onCardClick: () => void;
}

export const Card: FC<CardProps> = ({ text, id, onCardClick }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state: RootState) => state.comments);

  const handleDeleteCard = () => {
    dispatch(deleteCard({ id }));
  };

  const countComment = useMemo(
    () => Object.values(comments).filter((comment) => comment.cardId === id),
    [comments, id]
  );

  return (
    <>
      <Root>
        <CardTextContainer onClick={onCardClick}>{text}</CardTextContainer>
        {countComment.length !== 0 && (
          <CountContainer>
            {countComment.length}
            <CommentIcon />
          </CountContainer>
        )}

        <ButtonCross onClick={handleDeleteCard} />
      </Root>
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

const CardTextContainer = styled.div`
  flex: 1;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
