import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface HeaderProps {
  authorName: string;
}

export const Header: FC<HeaderProps> = ({ authorName }) => {
  return (
    <Root>
      <Title>Trello-Clone</Title>
      {authorName}
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${COLORS.dark_orange};
  padding: 10px 30px;
  font-size: 25px;
  margin-bottom: 10px;
  color: ${COLORS.white};
`;

const Title = styled.h1`
  font-size: 26px;
  color: ${COLORS.white};
`;
