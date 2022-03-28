import React, { FC } from "react";

import { ZINDEX } from "constant";
import styled from "styled-components";

import { CrossIcon } from "../../icons/CrossIcon";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isCloseButtonShowed?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isCloseButtonShowed = false,
}) => {
  return (
    <Root className={className}>
      {isCloseButtonShowed && <StyledCrossIcon />}
      {children}
    </Root>
  );
};

const Root = styled.form`
  z-index: ${ZINDEX.zindex35};
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
