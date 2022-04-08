import React, { FC, useState } from "react";

import { COLORS } from "constant/colors";
import { addUserName } from "store/ducks/user";
import { useAppSelector, useAppDispatch, RootState } from "store/store";
import styled from "styled-components";

import { Input, Button, Modal } from "../UI";

interface UserNamePopupProps {
  onUpdateUser: (name: string) => void;
  isVisible: boolean;
}

export const UserNamePopup: FC<UserNamePopupProps> = ({ onUpdateUser }) => {
  const userName = useAppSelector((state: RootState) => state.user.userName);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(userName);
  const trimmedName = name.trim();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.currentTarget.value);
  };

  const handleAddName = () => {
    if (trimmedName) {
      onUpdateUser(trimmedName);
      dispatch(addUserName(trimmedName));
    }
  };

  return (
    <Root>
      <StyledInput
        maxLength={20}
        required
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Enter your name"
      />
      <StyledButton onClick={handleAddName} text="Send" type="submit" />
    </Root>
  );
};

const Root = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  min-height: 25vh;
  overflow: auto;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 40px;
`;

const StyledButton = styled(Button)`
  background-color: ${COLORS.gray};
  border-radius: 5px;
  &:hover {
    background-color: ${COLORS.dark_orange};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.orange};
  }
`;

const StyledInput = styled(Input)`
  max-lines: 20;
  font-size: 25px;
`;
