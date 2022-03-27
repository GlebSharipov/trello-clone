import React, { FC, useState } from "react";

import { Card } from "components";
import { Input, Button } from "components/UI";
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

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCardText(e.target.value);

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
            value={cardText}
            type="text"
            onChange={handleChangeText}
          />
          <ButtonContainer>
            <StyledButton
              type="submit"
              text="Add card"
              onClick={handleAddCard}
            />
            <StyledCrossIcon onClick={toggleIsInputVisible} />
          </ButtonContainer>
        </Container>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLORS.gray};
  max-width: 350px;
  border-radius: 5px;
  margin-right: 5px;
  padding: 2px 5px;
`;

const CardContainer = styled.div`
  width: 300px;
  flex: 1;
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
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;

  align-items: center;
  margin-top: 10px;
`;

const InputAddCard = styled(Input)`
  font-size: 16px;
  width: 100%;
  padding-bottom: 50px;
  word-break: break-all;
`;

const StyledButton = styled(Button)`
  color: ${COLORS.white};
  background-color: ${COLORS.blue};
  margin: 0;
  &:hover {
    background-color: ${COLORS.dark_blue};
  }
`;

const StyledCrossIcon = styled(CrossIcon)`
  cursor: pointer;
  width: 30px;
`;
