import React, { FC, useState } from "react";

import { Comments } from "components";
import { Modal, Button } from "components/UI";
import { ButtonCross } from "components/UI";
import { COLORS } from "constant";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import { CommentType } from "types";

interface CardPopupProps {
  cardId: string;
  authorName: string;
  columnName: string;
  textCard: string;
  comments: Record<string, CommentType>;
  isVisible?: boolean;
  description: string;
  onClose?: () => void;
  addComment: (cardId: string, commentText: string) => void;
  deleteComment: (idCommet: string) => void;
  addDescription: (description: string, key: string) => void;
  editComment: (comment: string, commentId: string) => void;
  editCardText: (cardId: string, text: string) => void;
}

export const CardPopup: FC<CardPopupProps> = ({
  isVisible,
  authorName,
  textCard,
  columnName,
  comments,
  cardId,
  description,
  onClose,
  addComment,
  deleteComment,
  editComment,
  addDescription,
  editCardText,
}) => {
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  const [descriptionText, setDescriptionText] = useState(description);
  const [editTextCard, setEditTextCard] = useState(textCard);
  const [isCardEditable, setIsCardEditable] = useState(false);
  const trimmedText = descriptionText.trim();
  const trimmedCardText = editTextCard.trim();

  const toggleDescriptionEditable = () => {
    if (!isDescriptionEditable) {
      setIsDescriptionEditable(true);
    } else {
      setIsDescriptionEditable(false);
    }
  };

  const handleCardEditable = () => {
    setIsCardEditable(true);
    setEditTextCard(trimmedCardText);
  };

  const handleEditCard = (cardId: string, cardText: string) => {
    editCardText(cardId, cardText);
    setEditTextCard(trimmedCardText);
  };

  const handleChangeCardText: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setEditTextCard(e.target.value);
  };

  const handleBlur: React.ChangeEventHandler<HTMLTextAreaElement> = () => {
    if (trimmedCardText) {
      handleEditCard(cardId, trimmedCardText);
    }
    setIsCardEditable(false);
  };

  const handeleKeyDownEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      handleEditCard(cardId, editTextCard);
      setIsCardEditable(false);
    }
  };

  const handleAddDiscription = () => {
    if (trimmedText) {
      setDescriptionText(trimmedText);
      addDescription(trimmedText, cardId);
    }
  };

  const handleChangeTextDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleBlurDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = () => {
    handleAddDiscription();
    setIsDescriptionEditable(false);
  };

  return (
    <>
      {isVisible && (
        <StyledModal isCloseButtonShowed onClose={onClose}>
          <PopupHeader>
            <Container>
              {isCardEditable ? (
                <CardTitleInput
                  onKeyDown={handeleKeyDownEnter}
                  onBlur={handleBlur}
                  value={editTextCard}
                  autoFocus
                  onChange={handleChangeCardText}
                />
              ) : (
                <CardTitle onClick={handleCardEditable}>
                  {editTextCard}
                </CardTitle>
              )}

              <ColumnName>in list: {columnName} </ColumnName>
            </Container>
            <AuthorName>{authorName}</AuthorName>
          </PopupHeader>
          <Description>
            <DescriptionTitle>Description</DescriptionTitle>
            {!isDescriptionEditable ? (
              <DescriptionFakeText onClick={toggleDescriptionEditable}>
                {descriptionText
                  ? descriptionText
                  : "Add a more detailed description..."}
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
                    onClick={handleAddDiscription}
                  />
                  <ButtonCross onClick={toggleDescriptionEditable} />
                </ButtonContainer>
              </ContainerDescription>
            )}
          </Description>
          <Comments
            cardId={cardId}
            addComment={addComment}
            deleteComment={deleteComment}
            editComment={editComment}
            authorName={authorName}
            commentsData={comments}
          />
        </StyledModal>
      )}
    </>
  );
};

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
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
`;

const AuthorName = styled.p`
  max-width: 80px;
  word-break: break-all;
  font-size: 20px;
  margin-right: 20px;
  color: ${COLORS.black};
`;

const CardTitle = styled.h2`
  word-break: break-all;
  cursor: pointer;
  padding: 5px;
  width: 95%;
  font-size: 18px;
  border-radius: 4px;
  background-color: ${COLORS.gray};
  color: ${COLORS.black};
  &:hover {
    background-color: ${COLORS.lighte_gray};
  }
`;

const CardTitleInput = styled(TextareaAutosize)`
  width: 95%;
  font-size: 18px;
  padding: 5px;
  border-radius: 4px;
  overflow-wrap: break-word;
  resize: none;
  overflow: hidden;
  border: 2px solid ${COLORS.blue};
  background-color: ${COLORS.white};
`;

const ColumnName = styled.div`
  max-width: 560px;
  word-break: break-all;
  color: ${COLORS.black};
  font-size: 16px;
`;

const Description = styled.div`
  width: 100%;
  min-height: 20vh;
`;

const DescriptionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const DescriptionFakeText = styled.div`
  cursor: pointer;
  word-break: break-all;
  width: 100%;

  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${COLORS.gray};
  &:hover {
    background-color: ${COLORS.lighte_gray};
  }
`;

const DescriptionText = styled(TextareaAutosize)`
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
  max-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
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
