import React, { FC, useState } from "react";

import { Card } from "components";
import { Input, Button } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { cardsDefaultData } from "utils/mock";

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

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCardText(e.target.value);

  const handleVisibleInput = () => {
    setIsCardTitleEditable(true);
  };

  const handleNoVisibleInput = () => {
    setIsCardTitleEditable(false);
  };

  const handleAddCard = () => {
    const newCard = { text: cardText, id: `${cards.length + 1}` };
    if (cardText.length !== 0) {
      setCards([...cards, newCard]);
      setCardText("");
    }
  };

  return (
    <Root>
      <InputTitle id={id} textTitle={textTitle} />
      <CardContainer>
        {cards.map((card) => (
          <Card key={card.id} text={card.text} id={card.id} />
        ))}
      </CardContainer>

      {!isCardTitleEditable ? (
        <AddCardButton onClick={handleVisibleInput}>+ Add a card</AddCardButton>
      ) : (
        <Wrapper>
          <InputAddCard
            value={cardText}
            type="text"
            onChange={handleChangeText}
          />
          <ButtonConteiner>
            <StyledButton
              type="submit"
              text="Add card"
              onClick={handleAddCard}
            />
            <StyledCrossIcon onClick={handleNoVisibleInput} />
          </ButtonConteiner>
        </Wrapper>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
  border: 1px solid ${COLORS.black};
  margin-right: 5px;
  padding: 2px 5px;
`;

const CardContainer = styled.div`
  width: 340px;
  flex: 1;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const AddCardButton = styled.button`
  border: none;
  background-color: ${COLORS.white};
  cursor: pointer;
  text-align: start;
  font-size: 16px;
  margin-top: 10px;
`;

const ButtonConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const InputAddCard = styled(Input)`
  font-size: 16px;
  width: 100%;
  padding-bottom: 50px;
`;

const StyledButton = styled(Button)`
  color: ${COLORS.white};
  background-color: ${COLORS.gray};
  margin: 0;
`;

const StyledCrossIcon = styled(CrossIcon)`
  cursor: pointer;
  width: 30px;
`;
