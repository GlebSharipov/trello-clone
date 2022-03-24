import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface ModalProps {
  children?: React.ReactNode;
  className?: string;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}

export const Modal: FC<ModalProps> = ({ children, className, onClose }) => {
  return (
    <Root className={className} onClick={onClose}>
      <StyledModal className={className}>{children}</StyledModal>
    </Root>
  );
};

const Root = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;
const StyledModal = styled.form`
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  height: 15vh;
  overflow: auto;
  border: 1px solid ${COLORS.black};
  color: ${COLORS.gray};
  border-radius: 10px;
  padding: 40px;
`;
