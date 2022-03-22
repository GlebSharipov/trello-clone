import React from "react";

import styled from "styled-components";

interface CustomInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CustomInput = ({
  type,
  placeholder,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const Input = styled.input`
  width: 250px;
  height: 50px;
  font-size: 25px;
`;
