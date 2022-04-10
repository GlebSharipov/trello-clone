import React, { FC } from "react";

import { COLORS } from "constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { addUserName } from "store/ducks/user";
import { useAppDispatch } from "store/store";
import styled from "styled-components";

import { Button, Input, Modal } from "../UI";

interface User {
  name: string;
}

export const UserNamePopup: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = ({ name }) => {
    dispatch(addUserName(name));
  };

  return (
    <Modal>
      <Root onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register("name", {
            required: "The field is required ",
            maxLength: {
              value: 15,
              message: "Maximum 15 characters",
            },
            validate: {
              value: (value) => value.trim().length > 0,
            },
          })}
          placeholder="Enter your name"
          type="text"
        />
        <Error>{errors?.name && <p>{errors.name.message}</p>}</Error>
        <StyledButton text="Send" type="submit" />
      </Root>
    </Modal>
  );
};

const Root = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  min-height: 25vh;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 50px 40px;
`;

const Error = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: ${COLORS.red};
`;

const StyledButton = styled(Button)`
  background-color: ${COLORS.gray};
  border-radius: 5px;
  margin-top: auto;
  margin-bottom: 10px;
  &:hover {
    background-color: ${COLORS.dark_orange};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.orange};
  }
`;

const StyledInput = styled(Input)`
  font-size: 25px;
  margin-top: 20px;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.blue};
  }
`;
