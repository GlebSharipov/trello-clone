import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  className?: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  required,
  className,
  onChange,
  onBlur,
  onKeyDown,
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      autoFocus
      className={className}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      {...props}
    />
  );
};

const StyledInput = styled.input`
  font-size: 18px;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.blue};
  }
`;
