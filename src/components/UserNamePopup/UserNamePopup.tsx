import React, { FC, useState } from "react";

import { Modal } from "components/Modal";
import { COLORS } from "constant/colors";
import styled from "styled-components";

import { Input, Button } from "../UI";

export const UserNamePopup: FC = () => {
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  const onSendName = () => {
    if (name.length !== 0) {
      setIsActive(false);
    }
  };

  return (
    <Modal isVisible={isActive}>
      <Input
        required
        value={name}
        onChange={onChange}
        type="text"
        placeholder="Enter your name"
      />
      <StyledButton onClick={onSendName} text="Send" type="submit" />
    </Modal>
  );
};

const StyledButton = styled(Button)`
  background-color: ${COLORS.gray};
`;
