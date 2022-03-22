import React from "react";

import styled from "styled-components";

import CrossImg from "./image/cross.png";

interface CardProps {
  text: string;
  cardIndex: number;
}

export const Card = ({ text, cardIndex }: CardProps) => {
  return (
    <CardContainer>
      {text}
      <RemoveCard />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 335px;
  min-height: 40px;
  background-color: gray;
  padding: 0 4px;
  border-radius: 4px;
  margin-bottom: 2px;
  color: white;
`;

const RemoveCard = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

RemoveCard.defaultProps = {
  src: CrossImg,
};
