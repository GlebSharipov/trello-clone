import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface ButtonProps {
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: React.MouseEventHandler;
}

export const Button: FC<ButtonProps> = ({
  className,
  type = "button",
  text,
  onClick,
}) => {
  return (
    <Root onClick={onClick} className={className} type={type}>
      {text}
    </Root>
  );
};

const Root = styled.button`
  max-width: 100px;
  cursor: pointer;
  margin-top: 20px;
  padding: 5px 10px;
  &:hover {
    background-color: ${COLORS.green};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.red};
  }
`;
