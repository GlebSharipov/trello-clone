import React, { FC } from "react";

import { Card } from "components/Card/Card";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { cardsDefaultData } from "utils/mock";

interface ColumnProps {
  textTitle: string;
  id: string;
}

export const Column: FC<ColumnProps> = ({ textTitle, id }) => {
  return (
    <Root id={id}>
      <Title>{textTitle}</Title>
      <CardContainer>
        {cardsDefaultData.map((cards) => (
          <Card key={cards.id + cards.id} text={cards.text} id={cards.id} />
        ))}
      </CardContainer>
      <AddCardButton>+ Add a card</AddCardButton>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${COLORS.black};
  margin-right: 5px;
  padding: 2px 5px;
`;

const Title = styled.h2`
  cursor: pointer;
  font-size: 20px;
`;

const CardContainer = styled.div`
  max-width: 340px;
  flex: 1;
`;

const AddCardButton = styled.button`
  border: none;
  background-color: ${COLORS.white};
  cursor: pointer;
  text-align: start;
  font-size: 16px;
  margin-top: 10px;
`;
