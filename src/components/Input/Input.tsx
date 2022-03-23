import React from "react";

import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  max-width: 250px;
  max-height: 50px;
  font-size: 25px;
`;
