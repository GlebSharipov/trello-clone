import React, { FC } from "react";

import styled from "styled-components";

import { UserNamePopup, Board } from "./components";

const App: FC = () => {
  return (
    <Wrapper>
      <UserNamePopup />
      <Board />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`;
export default App;
