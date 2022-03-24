import React, { FC } from "react";

import { Card } from "components/Card/Card";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { cardsDefaultData } from "utils/mock";

interface ColumnProps {
  textTitle: string;
  id: string;
}

export const Column: FC<ColumnProps> = ({ textTitle }) => {
  return (
    <Root>
      <Title>{textTitle}</Title>
      <CardContainer>
        {cardsDefaultData.map((card) => (
          <Card key={card.id} text={card.text} id={card.id} />
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
  max-width: 350px;
  border: 1px solid ${COLORS.black};
  margin-right: 5px;
  padding: 2px 5px;
`;

const Title = styled.h2`
  cursor: pointer;
  font-size: 20px;
`;

const CardContainer = styled.div`
  width: 340px;
`;

const AddCardButton = styled.button`
  border: none;
  background-color: ${COLORS.white};
  cursor: pointer;
  text-align: start;
  font-size: 16px;
  margin-top: 10px;
`;
