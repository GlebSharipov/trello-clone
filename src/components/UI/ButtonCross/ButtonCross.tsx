import React, { FC, SVGProps } from "react";

import { COLORS } from "constant";
import styled from "styled-components";

import { CrossIcon } from "../../icons/CrossIcon";

interface ButtonCrossProps {
  className?: string;
  onClick?: () => void;
  icon?: SVGProps<SVGSVGElement>;
}
export const ButtonCross: FC<ButtonCrossProps> = ({
  className,
  onClick,
  icon: Icon,
}) => {
  return (
    <Root className={className} onClick={onClick}>
      {Icon ? Icon : <StyledCrossIcon />}
    </Root>
  );
};

const Root = styled.button`
  cursor: pointer;
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
`;
