import React, { FC, useState } from "react";

import { Button } from "components/UI";
import { COLORS } from "constant/colors";
import TextareaAutosize from "react-textarea-autosize";
import { deleteComment, updateComment } from "store/ducks/comments";
import { useAppDispatch } from "store/store";
import styled from "styled-components";

interface CommentItemProps {
  authorName: string;
  commentId: string;
  commentText: string;
}

export const CommentItem: FC<CommentItemProps> = ({
  authorName,
  commentId,
  commentText,
}) => {
  const dispatch = useAppDispatch();
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const [editCommentText, setEditCommentText] = useState(commentText);
  const trimmedComment = editCommentText.trim();

  const handleEditComment = () => {
    if (trimmedComment) {
      setEditCommentText(trimmedComment);
      dispatch(updateComment({ id: commentId, commentText: trimmedComment }));
      setIsCommentEdit(false);
    }
  };

  const handleChangeComment: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setEditCommentText(e.target.value);
  };

  const handleDeleteComment = () => {
    dispatch(deleteComment({ id: commentId }));
  };

  const handleVisibleCommentEdit = () => {
    setIsCommentEdit(true);
  };

  return (
    <Root>
      {!isCommentEdit ? (
        <>
          <AuthorName>{authorName}</AuthorName>
          <TextComment>{commentText}</TextComment>
          <ButtonContainerComment>
            <ButtonEdit onClick={handleVisibleCommentEdit}>Edit</ButtonEdit>
            <ButtonDelete onClick={handleDeleteComment}>Delete</ButtonDelete>
          </ButtonContainerComment>
        </>
      ) : (
        <>
          <EditCommentsText
            autoFocus
            value={editCommentText}
            onChange={handleChangeComment}
          ></EditCommentsText>
          <SaveButton text="Save" onClick={handleEditComment} />
        </>
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

const EditCommentsText = styled(TextareaAutosize)`
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

const SaveButton = styled(Button)`
  margin-top: 0;
  border-radius: 4px;
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.green};
  }
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
