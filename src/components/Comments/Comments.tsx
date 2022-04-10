import React, { FC, useState, useMemo } from "react";

import { Form } from "components";
import { Button } from "components/UI";
import { COLORS } from "constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { addComment } from "store/ducks/comments";
import { useAppSelector, useAppDispatch, RootState } from "store/store";
import styled from "styled-components";

import { CommentItem } from "./components";

interface CommentsProps {
  userName: string;
  cardId: string;
}

interface Comment {
  commentText: string;
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Comment>();

  const onSubmit: SubmitHandler<Comment> = ({ commentText }) => {
    dispatch(addComment({ cardId: cardId, commentText: commentText }));
    setIsCommentsEditable(false);
    reset();
  };

  return (
    <Root>
      <CommentsTitle>Comments</CommentsTitle>
      {isCommentsEditable ? (
        <AddComment>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <AddCommentsText
              {...register("commentText", {
                required: "Field cannot be empty.",
                value: "",
                validate: {
                  value: (value) => value.trim().length > 0,
                },
              })}
              autoFocus
              placeholder="Write a comment..."
            />
            <Error>
              {errors?.commentText && <p>{errors.commentText.message}</p>}
            </Error>
            <ButtonContainer>
              <StyledButton text="Save" type="submit" />
            </ButtonContainer>
          </Form>
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

const Error = styled.div`
  font-size: 14px;
  color: ${COLORS.red};
`;
