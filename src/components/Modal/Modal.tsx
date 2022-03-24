import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

export const Modal: FC<ModalProps> = ({ children, className }) => {
  return <Root className={className}>{children}</Root>;
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
  border: 1px solid ${COLORS.black};
  border-radius: 10px;
  padding: 40px;
`;
