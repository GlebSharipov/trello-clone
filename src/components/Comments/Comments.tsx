import React, { FC, useState, useMemo } from "react";

import { Button } from "components/UI";
import { COLORS } from "constant/colors";
import TextareaAutosize from "react-textarea-autosize";
import { addComment } from "store/ducks/comments";
import { useAppSelector, useAppDispatch, RootState } from "store/store";
import styled from "styled-components";

import { CommentItem } from "./components";

interface CommentsProps {
  authorName: string;
  cardId: string;
}

export const Comments: FC<CommentsProps> = ({ cardId, authorName }) => {
  const comments = useAppSelector((state: RootState) => state.comments);
  const dispatch = useAppDispatch();

  const [isCommentsEditable, setIsCommentsEditable] = useState(false);
  const [commentText, setCommentText] = useState("");
  const trimmedTextComment = commentText.trim();

  const filteredComment = useMemo(
    () => comments.filter((comment) => comment.cardId === cardId),
    [comments, cardId]
  );

  const handleAddComment = () => {
    if (trimmedTextComment) {
      setCommentText(trimmedTextComment);
      dispatch(addComment({ cardId: cardId, commentText: trimmedTextComment }));
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

  return (
    <Root>
      <CommentsTitle>Comments</CommentsTitle>
      {isCommentsEditable ? (
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
      ) : (
        <CommentsFakeText onClick={handleCommentsEditable}>
          Write a comment...
        </CommentsFakeText>
      )}

      <CommentsContainer>
        {filteredComment.map((comment) => (
          <CommentItem
            key={comment.id}
            commentId={comment.id}
            commentText={comment.commentText}
            authorName={authorName}
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

const AddCommentsText = styled(TextareaAutosize)`
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
  max-height: 300px;
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
