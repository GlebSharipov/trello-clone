import React, { FC, useState } from "react";

import { Button } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { CommentType } from "types";

import { CommentItem } from "./components";

interface CommentsProps {
  authorName: string;
  commentsData: Record<string, CommentType>;
  cardId: string;
  addComment: (cardId: string, commentText: string) => void;
  deleteComment: (idCommet: string) => void;
  editComment: (comment: string, commentId: string) => void;
}

export const Comments: FC<CommentsProps> = ({
  commentsData,
  authorName,
  addComment,
  deleteComment,
  editComment,
  cardId,
}) => {
  const [isCommentsEditable, setIsCommentsEditable] = useState(false);
  const [commentText, setCommentText] = useState("");
  const trimmedTextComment = commentText.trim();

  const filteredComment = Object.values(commentsData).filter(
    (comment) => comment.cardId === cardId
  );

  const handleAddComment = () => {
    addComment(cardId, trimmedTextComment);

    setCommentText("");
    setIsCommentsEditable(false);
  };

  const handleCommentsEditable = () => {
    setIsCommentsEditable(true);
  };

  const handleKeyDownHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.code === "Enter") {
      handleAddComment();
    }
  };

  const handleChangeTextComment: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <Root>
      <CommentsTitle>Comments</CommentsTitle>
      {!isCommentsEditable ? (
        <CommentsFakeText onClick={handleCommentsEditable}>
          Write a comment...
        </CommentsFakeText>
      ) : (
        <AddComment>
          <AddCommentsText
            value={trimmedTextComment}
            onKeyDown={handleKeyDownHandler}
            autoFocus
            onChange={handleChangeTextComment}
            placeholder="Write a comment..."
          ></AddCommentsText>
          <ButtonContainer>
            <StyledButton
              text="Save"
              type="submit"
              onClick={handleAddComment}
            />
          </ButtonContainer>
        </AddComment>
      )}
      <CommentsContainer>
        {filteredComment.map((comment) => (
          <CommentItem
            key={comment.id}
            commentId={comment.id}
            commentText={comment.commentText}
            authorName={authorName}
            deleteComment={deleteComment}
            editComment={editComment}
          />
        ))}
      </CommentsContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const CommentsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const CommentsFakeText = styled.div`
  cursor: pointer;
  padding-bottom: 50px;
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
  padding-bottom: 100px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  border: 2px solid ${COLORS.blue};
  background-color: ${COLORS.white};
`;

const AddComment = styled.div`
  width: 100%;
`;

const CommentsContainer = styled.ul`
  max-height: 400px;
  overflow-x: auto;
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