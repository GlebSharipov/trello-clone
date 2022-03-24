import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

import { CrossIcon } from "../icons/CrossIcon";
interface CardProps {
  text: string;
  id: string;
}

export const Card: FC<CardProps> = ({ text, id }) => {
  return (
    <Root>
      {text}
      <CrossIcon />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 335px;
  background-color: ${COLORS.gray};
  padding: 8px 4px;
  border-radius: 4px;
  margin-bottom: 2px;
  color: ${COLORS.white};
`;
