import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isVisible: boolean;
  onClose?: React.MouseEventHandler;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isVisible = false,
  onClose,
}) => {
  return isVisible ? (
    <Root onClick={onClose}>
      <StyledModal className={className}>{children}</StyledModal>
    </Root>
  ) : (
    <RootNoActive />
  );
};

const Root = styled.div`
  z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: scale(1);
  background-color: ${COLORS.black};
  opacity: 0.4;
`;

const RootNoActive = styled.div`
  transform: scale(0);
`;

const StyledModal = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  height: 25vh;
  overflow: auto;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 40px;
`;
