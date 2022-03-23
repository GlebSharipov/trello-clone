import React, { FC } from "react";

import { Column } from "components/Column/Column";
import { columnState } from "mock";
import styled from "styled-components";

export const Board: FC = () => {
  return (
    <Root>
      {columnState.map((obj, index) => (
        <Column key={index} textTitle={obj.textTitle} id={obj.id} />
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;
