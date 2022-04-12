import React, { FC, useState } from "react";

import { NameForm } from "components";
import { updateColumnName } from "store/ducks/columns";
import { selectColumnNameById } from "store/ducks/columns";
import { useAppDispatch, useAppSelector } from "store/store";
import styled from "styled-components";

interface InputTitleProps {
  columnName: string;
  columnId: string;
}

export const InputTitle: FC<InputTitleProps> = ({ columnId }) => {
  const dispatch = useAppDispatch();
  const columnName = useAppSelector(selectColumnNameById(columnId));

  const [isColumnTitleEditable, setIsColumnTitleEditable] = useState(false);

  const handleShowInputColumn = () => {
    setIsColumnTitleEditable(true);
  };

  const handleSubmitEditColumn = (value: string) => {
    dispatch(updateColumnName({ id: columnId, columnName: value }));
    setIsColumnTitleEditable(false);
  };

  return (
    <Root>
      {isColumnTitleEditable ? (
        <NameForm
          name="columnName"
          isOnBlur
          defaultValues={columnName}
          onSubmit={handleSubmitEditColumn}
        />
      ) : (
        <ColumnName onClick={handleShowInputColumn}>{columnName}</ColumnName>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
`;

const ColumnName = styled.h2`
  cursor: pointer;
  max-width: 280px;
  word-break: break-all;
  font-size: 18px;
  margin-bottom: 12px;
`;
