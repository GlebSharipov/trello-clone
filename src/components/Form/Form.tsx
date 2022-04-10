import React, { FC } from "react";

import styled from "styled-components";

interface FormNameProps {
  className?: string;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onBlur?: React.FocusEventHandler<HTMLFormElement>;
  onKeyDown?: () => void;
}

export const Form: FC<FormNameProps> = ({
  className,
  children,
  onSubmit,
  onBlur,
  onKeyDown,
}) => {
  return (
    <Root
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onSubmit={onSubmit}
      className={className}
    >
      {children}
    </Root>
  );
};

const Root = styled.form`
  width: 100%;
`;
