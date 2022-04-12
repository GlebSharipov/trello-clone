import React, { FC, useState, useMemo } from "react";

import { Card, TextForm } from "components";
import { COLORS } from "constant/colors";
import { addNewCard } from "store/ducks/cards";
import { useAppSelector, useAppDispatch, RootState } from "store/store";
import styled from "styled-components";

import { InputTitle } from "./components";

interface ColumnProps {
  columnName: string;
  id: string;
  onCardClick: (id: string) => void;
}

export const Column: FC<ColumnProps> = ({ columnName, id, onCardClick }) => {
  const cards = useAppSelector((state: RootState) => state.cards);
  const dispatch = useAppDispatch();

  const [isCardTextEditable, setIsCardTextEditable] = useState(false);

  const filteredCards = useMemo(
    () => cards.filter((card) => card.columnId === id),
    [cards, id]
  );

  const handleSubmitNewCard = (value: string) => {
    if (value.trim()) {
      dispatch(addNewCard({ columnId: id, cardText: value }));
      setIsCardTextEditable(false);
    }
    setIsCardTextEditable(false);
  };

  const toggleIsInputVisible = () => {
    setIsCardTextEditable(true);
  };

  return (
    <Root>
      <InputTitle columnId={id} columnName={columnName} />
      <CardContainer>
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            text={card.text}
            id={card.id}
            onCardClick={() => onCardClick(card.id)}
          />
        ))}
      </CardContainer>

      {isCardTextEditable ? (
        <Container>
          <TextForm
            onSubmit={handleSubmitNewCard}
            isOnBlur
            name="addNewCard"
            defaultValues=""
          />
        </Container>
      ) : (
        <AddCardButton onClick={toggleIsInputVisible}>
          + Add a card
        </AddCardButton>
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
