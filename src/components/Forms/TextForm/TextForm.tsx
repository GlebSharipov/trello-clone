import React, { FC } from "react";

import { Button, ButtonCross } from "components/UI";
import { COLORS } from "constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import { isEmptyString } from "utils/validators";

interface TextFormProps {
  className?: string;
  name: string;
  defaultValues: string | undefined;
  isVisibleCross?: boolean;
  isValidate?: boolean;
  isOnBlur?: boolean;
  onSubmit: (value: string) => void;
}

export const TextForm: FC<TextFormProps> = ({
  className,
  name,
  defaultValues,
  isVisibleCross = false,
  isValidate = false,
  isOnBlur = false,
  onSubmit,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { [name]: defaultValues },
  });

  const handleTextSubmit: SubmitHandler<any> = (data) => {
    onSubmit(data[name]);
  };

  return (
    <Root className={className} onSubmit={handleSubmit(handleTextSubmit)}>
      <StyledTextArea
        className="text-form_input"
        {...register(name, {
          validate: isValidate ? isEmptyString : undefined,
          onBlur: isOnBlur ? handleSubmit(handleTextSubmit) : undefined,
        })}
        autoFocus
        {...props}
      />
      <Error>{errors?.[name] && <p>{errors?.[name].message}</p>}</Error>
      <ButtonContainer>
        <StyledButton text="Save" type="submit" />
        {isVisibleCross && (
          <ButtonCross onClick={() => reset({ [name]: "" })} />
        )}
      </ButtonContainer>
    </Root>
  );
};

const Root = styled.form`
  width: 100%;
`;

const Error = styled.div`
  font-size: 14px;
  color: ${COLORS.red};
`;

const StyledButton = styled(Button)`
  margin-top: 0;
  margin-right: 10px;
  border-radius: 4px;
  color: ${COLORS.white};
  background-color: ${COLORS.blue};
  &:hover {
    background-color: ${COLORS.dark_blue};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.dark_blue};
  }
`;

const StyledTextArea = styled(TextareaAutosize)`
  width: 100%;
  max-height: 75px;
  font-size: 18px;
  padding: 5px;
  border-radius: 4px;
  overflow-wrap: break-word;
  resize: none;
  overflow: hidden;
  border: 2px solid ${COLORS.blue};
  background-color: ${COLORS.white};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  margin-top: 5px;
`;
