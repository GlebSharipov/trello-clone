import React, { FC, useState } from "react";

import { Input } from "components/UI";
import { COLORS } from "constant/colors";
import { updateColumnName } from "store/ducks/columns";
import { useAppDispatch } from "store/store";
import styled from "styled-components";

interface InputTitleProps {
  columnName: string;
  columnId: string;
}

export const InputTitle: FC<InputTitleProps> = ({ columnName, columnId }) => {
  const dispatch = useAppDispatch();
  const [isColumnTitleEditable, setIsColumnTitleEditable] = useState(false);
  const [changeСolumnName, setChangeColumnName] = useState(columnName);
  const trimmedColumnName = changeСolumnName.trim();

  const handleChangeColumn: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setChangeColumnName(e.target.value);

  const handleShowInputColumn = () => {
    setIsColumnTitleEditable(true);
  };

  const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChangeColumnName(e.target.value);
    if (trimmedColumnName) {
      setChangeColumnName(trimmedColumnName);
      dispatch(
        updateColumnName({ id: columnId, columnName: trimmedColumnName })
      );
      setIsColumnTitleEditable(false);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      if (trimmedColumnName) {
        dispatch(
          updateColumnName({ id: columnId, columnName: trimmedColumnName })
        );
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
          value={changeСolumnName}
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
  max-width: 280px;
  word-break: break-all;
  font-size: 18px;
  margin-bottom: 12px;
`;

const StyledInput = styled(Input)`
  border: 2px solid ${COLORS.dark_blue};
  border-radius: 3px;
  margin-bottom: 6px;
`;
