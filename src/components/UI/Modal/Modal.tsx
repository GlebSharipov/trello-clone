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
      <StyledModal onClick={(e) => e.stopPropagation()} className={className}>
        {isCloseButtonShowed && <StyledCrossIcon />}
        {children}
      </StyledModal>
    </Root>
  ) : null;
};

const Root = styled.div`
  z-index: 20;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.transparent_black};
  align-items: flex-start;
  justify-content: center;
  left: 0;
  top: 0;
  overflow-y: auto;
  position: fixed;
`;

const StyledModal = styled.form`
  z-index: 35;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledCrossIcon = styled(CrossIcon)`
  position: absolute;
  cursor: pointer;
  right: 6px;
  top: 6px;
`;
