import React, { FC, useState } from "react";

import { Comments, Form } from "components";
import { Modal, Button } from "components/UI";
import { ButtonCross } from "components/UI";
import { COLORS } from "constant";
import { useForm, SubmitHandler } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { updateCardText, updateDescription } from "store/ducks/cards";
import { selectCardById } from "store/ducks/cards";
import { selectColumnNameById } from "store/ducks/columns";
import { useAppSelector, useAppDispatch } from "store/store";
import styled from "styled-components";

interface CardPopupProps {
  userName: string;
  cardId: string;
  onClose: () => void;
}

interface ICardPopup {
  cardText: string;
  description: string;
}

export const CardPopup: FC<CardPopupProps> = ({
  userName,
  cardId,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const card = useAppSelector(selectCardById(cardId));

  const columnId = card?.columnId;
  const columnName = useAppSelector(selectColumnNameById(columnId));

  const cardText = card?.text;
  const description = card?.description;

  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  const [isCardEditable, setIsCardEditable] = useState(false);

  const toggleDescriptionEditable = () => {
    if (!isDescriptionEditable) {
      setIsDescriptionEditable(true);
    } else {
      setIsDescriptionEditable(false);
    }
  };

  const handleCardEditable = () => {
    setIsCardEditable(true);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICardPopup>();

  const handleSubmitCard: SubmitHandler<ICardPopup> = ({ cardText }) => {
    dispatch(updateCardText({ id: cardId, cardText: cardText }));
    setIsCardEditable(false);
  };

  const handleSubmitDescription: SubmitHandler<ICardPopup> = ({
    description,
  }) => {
    dispatch(updateDescription({ id: cardId, description: description }));
    setIsDescriptionEditable(false);
  };

  return (
    <StyledModal isCloseButtonShowed onClose={onClose}>
      <PopupHeader>
        <Container>
          {isCardEditable ? (
            <Form
              onBlur={handleSubmit(handleSubmitCard)}
              onSubmit={handleSubmit(handleSubmitCard)}
            >
              <CardTextInput
                {...register("cardText", {
                  required: "Field cannot be empty.",
                  value: cardText,
                })}
                autoFocus
              />
              <Error>
                {errors?.cardText && <p>{errors.cardText.message}</p>}
              </Error>
              <StyledButton text="Save" type="submit" />
            </Form>
          ) : (
            <CardText onClick={handleCardEditable}>{cardText}</CardText>
          )}

          <ColumnName>in list: {columnName}</ColumnName>
        </Container>
        <AuthorName>{userName}</AuthorName>
      </PopupHeader>
      <Description>
        <DescriptionTitle>Description</DescriptionTitle>
        {isDescriptionEditable ? (
          <ContainerDescription>
            <Form onSubmit={handleSubmit(handleSubmitDescription)}>
              <DescriptionText
                {...register("description", {
                  value: description,
                })}
                autoFocus
                placeholder="Add a more detailed description..."
              />
              <ButtonContainer>
                <StyledButton text="Save" type="submit" />
                <ButtonCross onClick={() => reset({ description: "" })} />
              </ButtonContainer>
            </Form>
          </ContainerDescription>
        ) : (
          <DescriptionFakeText onClick={toggleDescriptionEditable}>
            {description ? description : "Add a more detailed description..."}
          </DescriptionFakeText>
        )}
      </Description>

      <Comments cardId={cardId} userName={userName} />
    </StyledModal>
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

const Error = styled.div`
  font-size: 14px;
  color: ${COLORS.red};
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

const CardText = styled.h2`
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

const CardTextInput = styled(TextareaAutosize)`
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
  width: 100%;
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
