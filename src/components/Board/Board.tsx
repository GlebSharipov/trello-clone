import React, { FC } from "react";

import { Column } from "components/Column/Column";
import styled from "styled-components";

export const Board: FC = () => {
  return (
    <Wrapper>
      <Column textTitle="TODO" columnId="1" />
      <Column textTitle="In Progress" columnId="2" />
      <Column textTitle="Testing" columnId="3" />
      <Column textTitle="Done" columnId="4" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  height: 100%;
`;
