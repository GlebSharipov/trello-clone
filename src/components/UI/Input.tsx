import React, { FC } from "react";

import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      required={required}
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
