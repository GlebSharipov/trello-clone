import React, { FC, useState } from "react";

import { Card } from "components";
import { Button } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { cardsDefaultData } from "utils/mock";
import { v4 as uuidv4 } from "uuid";

import { CrossIcon } from "../icons/CrossIcon";
import { InputTitle } from "./components";

interface ColumnProps {
  textTitle: string;
  id: string;
}

export const Column: FC<ColumnProps> = ({ textTitle, id }) => {
  const [isCardTitleEditable, setIsCardTitleEditable] = useState(false);
  const [cardText, setCardText] = useState("");
  const [cards, setCards] = useState(cardsDefaultData);
  const trimmedText = cardText.trim();

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
    const newCard = { text: trimmedText, id: uuidv4() };
    if (trimmedText) {
      setCards((prevCards) => [...prevCards, newCard]);
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

  return (
    <Root>
      <InputTitle textTitle={textTitle} />
      <CardContainer>
        {cards.map((card) => (
          <Card key={card.id} text={card.text} id={card.id} />
        ))}
      </CardContainer>

      {!isCardTitleEditable ? (
        <AddCardButton onClick={toggleIsInputVisible}>
          + Add a card
        </AddCardButton>
      ) : (
        <Container>
          <InputAddCard
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
  background-color: ${COLORS.white};
  padding-bottom: 50px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
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
