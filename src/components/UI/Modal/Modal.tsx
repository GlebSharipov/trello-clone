import React, { FC } from "react";

import { COLORS } from "constant/colors";
import styled from "styled-components";

import { CrossIcon } from "../../icons/CrossIcon";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isVisible?: boolean;
  onClose?: React.MouseEventHandler;
  isCloseButtonShowed?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isVisible = true,
  onClose,
  isCloseButtonShowed = false,
}) => {
  return isVisible ? (
    <Root onClick={onClose}>
      <StyledModal className={className}>
        {isCloseButtonShowed && <StyledCrossIcon />}
        {children}
      </StyledModal>
    </Root>
  ) : null;
};

const Root = styled.div`
  z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.black};
  opacity: 0.4;
`;

const StyledModal = styled.form`
  position: relative;
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

const StyledCrossIcon = styled(CrossIcon)`
  position: absolute;
  cursor: pointer;
  right: 6px;
  top: 6px;
`;
