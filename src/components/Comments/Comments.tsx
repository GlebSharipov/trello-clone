import React, { FC, useState, useMemo } from "react";

import { TextForm } from "components";
import { COLORS } from "constant/colors";
import { addComment } from "store/ducks/comments";
import { useAppSelector, useAppDispatch, RootState } from "store/store";
import styled from "styled-components";

import { CommentItem } from "./components";

interface CommentsProps {
  userName: string;
  cardId: string;
}

export const Comments: FC<CommentsProps> = ({ cardId, userName }) => {
  const comments = useAppSelector((state: RootState) => state.comments);
  const dispatch = useAppDispatch();

  const [isCommentsEditable, setIsCommentsEditable] = useState(false);

  const filteredComment = useMemo(
    () => comments.filter((comment) => comment.cardId === cardId),
    [comments, cardId]
  );

  const handleCommentsEditable = () => {
    setIsCommentsEditable(true);
  };

  const onSubmitComment = (value: string) => {
    if (value.trim()) {
      dispatch(addComment({ cardId: cardId, commentText: value }));
      setIsCommentsEditable(false);
    }
    setIsCommentsEditable(false);
  };

  return (
    <Root>
      <CommentsTitle>Comments</CommentsTitle>
      {isCommentsEditable ? (
        <AddComment>
          <TextForm
            onSubmit={onSubmitComment}
            isOnBlur
            name="addComment"
            defaultValues=""
          />
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
            userName={userName}
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

const AddComment = styled.div`
  width: 100%;
`;

const CommentsContainer = styled.ul`
  max-height: 300px;
  overflow-x: auto;
`;
