import React, { FC, useState } from "react";

import { Modal, Button } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { commentsData, descriptionData } from "utils/mock";
import { v4 as uuidv4 } from "uuid";

import { CrossIcon } from "../icons/CrossIcon";

interface CardPopupProps {
  authorName?: string;
  columnName?: string;
  textCard?: string;
  comments?: string;
  isVisible: boolean;
}

export const CardPopup: FC<CardPopupProps> = ({ isVisible = false }) => {
  const [comments, setComments] = useState(commentsData);
  const [visiblePopup, setVisiblePopup] = useState(true);
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  const [descriptionText, setDescriptionText] = useState("");
  const [isCommentsEditable, setIsCommentsEditable] = useState(false);
  const [commentText, setCommentText] = useState("");
  const trimmedTextComment = commentText.trim();

  const handleAddComment = () => {
    const newComment = {
      commentText: trimmedTextComment,
      id: uuidv4(),
    };
    if (trimmedTextComment) {
      setComments((prevComment) => [...prevComment, newComment]);
      setCommentText("");
      setIsCommentsEditable(false);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === "Enter") {
      handleAddComment();
    }
  };

  const handleDescriptionEditable = () => {
    setIsDescriptionEditable(true);
  };

  const handleCommentsEditable = () => {
    setIsCommentsEditable(true);
  };

  const handleChangeTextDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleChangeTextComment: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setCommentText(e.target.value);
  };

  const handleBlurDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = () => {
    setIsDescriptionEditable(false);
  };

  const handleVisiblePopup = () => {
    setVisiblePopup(false);
  };

  const handleBlurComments: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = () => {
    if (trimmedTextComment) {
      handleAddComment();
    }
    setIsCommentsEditable(false);
  };

  return isVisible ? (
    <Root isVisible={visiblePopup} onClose={handleVisiblePopup}>
      <PopupHeader>
        <Container>
          <CardTitle>asdasd</CardTitle>
          <ColumnName>in list: NAME COLUMN </ColumnName>
        </Container>
        <AuthorName>Gleb</AuthorName>
        <ButtonCross onClick={handleVisiblePopup}>
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
              <StyledButton text="Save" type="submit" onClick={() => {}} />
              <ButtonCross onClick={handleVisiblePopup}>
                <StyledCrossIcon />
              </ButtonCross>
            </ButtonContainer>
          </ContainerDescription>
        )}
      </Description>
      <Comments>
        <CommentsTitle>Comments</CommentsTitle>
        {!isCommentsEditable ? (
          <CommentsFakeText onClick={handleCommentsEditable}>
            Write a comment...
          </CommentsFakeText>
        ) : (
          <CommentsContainer>
            <AddCommentsText
              value={commentText}
              onKeyDown={keyDownHandler}
              autoFocus
              onBlur={handleBlurComments}
              onChange={handleChangeTextComment}
              placeholder="Write a comment..."
            ></AddCommentsText>
            <ButtonContainer onClick={(e) => e.stopPropagation()}>
              <StyledButton
                text="Save"
                type="submit"
                onClick={handleAddComment}
              />
            </ButtonContainer>
          </CommentsContainer>
        )}
      </Comments>
      <CommentsContainer>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <AuthorName>Gleb</AuthorName>
            <TextComment value={comment.commentText} />
          </Comment>
        ))}
      </CommentsContainer>
    </Root>
  ) : null;
};

const Root = styled(Modal)`
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
  width: 90%;
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
  width: 90%;
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
  width: 100%;
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

const Comments = styled.div`
  width: 90%;
  max-height: 180px;
`;

const CommentsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const CommentsFakeText = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${COLORS.gray};
  &:hover {
    background-color: ${COLORS.lighte_gray};
  }
`;

const AddCommentsText = styled.textarea`
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

const CommentsContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  overflow-x: auto;
`;

const Comment = styled.div`
  width: 100%;
`;
const TextComment = styled.textarea`
  width: 90%;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  background-color: ${COLORS.gray};
`;
