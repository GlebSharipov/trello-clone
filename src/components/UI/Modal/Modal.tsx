import React, { FC } from "react";

import { COLORS, Z_INDEX } from "constant";
import styled from "styled-components";

import { ButtonCross } from "../ButtonCross";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isCloseButtonShowed?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isCloseButtonShowed = false,
  onClose,
}) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper className={className}>
        {isCloseButtonShowed && (
          <ButtonContainer>
            <ButtonCross onClick={onClose} />
          </ButtonContainer>
        )}
        {children}
      </ModalWrapper>
    </>
  );
};

const Overlay = styled.div`
  z-index: ${Z_INDEX.index20};
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.transparent_black};
  left: 0;
  top: 0;
  overflow-y: auto;
  position: fixed;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ModalWrapper = styled.div`
  position: absolute;
  max-width: 750px;
  max-height: 88vh;
  padding: 10px 20px;
  margin: 48px 0 80px;
  border-radius: 4px;
  border: none;
  z-index: ${Z_INDEX.index35};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
