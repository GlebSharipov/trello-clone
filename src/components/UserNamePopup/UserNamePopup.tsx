import React, { FC, useState } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

import { Input, Button, Modal } from "../UI";

interface UserNamePopupProps {
  onUserNameChange: (name: string) => void;
  isVisible: boolean;
}

export const UserNamePopup: FC<UserNamePopupProps> = ({
  onUserNameChange,
  isVisible,
}) => {
  const [name, setName] = useState("");
  const trimmedName = name.trim();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  return (
    <Modal isVisible={isVisible}>
      <Input
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
    </Modal>
  );
};

const StyledButton = styled(Button)`
  background-color: ${COLORS.gray};
`;
