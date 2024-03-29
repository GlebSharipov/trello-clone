import React, { FC, useState, useEffect } from "react";

import { Column, CardPopup } from "components";
import { useAppSelector, RootState } from "store/store";
import styled from "styled-components";

interface BoardProps {
  userName: string;
}

export const Board: FC<BoardProps> = ({ userName }) => {
  const columns = useAppSelector((state: RootState) => state.columns);
  const [currentCardId, setCurrentCardId] = useState("");

  const handleCardClick = (id: string) => {
    if (id) setCurrentCardId(id);
  };

  const handleKeyDownEsc = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        setCurrentCardId("");
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownEsc);
    return () => document.removeEventListener("keydown", handleKeyDownEsc);
  });

  return (
    <Root>
      <Container>
        {Object.values(columns).map((column) => (
          <Column
            key={column.id}
            columnName={column.columnName}
            id={column.id}
            onCardClick={handleCardClick}
          />
        ))}
      </Container>

      {currentCardId && (
        <CardPopup
          userName={userName}
          cardId={currentCardId}
          onClose={() => setCurrentCardId("")}
        />
      )}
    </Root>
  );
};

const Root = styled.main`
  margin-top: 80px;
  padding: 0 30px;
`;

const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
