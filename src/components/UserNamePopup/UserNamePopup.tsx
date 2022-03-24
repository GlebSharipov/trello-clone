import React, { FC, useState } from "react";

import { Modal } from "components/Modal";
import { COLORS } from "constant/colors";
import styled from "styled-components";

import { Input, Button } from "../UI";

export const UserNamePopup: FC = () => {
  const [name, setName] = useState("");
  const [visble, setVisible] = useState(true);

  const onClose = () => {
    setVisible(false);
  };
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  return visble ? (
    <Modal onClose={onClose}>
      <Input
        required
        value={name}
        onChange={onChange}
        type="text"
        placeholder="Enter your name"
      />
      <StyledButton text="Send" type="submit" />
    </Modal>
  ) : (
    <CloseModal />
  );
};

const StyledButton = styled(Button)`
  background-color: ${COLORS.gray};
`;

const CloseModal = styled(Modal)`
  visibility: hidden;
`;
