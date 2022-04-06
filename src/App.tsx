import React, { FC } from "react";

import { COLORS } from "constant/colors";
import { useLocalStorage } from "hooks";
import styled from "styled-components";

import { UserNamePopup, Board, Header } from "./components";

const App: FC = () => {
  const [authorName, setAuthorName] = useLocalStorage("AuthorName", "");

  const handleUpdateUser = (name: string) => {
    setAuthorName(name);
  };

  return (
    <Root>
      <Header authorName={authorName} />
      {authorName ? (
        <Board authorName={authorName} />
      ) : (
        <UserNamePopup
          isVisible={authorName.length === 0}
          onUpdateUser={handleUpdateUser}
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
