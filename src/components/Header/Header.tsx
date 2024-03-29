import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface HeaderProps {
  userName: string;
}

export const Header: FC<HeaderProps> = ({ userName }) => {
  return (
    <Root>
      <Title>Trello-Clone</Title>
      {userName}
    </Root>
  );
};

const Root = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${COLORS.dark_orange};
  padding: 10px 30px;
  font-size: 25px;
  color: ${COLORS.white};
`;

const Title = styled.h1`
  font-size: 26px;
  color: ${COLORS.white};
`;
