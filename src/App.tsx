import React, { FC, useState } from "react";

import styled from "styled-components";

import { UserNamePopup, Board } from "./components";

const App: FC = () => {
  const [authorName, setAuthorName] = useState("");

  return (
    <Root>
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
  height: 100%;
`;
export default App;
