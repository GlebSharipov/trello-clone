import React, { FC } from "react";

import styled from "styled-components";

interface ButtonProps {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ className }) => {
  return (
    <Root className={className} type="submit">
      Send
    </Root>
  );
};

const Root = styled.button`
  max-width: 100px;
  cursor: pointer;
  margin-top: 20px;
  padding: 5px 10px;
`;
