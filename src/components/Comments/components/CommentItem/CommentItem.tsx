import React, { FC, useState } from "react";

import { TextForm } from "components";
import { COLORS } from "constant/colors";
import { deleteComment, updateComment } from "store/ducks/comments";
import { useAppDispatch } from "store/store";
import styled from "styled-components";

interface CommentItemProps {
  userName: string;
  commentId: string;
  commentText: string;
}

export const CommentItem: FC<CommentItemProps> = ({
  userName,
  commentId,
  commentText,
}) => {
  const dispatch = useAppDispatch();
  const [isCommentEdit, setIsCommentEdit] = useState(false);

  const handleDeleteComment = () => {
    dispatch(deleteComment({ id: commentId }));
  };

  const handleVisibleCommentEdit = () => {
    setIsCommentEdit(true);
  };

  const handleSubmitEditComment = (value: string) => {
    dispatch(updateComment({ id: commentId, commentText: value }));
    setIsCommentEdit(false);
  };

  return (
    <Root>
      {!isCommentEdit ? (
        <>
          <AuthorName>{userName}</AuthorName>
          <TextComment>{commentText}</TextComment>
          <ButtonContainerComment>
            <ButtonEdit onClick={handleVisibleCommentEdit}>Edit</ButtonEdit>
            <ButtonDelete onClick={handleDeleteComment}>Delete</ButtonDelete>
          </ButtonContainerComment>
        </>
      ) : (
        <TextForm
          onSubmit={handleSubmitEditComment}
          isValidate
          name="commentEditable"
          defaultValues={commentText}
        />
      )}
    </Root>
  );
};

const Root = styled.li`
  margin-top: 5px;
`;

const TextComment = styled.div`
  width: 100%;
  margin-bottom: 5px;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  word-break: break-all;
  box-shadow: 0 1px 0 ${COLORS.dark_gray};
  background-color: ${COLORS.gray};
  border: 1px solid ${COLORS.green};
`;

const AuthorName = styled.p`
  font-size: 20px;
  margin-right: 20px;
  color: ${COLORS.black};
`;

const ButtonContainerComment = styled.div`
  width: 30%;
`;

const ButtonEdit = styled.button`
  margin-right: 10px;
  font-size: 14px;
  border: none;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  &:hover {
    color: ${COLORS.green};
  }
`;

const ButtonDelete = styled.button`
  font-size: 14px;
  border: none;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  &:hover {
    color: ${COLORS.red};
  }
`;
