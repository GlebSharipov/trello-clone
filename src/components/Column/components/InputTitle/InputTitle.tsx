import React, { FC, useState } from "react";

import { Input } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";

interface InputTitleProps {
  textTitle: string;
  columnId: string;
  editColumnName: (columnId: string, columnName: string) => void;
}

export const InputTitle: FC<InputTitleProps> = ({
  textTitle,
  columnId,
  editColumnName,
}) => {
  const [isColumnTitleEditable, setIsColumnTitleEditable] = useState(false);
  const [columnName, setColumnName] = useState(textTitle);
  const trimmedColumnName = columnName.trim();

  const handleChangeColumn: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setColumnName(e.target.value);

  const handleShowInputColumn = () => {
    setIsColumnTitleEditable(true);
  };

  const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setColumnName(e.target.value);
    if (trimmedColumnName) {
      setColumnName(trimmedColumnName);
      editColumnName(columnId, columnName);
      setIsColumnTitleEditable(false);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      if (trimmedColumnName) {
        editColumnName(columnId, columnName);
        setIsColumnTitleEditable(false);
      }
    }
  };

  return (
    <Root>
      {isColumnTitleEditable ? (
        <StyledInput
          onKeyDown={keyDownHandler}
          onBlur={handleBlur}
          onChange={handleChangeColumn}
          value={columnName}
          type="text"
        />
      ) : (
        <Title onClick={handleShowInputColumn}>{columnName}</Title>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
`;

const Title = styled.h2`
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 12px;
`;

const StyledInput = styled(Input)`
  border: 2px solid ${COLORS.dark_blue};
  border-radius: 3px;
  margin-bottom: 6px;
`;
