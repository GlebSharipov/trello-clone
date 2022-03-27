import React, { FC, useState } from "react";

import { Input } from "components/UI";
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

  return (
    <Root>
      {isColumnTitleEditable ? (
        <Input
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
  width: 50%;
`;

const Title = styled.h2`
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 10px;
`;
