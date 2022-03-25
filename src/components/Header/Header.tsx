import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.header`
  width: 100%;
  background-color: ${COLORS.gray};
  padding: 10px 30px;
  font-size: 25px;
  margin-bottom: 10px;
  color: ${COLORS.white};
`;
