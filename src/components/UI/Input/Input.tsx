import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  required,
  className,
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      autoFocus
      className={className}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  max-width: 250px;
  font-size: 25px;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.red};
  }
`;
