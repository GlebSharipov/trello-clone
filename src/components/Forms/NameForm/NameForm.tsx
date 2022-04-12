import React, { FC } from "react";

import { Button } from "components/UI";
import { Input } from "components/UI";
import { COLORS } from "constant/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { isEmptyString } from "utils/validators";

interface NameFormProps {
  className?: string;
  name: string;
  isMaxSymbols?: boolean;
  columnName?: string;
  defaultValues?: string | undefined;
  placeholder?: string;
  isVisibleButton?: boolean;
  isOnBlur?: boolean;
  onSubmit: (value: string) => void;
}

export const NameForm: FC<NameFormProps> = ({
  className,
  name,
  columnName,
  defaultValues,
  placeholder,
  isMaxSymbols = false,
  isVisibleButton = false,
  isOnBlur = false,
  onSubmit,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { [name]: defaultValues },
  });

  const handleTextSubmit: SubmitHandler<any> = (data) => {
    onSubmit(data[name]);
  };

  return (
    <Root className={className} onSubmit={handleSubmit(handleTextSubmit)}>
      <StyledInput
        {...register(name, {
          validate: isEmptyString,
          onBlur: isOnBlur ? handleSubmit(handleTextSubmit) : undefined,
          maxLength: isMaxSymbols
            ? {
                value: 20,
                message: "Max 20 symbols.",
              }
            : undefined,
        })}
        placeholder={placeholder}
        {...props}
      />
      <Error>{errors?.[name] && <p>{errors?.[name].message}</p>}</Error>
      <ButtonContainer>
        {isVisibleButton && <StyledButton text="Send" type="submit" />}
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
  background-color: ${COLORS.gray};
  border-radius: 5px;
  margin-top: auto;
  margin-bottom: 10px;
  &:hover {
    background-color: ${COLORS.dark_orange};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.orange};
  }
`;

const StyledInput = styled(Input)`
  font-size: 18px;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${COLORS.blue};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
