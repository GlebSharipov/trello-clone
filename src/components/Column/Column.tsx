import React, { FC, useState, useMemo } from "react";

import { Card, Form } from "components";
import { Button, ButtonCross } from "components/UI";
import { COLORS } from "constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { addNewCard } from "store/ducks/cards";
import { useAppSelector, useAppDispatch, RootState } from "store/store";
import styled from "styled-components";

import { InputTitle } from "./components";

interface ColumnProps {
  columnName: string;
  id: string;
  onCardClick: (id: string) => void;
}

interface CardText {
  cardText: string;
}

export const Column: FC<ColumnProps> = ({ columnName, id, onCardClick }) => {
  const cards = useAppSelector((state: RootState) => state.cards);
  const dispatch = useAppDispatch();

  const [isCardTitleEditable, setIsCardTitleEditable] = useState(false);

  const filteredCards = useMemo(
    () => cards.filter((card) => card.columnId === id),
    [cards, id]
  );

  const { register, handleSubmit, reset } = useForm<CardText>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<CardText> = ({ cardText }) => {
    if (cardText.trim()) {
      dispatch(addNewCard({ columnId: id, cardText: cardText }));
      setIsCardTitleEditable(false);
      reset();
    }
    setIsCardTitleEditable(false);
  };

  const toggleIsInputVisible = () => {
    if (isCardTitleEditable) {
      setIsCardTitleEditable(false);
      reset({ cardText: "" });
    } else {
      setIsCardTitleEditable(true);
    }
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

      {isCardTitleEditable ? (
        <Container>
          <Form
            onBlur={handleSubmit(onSubmit)}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputAddCard
              {...register("cardText", {
                value: "",
              })}
              autoFocus
            />
            <ButtonContainer>
              <StyledButton type="submit" text="Add card" />
              <ButtonCross onClick={toggleIsInputVisible} />
            </ButtonContainer>
          </Form>
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const InputAddCard = styled(TextareaAutosize)`
  font-size: 16px;
  width: 100%;
  padding-bottom: 30px;
  background-color: ${COLORS.white};
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  box-shadow: 0 1px 0 ${COLORS.dark_gray};
`;

const StyledButton = styled(Button)`
  color: ${COLORS.white};
  background-color: ${COLORS.blue};
  margin: 0;
  margin-right: 10px;
  &:hover {
    background-color: ${COLORS.dark_blue};
  }
`;
