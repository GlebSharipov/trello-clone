import React, { FC } from "react";

import { COLORS } from "constant";
import styled from "styled-components";

import { CrossIcon } from "../../icons/CrossIcon";

interface ButtonCrossProps {
  className?: string;
  onClick?: () => void;
}
export const ButtonCross: FC<ButtonCrossProps> = ({ className, onClick }) => {
  return (
    <Root className={className} onClick={onClick}>
      <StyledCrossIcon />
    </Root>
  );
};

const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  &:hover {
    background-color: ${COLORS.lighte_gray};
  }
`;

const StyledCrossIcon = styled(CrossIcon)`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
