import React, { FC } from "react";

import { Column } from "components";
import styled from "styled-components";
import { columnsDefaultData } from "utils/mock";

export const Board: FC = () => {
  return (
    <Root>
      {columnsDefaultData.map((column) => (
        <Column key={column.id} textTitle={column.textTitle} id={column.id} />
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  padding: 0 30px;
`;
