import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";
interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  className?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required,
  className,
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      className={className}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  max-width: 250px;
  font-size: 25px;
  border: 1px solid ${COLORS.black};
`;
