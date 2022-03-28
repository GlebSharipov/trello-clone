import React, { FC, useState } from "react";

import { Comments } from "components";
import { Modal, Button } from "components/UI";
import { COLORS, ZINDEX } from "constant";
import styled from "styled-components";

import { CrossIcon } from "../icons/CrossIcon";

interface CardPopupProps {
  authorName?: string;
  columnName?: string;
  textCard?: string;
  comments?: string;
  isVisible: boolean;
  onClose: React.MouseEventHandler;
}

export const CardPopup: FC<CardPopupProps> = ({ onClose, isVisible }) => {
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  const [descriptionText, setDescriptionText] = useState("");

  const handleDescriptionEditable = () => {
    setIsDescriptionEditable(true);
  };

  const handleChangeTextDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleBlurDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = () => {
    setIsDescriptionEditable(false);
  };

  return (
    <>
      {isVisible && (
        <Root>
          <StyledModal>
            <PopupHeader>
              <Container>
                <CardTitle>asdasd</CardTitle>
                <ColumnName>in list: NAME COLUMN </ColumnName>
              </Container>
              <AuthorName>Gleb</AuthorName>
              <ButtonCross onClick={onClose}>
                <StyledCrossIcon />
              </ButtonCross>
            </PopupHeader>
            <Description>
              <DescriptionTitle>Description</DescriptionTitle>
              {!isDescriptionEditable ? (
                <DescriptionFakeText onClick={handleDescriptionEditable}>
                  Add a more detailed description...
                </DescriptionFakeText>
              ) : (
                <ContainerDescription>
                  <DescriptionText
                    value={descriptionText}
                    onBlur={handleBlurDescription}
                    onChange={handleChangeTextDescription}
                    autoFocus
                    placeholder="Add a more detailed description..."
                  ></DescriptionText>
                  <ButtonContainer>
                    <StyledButton
                      text="Save"
                      type="submit"
                      onClick={() => {}}
                    />
                    <ButtonCross onClick={() => {}}>
                      <StyledCrossIcon />
                    </ButtonCross>
                  </ButtonContainer>
                </ContainerDescription>
              )}
            </Description>
            <Comments />
          </StyledModal>
        </Root>
      )}
    </>
  );
};

const Root = styled.div`
  z-index: ${ZINDEX.zIndex10};
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

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 750px;
  height: 80%;
  background-color: ${COLORS.white};
  padding: 10px 20px;
  margin: 48px 0 80px;
  border-radius: 4px;
  border: none;
`;

const Container = styled.div`
  width: 100%;
  flex: 1;
`;

const PopupHeader = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
`;

const AuthorName = styled.p`
  font-size: 20px;
  margin-right: 20px;
  color: ${COLORS.black};
`;

const CardTitle = styled.h2`
  font-size: 25px;
  color: ${COLORS.black};
`;

const StyledCrossIcon = styled(CrossIcon)`
  width: 30px;
`;

const ColumnName = styled.div`
  color: ${COLORS.black};
  font-size: 16px;
`;

const ButtonCross = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  &:hover {
    background-color: ${COLORS.lighte_gray};
  }
`;

const Description = styled.div`
  width: 100%;
  height: 20vh;
`;

const DescriptionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const DescriptionFakeText = styled.div`
  cursor: pointer;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${COLORS.gray};
  &:hover {
    background-color: ${COLORS.lighte_gray};
  }
`;

const DescriptionText = styled.textarea`
  height: 100px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  border: 2px solid ${COLORS.blue};
  background-color: ${COLORS.white};
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  margin-top: 5px;
`;

const StyledButton = styled(Button)`
  margin-top: 0;
  margin-right: 10px;
  color: ${COLORS.white};
  background-color: ${COLORS.blue};
  &:hover {
    background-color: ${COLORS.dark_blue};
  }
`;
