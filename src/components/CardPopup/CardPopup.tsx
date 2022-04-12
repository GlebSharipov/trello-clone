import React, { FC, useState } from "react";

import { Comments, TextForm } from "components";
import { Modal } from "components/UI";
import { COLORS } from "constant";
import {
  updateCardText,
  updateDescription,
  selectCardById,
} from "store/ducks/cards";
import { selectColumnNameById } from "store/ducks/columns";
import { useAppSelector, useAppDispatch } from "store/store";
import styled from "styled-components";

interface CardPopupProps {
  userName: string;
  cardId: string;
  onClose: () => void;
}

export const CardPopup: FC<CardPopupProps> = ({
  userName,
  cardId,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const card = useAppSelector(selectCardById(cardId));

  const columnId = card.columnId;
  const columnName = useAppSelector(selectColumnNameById(columnId));

  const cardText = card.text;
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

  const handleSubmitCard = (value: string) => {
    dispatch(updateCardText({ id: cardId, cardText: value }));
    setIsCardEditable(false);
  };

  const handleSubmitDescription = (value: string) => {
    dispatch(updateDescription({ id: cardId, description: value.trim() }));
    setIsDescriptionEditable(false);
  };

  return (
    <StyledModal isCloseButtonShowed onClose={onClose}>
      <PopupHeader>
        <Container>
          {isCardEditable ? (
            <TextForm
              onSubmit={handleSubmitCard}
              isValidate
              isOnBlur
              name="cardEditable"
              defaultValues={cardText}
            />
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
            <TextForm
              onSubmit={handleSubmitDescription}
              name="description"
              defaultValues={description}
              isVisibleCross
            />
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
  height: 100%;
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

const ContainerDescription = styled.div`
  max-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
