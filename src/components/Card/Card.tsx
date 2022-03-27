import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

import { CrossIcon } from "../icons/CrossIcon";

interface CardProps {
  text: string;
  id: string;
}

export const Card: FC<CardProps> = ({ text }) => {
  return (
    <Root>
      {text}
      <StyledCrossIcon />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 335px;
  background-color: ${COLORS.white};
  padding: 8px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  word-break: break-all;
  color: ${COLORS.black};
`;

const StyledCrossIcon = styled(CrossIcon)`
  cursor: pointer;
`;
