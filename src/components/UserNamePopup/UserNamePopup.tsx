import React, { FC, useState } from "react";

import { CustomInput } from "components/CustomInput/CustomInput";
import styled from "styled-components";

export const UserNamePopup: FC = () => {
  const [name, setName] = useState("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  return (
    <Form>
      <CustomInput
        value={name}
        onChange={onChange}
        type="text"
        placeholder="Enter your name"
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 250px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
`;
