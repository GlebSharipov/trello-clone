import React from "react";

import styled from "styled-components";

import CrossImg from "./image/cross.png";

interface CardProps {
  text: string;
  cardIndex: number;
}

export const Card = ({ text, cardIndex }: CardProps) => {
  return (
    <Root>
      {text}
      <RemoveCard />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 335px;
  background-color: gray;
  padding: 8px 4px;
  border-radius: 4px;
  margin-bottom: 2px;
  color: white;
`;

const RemoveCard = styled.img`
  max-width: 20px;
  max-height: 20px;
  cursor: pointer;
`;

RemoveCard.defaultProps = {
  src: CrossImg,
};
