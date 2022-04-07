import React, { FC, useState, useEffect } from "react";

import { Column, CardPopup } from "components";
import { useAppSelector } from "store/store";
import { RootState } from "store/store";
import styled from "styled-components";

interface BoardProps {
  authorName: string;
}

export const Board: FC<BoardProps> = ({ authorName }) => {
  const columns = useAppSelector((state: RootState) => state.ColumnReducer);
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
      {columns.map((column) => (
        <Column
          key={column.id}
          textTitle={column.textTitle}
          id={column.id}
          onCardClick={handleCardClick}
        />
      ))}

      {currentCardId && (
        <CardPopup
          authorName={authorName}
          cardId={currentCardId}
          onClose={() => setCurrentCardId("")}
        />
      )}
    </Root>
  );
};

const Root = styled.ul`
  display: flex;
  margin-top: 80px;
  align-items: flex-start;
  padding: 0 30px;
`;
