import React, { FC } from "react";

import { COLORS } from "constant/colors";
import { useAppSelector, RootState } from "store/store";
import styled from "styled-components";

import { UserNamePopup, Board, Header } from "./components";

const App: FC = () => {
  const userName = useAppSelector((state: RootState) => state.user?.userName);

  return (
    <Root>
      <Header userName={userName} />
      {userName ? <Board userName={userName} /> : <UserNamePopup />}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.orange};
  overflow: auto;
`;
export default App;
