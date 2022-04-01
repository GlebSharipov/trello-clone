import React, { FC, useState, useMemo } from "react";

import { Card } from "components";
import { Button } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { CardType, CommentType } from "types";

import { CrossIcon } from "../icons/CrossIcon";
import { InputTitle } from "./components";

interface ColumnProps {
  textTitle: string;
  authorName: string;
  id: string;
  cards: Record<string, CardType>;
  comments: Record<string, CommentType>;
  addCard: (value: string, columnId: string) => void;
  deleteCard: (cardId: string) => void;
  addComment: (cardId: string, commentText: string) => void;
  deleteComment: (idCommet: string) => void;
  addDescription: (description: string, key: string) => void;
  editComment: (comment: string, commentId: string) => void;
  editCardText: (cardId: string, text: string) => void;
  editColumnName: (columnId: string, columnName: string) => void;
}

export const Column: FC<ColumnProps> = ({
  textTitle,
  id,
  comments,
  cards,
  authorName,
  addCard,
  deleteCard,
  addComment,
  deleteComment,
  addDescription,
  editComment,
  editCardText,
  editColumnName,
}) => {
  const [isCardTitleEditable, setIsCardTitleEditable] = useState(false);
  const [cardText, setCardText] = useState("");
  const trimmedText = cardText.trim();

  const filteredCards = useMemo(
    () => Object.values(cards).filter((card) => card.columnId === id),
    [cards, id]
  );

  const handleChangeText: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setCardText(e.target.value);
  };

  const toggleIsInputVisible = () => {
    if (!isCardTitleEditable) {
      setIsCardTitleEditable(true);
    } else {
      setIsCardTitleEditable(false);
    }
  };

  const handleAddCard = () => {
    if (trimmedText) {
      addCard(trimmedText, id);
      setCardText("");
      setIsCardTitleEditable(false);
    }
  };

  const handleBlur: React.ChangeEventHandler<HTMLTextAreaElement> = () => {
    if (trimmedText) {
      handleAddCard();
    }
    setIsCardTitleEditable(false);
  };

  const handeleKeyDownEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      handleAddCard();
    }
  };

  return (
    <Root>
      <InputTitle
        columnId={id}
        editColumnName={editColumnName}
        textTitle={textTitle}
      />
      <CardContainer>
        {filteredCards.map((card) => (
          <Card
            columnName={textTitle}
            addComment={addComment}
            authorName={authorName}
            comments={comments}
            key={card.id}
            text={card.text}
            id={card.id}
            columnId={id}
            description={card.description}
            deleteCard={deleteCard}
            deleteComment={deleteComment}
            addDescription={addDescription}
            editComment={editComment}
            editCardText={editCardText}
          />
        ))}
      </CardContainer>

      {!isCardTitleEditable ? (
        <AddCardButton onClick={toggleIsInputVisible}>
          + Add a card
        </AddCardButton>
      ) : (
        <Container>
          <InputAddCard
            onKeyDown={handeleKeyDownEnter}
            autoFocus
            onBlur={handleBlur}
            value={cardText}
            onChange={handleChangeText}
          />
          <ButtonContainer>
            <StyledButton
              type="submit"
              text="Add card"
              onClick={handleAddCard}
            />
            <ButtonCross onClick={toggleIsInputVisible}>
              <StyledCrossIcon />
            </ButtonCross>
          </ButtonContainer>
        </Container>
      )}
    </Root>
  );
};

const Root = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.gray};
  max-width: 350px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 2px 5px;
`;

const CardContainer = styled.ul`
  width: 300px;
`;

const Container = styled.div`
  width: 100%;
`;

const AddCardButton = styled.button`
  border: none;
  background-color: ${COLORS.gray};
  color: ${COLORS.dark_gray};
  cursor: pointer;
  text-align: start;
  font-size: 18px;
  margin-top: 10px;
  border-radius: 4px;
  padding: 5px;
  &:hover {
    background-color: ${COLORS.lighte_gray};
    color: ${COLORS.black};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const InputAddCard = styled.textarea`
  font-size: 16px;
  width: 100%;
  min-height: 50px;
  background-color: ${COLORS.white};
  overflow: hidden;
  overflow-wrap: break-word;
  box-shadow: 0 1px 0 ${COLORS.dark_gray};
`;

const StyledButton = styled(Button)`
  color: ${COLORS.white};
  background-color: ${COLORS.blue};
  margin: 0;
  &:hover {
    background-color: ${COLORS.dark_blue};
  }
`;

const ButtonCross = styled.button`
  width: 30px;
  margin-left: 10px;
  &:focus {
    transform: translateY(-1px);
  }
`;

const StyledCrossIcon = styled(CrossIcon)`
  cursor: pointer;
  width: 30px;
  fill: ${COLORS.dark_gray};
  &:hover {
    fill: ${COLORS.black};
  }
`;
