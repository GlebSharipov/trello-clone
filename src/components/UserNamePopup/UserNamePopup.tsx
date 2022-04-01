import React, { FC, useState } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

import { Input, Button, Modal } from "../UI";

interface UserNamePopupProps {
  onUserNameChange: (name: string) => void;
  isVisible: boolean;
}

export const UserNamePopup: FC<UserNamePopupProps> = ({ onUserNameChange }) => {
  const [name, setName] = useState("");
  const trimmedName = name.trim();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

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
      <StyledButton
        onClick={() => onUserNameChange(trimmedName)}
        text="Send"
        type="submit"
      />
    </Root>
  );
};

const Root = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
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
