import React, { FC } from "react";

import styled from "styled-components";

import { UserNamePopup, Board } from "./components";

const App: FC = () => {
  return (
    <Root>
      <UserNamePopup />
      <Board />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
`;
export default App;
