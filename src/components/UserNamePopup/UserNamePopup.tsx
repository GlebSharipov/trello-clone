import React, { FC, useState } from "react";

import { Modal } from "components/Modal";
import { COLORS } from "constant/colors";
import styled from "styled-components";

import { Input, Button } from "../UI";

export const UserNamePopup: FC = () => {
  const [name, setName] = useState("");
  const [isVisiblelUserPopup, setIsVisiblelUserPopup] = useState(true);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  const handleSendName = () => {
    if (name.trim().length !== 0) {
      setIsVisiblelUserPopup(false);
    }
  };

  return (
    <Modal isCloseButtonShowed={false} isVisible={isVisiblelUserPopup}>
      <Input
        required
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Enter your name"
      />
      <StyledButton onClick={handleSendName} text="Send" type="submit" />
    </Modal>
  );
};

const StyledButton = styled(Button)`
  background-color: ${COLORS.gray};
`;
