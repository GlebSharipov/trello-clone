import React, { FC, useState } from "react";

import { Form } from "components";
import { Input } from "components/UI";
import { COLORS } from "constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { updateColumnName } from "store/ducks/columns";
import { selectColumnNameById } from "store/ducks/columns";
import { useAppDispatch, useAppSelector } from "store/store";
import styled from "styled-components";

interface InputTitleProps {
  columnName: string;
  columnId: string;
}

interface Title {
  columnName: string;
}

export const InputTitle: FC<InputTitleProps> = ({ columnId }) => {
  const dispatch = useAppDispatch();
  const columnName = useAppSelector(selectColumnNameById(columnId));

  const [isColumnTitleEditable, setIsColumnTitleEditable] = useState(false);

  const handleShowInputColumn = () => {
    setIsColumnTitleEditable(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Title>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Title> = ({ columnName }) => {
    dispatch(updateColumnName({ id: columnId, columnName: columnName }));
    setIsColumnTitleEditable(false);
  };

  return (
    <Root>
      {isColumnTitleEditable ? (
        <Form onBlur={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            {...register("columnName", {
              required: "Field cannot be empty.",
              value: columnName,
              validate: {
                value: (value) => value.trim().length > 0,
              },
            })}
            type="text"
          />
          <Error>
            {errors?.columnName && <p>{errors.columnName.message}</p>}
          </Error>
        </Form>
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

const StyledInput = styled(Input)`
  border: 2px solid ${COLORS.dark_blue};
  border-radius: 3px;
  margin-bottom: 6px;
`;

const Error = styled.div`
  font-size: 14px;
  color: ${COLORS.red};
`;
