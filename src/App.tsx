import React, { FC, useState } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

import { UserNamePopup, Board, Header } from "./components";

const App: FC = () => {
  const [authorName, setAuthorName] = useState("");

  return (
    <Root>
      <Header authorName={authorName} />
      {authorName ? (
        <Board />
      ) : (
        <UserNamePopup
          isVisible={authorName.length === 0}
          onUserNameChange={setAuthorName}
        />
      )}
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
