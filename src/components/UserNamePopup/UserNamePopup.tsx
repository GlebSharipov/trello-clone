import React, { FC, useState } from "react";

import { Modal } from "components/Modal";
import { colors } from "constant/colors";
import styled from "styled-components";

import { Input, Button } from "../UI";

export const UserNamePopup: FC = () => {
  const [name, setName] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  return (
    <Modal>
      <Input
        required
        value={name}
        onChange={onChange}
        type="text"
        placeholder="Enter your name"
      />
      <StyledButton />
    </Modal>
  );
};

const StyledButton = styled(Button)`
  background-color: ${colors.gray};
`;
