import React, { FC } from "react";

import styled from "styled-components";

export const Button: FC = () => {
  return <StyledButton type="submit">Send</StyledButton>;
};

const StyledButton = styled.button`
  max-width: 100px;
  max-height: 50px;
  cursor: pointer;
  margin-top: 20px;
  padding: 5px 10px;
`;
