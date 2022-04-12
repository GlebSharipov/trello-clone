import React, { FC } from "react";

import { NameForm } from "components";
import { COLORS } from "constant/colors";
import { addUserName } from "store/ducks/user";
import { useAppDispatch } from "store/store";
import styled from "styled-components";

import { Modal } from "../UI";

export const UserNamePopup: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmitUserName = (value: string) => {
    dispatch(addUserName(value));
  };

  return (
    <Modal>
      <Container>
        <NameForm
          name="name"
          isVisibleButton
          placeholder="Enter your name"
          onSubmit={handleSubmitUserName}
        />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  min-height: 22vh;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 50px 40px;
`;
