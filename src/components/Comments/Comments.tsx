import React, { FC, useState } from "react";

import { Button } from "components/UI";
import { COLORS } from "constant/colors";
import styled from "styled-components";
import { commentsData } from "utils/mock";
import { v4 as uuidv4 } from "uuid";

export const Comments: FC = () => {
  const [comments, setComments] = useState(commentsData);
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

  const handleBlurComments: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = () => {
    if (trimmedTextComment) {
      handleAddComment();
    }
    setIsCommentsEditable(false);
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
            value={commentText}
            onKeyDown={handleKeyDownHandler}
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
        </AddComment>
      )}
      <CommentsContainer>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <AuthorName>Gleb</AuthorName>
            <TextComment
              onChange={handleChangeTextComment}
              value={comment.commentText}
            />
          </Comment>
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

const Comment = styled.li`
  margin-top: 5px;
`;

const TextComment = styled.textarea`
  width: 100%;
  margin-bottom: 5px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  background-color: ${COLORS.gray};
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

const AuthorName = styled.p`
  font-size: 20px;
  margin-right: 20px;
  color: ${COLORS.black};
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
