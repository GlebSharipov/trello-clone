import React, { FC } from "react";

import { Card } from "components/Card/Card";
import styled from "styled-components";

interface ColumnProps {
  textTitle: string;
  columnId: string;
}

export const Column: FC<ColumnProps> = ({ textTitle, columnId }) => {
  return (
    <Root id={columnId}>
      <Title>{textTitle}</Title>
      <CardContainer>
        <Card text="Text1" cardIndex={1} />
        <Card text="Text2" cardIndex={2} />
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
  border: 1px solid black;
  margin-right: 5px;
  padding: 2px 5px;
  box-sizing: border-box;
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
  background-color: white;
  cursor: pointer;
  text-align: start;
  font-size: 16px;
  margin-top: 10px;
`;
