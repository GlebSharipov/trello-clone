import React, { FC } from "react";

import styled from "styled-components";

interface ButtonProps {
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  text: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  type = "button",
  text,
}) => {
  return (
    <Root className={className} type={type}>
      {text}
    </Root>
  );
};

const Root = styled.button`
  max-width: 100px;
  cursor: pointer;
  margin-top: 20px;
  padding: 5px 10px;
`;
