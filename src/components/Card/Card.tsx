import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

import { CrossIcon } from "../icons/CrossIcon";

interface CardProps {
  text: string;
  id: string;
  onClick: React.MouseEventHandler;
}

export const Card: FC<CardProps> = ({ text, onClick }) => {
  return (
    <Root onClick={onClick}>
      {text}
      <CrossButton>
        <StyledCrossIcon />
      </CrossButton>
    </Root>
  );
};

const Root = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 335px;
  background-color: ${COLORS.white};
  box-shadow: 0 1px 0 ${COLORS.dark_gray};
  padding: 8px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  word-break: break-all;
  cursor: pointer;
  color: ${COLORS.black};
  &:hover {
    background-color: ${COLORS.gray};
  }
`;

const CrossButton = styled.button`
  margin-left: 5px;
  &:focus {
    transform: translateY(-1px);
  }
`;

const StyledCrossIcon = styled(CrossIcon)`
  fill: ${COLORS.dark_gray};
  &:hover {
    fill: ${COLORS.black};
  }
`;
