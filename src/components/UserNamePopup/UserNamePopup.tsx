import React, { FC, useState } from "react";

import styled from "styled-components";

import { Input, Button } from "../UI";

export const UserNamePopup: FC = () => {
  const [name, setName] = useState("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  return (
    <Root>
      <Input
        value={name}
        onChange={onChange}
        type="text"
        placeholder="Enter your name"
      />
      <Button />
    </Root>
  );
};

const Root = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  max-height: 250px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px;
`;
