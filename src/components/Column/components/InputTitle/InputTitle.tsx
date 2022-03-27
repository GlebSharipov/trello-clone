import React, { FC, useState } from "react";

import { Input } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";

interface InputTitleProps {
  textTitle: string;
}

export const InputTitle: FC<InputTitleProps> = ({ textTitle }) => {
  const [isColumnTitleEditable, setIsColumnTitleEditable] = useState(false);
  const [nameColumn, setNameColumn] = useState(textTitle);

  const handleChangeColumn: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setNameColumn(e.target.value);

  const handleShowInputColumn = () => {
    setIsColumnTitleEditable(true);
  };

  const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNameColumn(e.target.value);
    setIsColumnTitleEditable(false);
    if (nameColumn.length === 0) {
      return setNameColumn(textTitle);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      setIsColumnTitleEditable(false);
    }
  };

  return (
    <Root>
      {isColumnTitleEditable ? (
        <StyledInput
          onKeyDown={keyDownHandler}
          onBlur={handleBlur}
          onChange={handleChangeColumn}
          value={nameColumn}
          type="text"
        />
      ) : (
        <Title onClick={handleShowInputColumn}>{nameColumn}</Title>
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
