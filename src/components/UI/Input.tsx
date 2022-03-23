import React, { FC } from "react";

import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
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
