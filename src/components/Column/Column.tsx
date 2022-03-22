import React from "react";

import { Card } from "components/Card/Card";
import styled from "styled-components";

interface ColumnProps {
  textTitle: string;
  columnId: string;
}

export const Column = ({ textTitle, columnId }: ColumnProps) => {
  return (
    <Container id={columnId}>
      <Title>{textTitle}</Title>
      <CardConteiner>
        <Card text="Text1" cardIndex={1} />
        <Card text="Text2" cardIndex={2} />
      </CardConteiner>
      <AddCardButton>+ Add a card</AddCardButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  min-height: 200px;
  border: 1px solid black;
  margin-right: 5px;
  padding: 2px 5px;
`;
const Title = styled.h2`
  cursor: pointer;
  font-size: 20px;
`;
const CardConteiner = styled.div`
  width: 340px;
  flex: 1;
`;
const AddCardButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  text-align: start;
  font-size: 16px;
`;
